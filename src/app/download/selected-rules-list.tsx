"use client";

import { Rule } from "@/types/rule";
import { X, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSelectedRules } from "@/hooks/use-selected-rules";
import { useEffect, useState } from "react";

interface SelectedRulesListProps {
  allRules: Rule[];
}

export function SelectedRulesList({ allRules }: SelectedRulesListProps) {
  const { selectedRules, deselectRule } = useSelectedRules();
  const [selectedRuleObjects, setSelectedRuleObjects] = useState<Rule[]>([]);

  // Filter rules to only show those selected
  useEffect(() => {
    const filteredRules = allRules.filter(rule => selectedRules.includes(rule.slug));
    setSelectedRuleObjects(filteredRules);
  }, [allRules, selectedRules]);

  if (selectedRuleObjects.length === 0) {
    return (
      <div className="text-center py-12 space-y-4 glass-card">
        <p className="text-muted-foreground">You haven&apos;t selected any rules yet</p>
        <Button asChild>
          <Link href="/">Browse Rules</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-2">
        You have selected {selectedRuleObjects.length} rule{selectedRuleObjects.length === 1 ? '' : 's'} for download.
      </p>

      <div className="grid gap-4">
        {selectedRuleObjects.map(rule => (
          <div key={rule.slug} className="glass-card p-4 rounded-lg flex items-center justify-between gap-4">
            <div>
              <div className="font-medium">{rule.frontmatter.framework}</div>
              <div className="text-sm text-muted-foreground">
                {rule.frontmatter.service} • {rule.frontmatter.type}
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => deselectRule(rule.slug)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          The rules will be downloaded as a ZIP archive containing the markdown files.
        </p>

        <Button asChild>
          <Link href={`/api/download?slugs=${selectedRules.join(',')}`}>
            <Download className="mr-2 h-4 w-4" />
            Download ZIP
          </Link>
        </Button>
      </div>
    </div>
  );
}