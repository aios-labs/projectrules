import { notFound } from 'next/navigation';
import { getRuleBySlug } from '@/lib/rules';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { SelectRuleButton } from './select-rule-button';
import { MarkdownDisplay } from './markdown-display';

interface RuleDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: RuleDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rule = await getRuleBySlug(resolvedParams.slug);

  if (!rule) {
    return {
      title: 'Rule Not Found',
    };
  }

  return {
    title: `${rule.frontmatter.__meta__framework} - ${rule.frontmatter.__meta__service}`,
    description: rule.frontmatter.description,
  };
}

export default async function RuleDetail({ params }: RuleDetailProps) {
  const resolvedParams = await params;
  const rule = await getRuleBySlug(resolvedParams.slug);

  if (!rule) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all rules
        </Link>
      </div>

      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{rule.frontmatter.__meta__framework}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">{rule.frontmatter.__meta__service}</Badge>
            <Badge variant="outline">{rule.frontmatter.__meta__type}</Badge>
            <Badge variant="outline">{rule.source}</Badge>
          </div>
        </div>

        <SelectRuleButton slug={rule.slug} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-muted-foreground">{rule.frontmatter.description}</p>
      </div>

      {rule.frontmatter.globs && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Globs</h2>
          <div className="bg-muted p-4 rounded font-mono text-sm overflow-x-auto">
            <code>{rule.frontmatter.globs}</code>
          </div>
        </div>
      )}

      <div className="prose prose-slate dark:prose-invert max-w-none">
        {/* Display markdown as code with syntax highlighting */}
        <MarkdownDisplay content={`---
description: ${rule.frontmatter.description}
globs: ${rule.frontmatter.globs}
---

${rule.content}
`} />
      </div>
    </div>
  );
}