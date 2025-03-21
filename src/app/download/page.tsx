import { getRules } from '@/lib/rules';
import Link from 'next/link';
import { SelectedRulesList } from './selected-rules-list';
import { ArrowLeft } from 'lucide-react';

export default async function DownloadPage() {
  const allRules = await getRules();

  // For server component, we'll need to use client component for selected rules

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all rules
        </Link>
      </div>

      <div className="glass-card rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Download Rules</h1>

        <SelectedRulesList allRules={allRules} />
      </div>
    </div>
  );
}