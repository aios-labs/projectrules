export interface RuleFrontmatter {
  description: string;
  globs?: string;
  __meta__service?: string;
  __meta__framework?: string;
  __meta__type?: string;
  __meta__author?: string;
  __meta__tags?: string[];
}

export interface Rule {
  slug: string;
  frontmatter: RuleFrontmatter;
  content: string;
  source: 'manual' | 'external' | string;
  path: string;
}

export interface FilterOptions {
  services: string[];
  frameworks: string[];
  types: string[];
}