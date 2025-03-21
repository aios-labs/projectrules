import fs from 'fs/promises';
import path from 'path';
import { Rule, RuleFrontmatter } from '@/types/rule';
import matter from 'gray-matter';
import { getCachedData, DEFAULT_CACHE_TTL } from './redis';

// Load source configuration
interface GithubSource {
  id: string;
  name: string;
  type: 'github';
  owner: string;
  repo: string;
  path: string;
  branch: string;
  __meta__service: string;
  __meta__framework: string;
  __meta__type: string;
  __meta__tags: string[];
}

interface SourceConfig {
  sources: GithubSource[];
}

async function loadSources(): Promise<SourceConfig> {
  try {
    const sourcesPath = path.join(process.cwd(), 'data', 'sources.json');
    const sourcesContent = await fs.readFile(sourcesPath, 'utf-8');
    return JSON.parse(sourcesContent) as SourceConfig;
  } catch (error) {
    console.error('Error loading sources configuration:', error);
    return { sources: [] };
  }
}

// Fetch rules from a GitHub repository
async function fetchGithubRules(source: GithubSource): Promise<Rule[]> {
  const cacheKey = `github-rules:${source.owner}:${source.repo}:${source.path}:${source.branch}`;

  // Use our caching helper to either fetch from cache or get fresh data
  return await getCachedData<Rule[]>(
    cacheKey,
    async () => {
      console.log(`Fetching rules from ${source.name}...`);

      // Fetch files from GitHub repo
      const filesUrl = `https://api.github.com/repos/${source.owner}/${source.repo}/contents/${source.path}?ref=${source.branch}`;
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      };

      // Add GitHub token if available
      if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
      }

      const response = await fetch(filesUrl, { headers });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const files = await response.json();
      const rules: Rule[] = [];

      // Only process markdown files
      const mdFiles = files.filter((file: { name: string; type: string; download_url: string; path: string }) =>
        file.name.endsWith('.md') && file.type === 'file'
      );

      // Fetch content for each file
      for (const file of mdFiles) {
        const contentResponse = await fetch(file.download_url);
        const content = await contentResponse.text();

        // Parse frontmatter
        const { data, content: markdownContent } = matter(content);

        // Create frontmatter with defaults if fields missing
        const frontmatter: RuleFrontmatter = {
          description: data.description,
          globs: data.globs,
          __meta__service: source.__meta__service,
          __meta__framework: source.__meta__framework,
          __meta__type: source.__meta__type,
          __meta__author: source.owner,
          __meta__tags: source.__meta__tags,
        };

        rules.push({
          slug: `${source.id}-${file.name.replace(/\.md$/, '')}`,
          frontmatter,
          content: markdownContent,
          source: source.id,
          path: file.path
        });
      }

      return rules;
    },
    // Cache for 1 hour by default
    DEFAULT_CACHE_TTL
  );
}

export async function getRemoteRules(): Promise<Rule[]> {
  try {
    const { sources } = await loadSources();
    const allRules: Rule[] = [];

    // Process each source in parallel
    const rulesPromises = sources.map(async (source) => {
      if (source.type === 'github') {
        return await fetchGithubRules(source);
      }
      return [] as Rule[];
    });

    const results = await Promise.allSettled(rulesPromises);

    // Add successful results to allRules
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        allRules.push(...result.value);
      } else {
        console.error(`Error fetching rules from ${sources[index].name}:`, result.reason);
      }
    });

    return allRules;

  } catch (error) {
    console.error('Error fetching remote rules:', error);
    return [];
  }
}