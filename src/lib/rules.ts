import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Rule, RuleFrontmatter } from '@/types/rule';
import { getRemoteRules } from './remote-rules';

const RULES_DIR = path.join(process.cwd(), 'data', 'rules');

export async function getRules(): Promise<Rule[]> {
  const rules: Rule[] = [];

  // Get manual rules
  const manualRulesDir = path.join(RULES_DIR, 'manual');
  const manualRules = await readRulesFromDirectory(manualRulesDir, 'manual');
  rules.push(...manualRules);

  // Get remote rules from GitHub repositories
  try {
    const remoteRules = await getRemoteRules();
    rules.push(...remoteRules);
  } catch (error) {
    console.error('Error fetching remote rules:', error);
    // Continue without remote rules if there are API issues
  }

  return rules.sort((a, b) => (b.frontmatter.__meta__rate ?? 0) - (a.frontmatter.__meta__rate ?? 0));
}

async function readRulesFromDirectory(dir: string, source: 'manual' | 'external'): Promise<Rule[]> {
  const rules: Rule[] = [];

  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(dir, file);
        try {
          const fileContent = await fs.readFile(filePath, 'utf8');

          // Parse frontmatter and content
          const { data, content } = matter(fileContent);
          const frontmatter = data as RuleFrontmatter;

          // Create slug from filename
          const slug = file.replace(/\.md$/, '');

          rules.push({
            slug,
            frontmatter,
            content,
            source,
            path: filePath,
          });
        } catch (fileError) {
          console.error(`Error parsing file ${filePath}:`, fileError);
          // Continue processing other files
        }
      }
    }
  } catch (error) {
    console.error(`Error reading rules from ${dir}:`, error);
  }

  return rules;
}

export function getUniqueValues(rules: Rule[], key: keyof RuleFrontmatter): (string | number)[] {
  const values = new Set<string | number>();

  rules.forEach(rule => {
    const value = rule.frontmatter[key];
    if (value) {
      if (Array.isArray(value)) {
        value.forEach(item => values.add(item));
      } else {
        values.add(value);
      }
    }
  });

  return Array.from(values).sort();
}

export function filterRules(
  rules: Rule[],
  services: string[] = [],
  frameworks: string[] = [],
  types: string[] = []
): Rule[] {
  return rules.filter(rule => {
    const matchesService = services.length === 0 || services.includes(rule.frontmatter.__meta__service ?? '');
    const matchesFramework = frameworks.length === 0 || frameworks.includes(rule.frontmatter.__meta__framework ?? '');
    const matchesType = types.length === 0 || types.includes(rule.frontmatter.__meta__type ?? '');

    return matchesService && matchesFramework && matchesType;
  });
}

export async function getRuleBySlug(slug: string): Promise<Rule | null> {
  const rules = await getRules();
  return rules.find(rule => rule.slug === slug) || null;
}