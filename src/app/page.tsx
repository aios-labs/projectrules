import { Metadata } from 'next';
import Link from 'next/link';
import { Rule } from '@/types/rule';
import { getRules } from '@/lib/rules';
import { RuleCard } from '@/components/rule-card';
import { Filters } from '@/components/filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Rules App',
  description: 'Browse, filter, and download project rules',
};

// Helper to get params safely
function getParamValue(param: string | string[] | undefined): string[] {
  if (!param) return [];
  return Array.isArray(param) ? param : [param];
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Next.js requires searchParams to be awaited in new versions
  const resolvedParams = await searchParams;

  // Get search parameters safely
  const services = getParamValue(resolvedParams.service);
  const frameworks = getParamValue(resolvedParams.framework);
  const types = getParamValue(resolvedParams.type);

  const rules = await getRules();

  // Filter rules
  const filteredRules = rules.filter((rule: Rule) => {
    // Check if rule matches all active filters
    const serviceMatch = services.length === 0 ||
      services.includes(rule.frontmatter.__meta__service ?? '');

    const frameworkMatch = frameworks.length === 0 ||
      frameworks.includes(rule.frontmatter.__meta__framework ?? '');

    const typeMatch = types.length === 0 ||
      types.includes(rule.frontmatter.__meta__type ?? '');

    return serviceMatch && frameworkMatch && typeMatch;
  });

  // Count rules by framework for summary display
  const frameworkCounts = rules.reduce((acc: Record<string, number>, rule: Rule) => {
    const framework = rule.frontmatter.__meta__framework;
    if (!framework) return acc;
    acc[framework] = (acc[framework] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Count how many rules each filter option has
  const counts = {
    services: rules.reduce((acc: Record<string, number>, rule: Rule) => {
      const service = rule.frontmatter.__meta__service;
      if (!service) return acc;
      acc[service] = (acc[service] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    frameworks: frameworkCounts,
    types: rules.reduce((acc: Record<string, number>, rule: Rule) => {
      const type = rule.frontmatter.__meta__type;
      if (!type) return acc;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  // Extract unique filter options
  const filterOptions = {
    services: [...new Set(rules.map(rule => rule.frontmatter.__meta__service ?? ''))].sort().filter(Boolean),
    frameworks: [...new Set(rules.map(rule => rule.frontmatter.__meta__framework ?? ''))].sort().filter(Boolean),
    types: [...new Set(rules.map(rule => rule.frontmatter.__meta__type ?? ''))].sort().filter(Boolean),
  };

  return (
    <main className="mx-auto px-4 py-6">
      {/* Hero section */}
      <section className="mb-12 text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-3">Project Rules</h1>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto max-w-lg text-balance text-xl mt-8">
          A collection of curated instructions and projects rules for your AI-powered IDE tools.
        </p>
      </section>

      {/* Main content with sidebar layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar - only shows as sidebar on md and up */}
        <aside className="w-full md:w-64 lg:w-72 shrink-0">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-muted-foreground">
             Filters
            </h2>
          </div>
          <Filters
            services={filterOptions.services}
            frameworks={filterOptions.frameworks}
            types={filterOptions.types}
            counts={counts}
          />
        </aside>

        {/* Results section */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {filteredRules.length > 0 ? `Rules (${filteredRules.length})` : 'Rules'}
            </h2>
            <Button variant="outline" asChild>
              <Link href="/download"><Plus /> Add rule</Link>
            </Button>
          </div>

          {filteredRules.length === 0 ? (
            <div className="text-center py-12 bg-card/70 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm">
              <p className="text-muted-foreground mb-4">No rules found for the selected filters</p>
              <Button
                variant="outline"
                asChild
              >
                <Link href="/">Clear all filters</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredRules.map((rule) => (
                <RuleCard key={rule.slug} rule={rule} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
