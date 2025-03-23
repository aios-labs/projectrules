'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Rule } from '@/types/rule';
import { useSelectedRules } from '@/hooks/use-selected-rules';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface RuleCardProps {
  rule: Rule;
}

export function RuleCard({ rule }: RuleCardProps) {
  const { toggleRule, isRuleSelected } = useSelectedRules();
  const isSelected = isRuleSelected(rule.slug);

  // Extract the first h1 from content
  const getFirstH1 = () => {
    if (!rule.content) return rule.frontmatter.__meta__framework;

    // Look for the first h1 tag in the content
    const h1Match = rule.content.match(/<h1>(.*?)<\/h1>/) || rule.content.match(/# (.*?)(\n|$)/);

    return h1Match ? h1Match[1] : rule.frontmatter.__meta__framework;
  };

  // Handle select/deselect with preventing link navigation
  const handleSelectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleRule(rule.slug); // This toggles selection state
  };

  return (
    <div className="relative">
      <div className="relative group h-full">
        {/* Checkbox button with larger clickable area */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={cn(
            "absolute top-2 right-2 z-30 h-8 w-8 p-0.5 rounded-md cursor-pointer",
            isSelected
              ? "hover:bg-primary/20"
              : "hover:bg-primary/10"
          )}
          onClick={handleSelectClick}
          aria-label={isSelected ? "Remove from selection" : "Add to selection"}
        >
          <div className={cn(
            "h-5 w-5 rounded flex items-center justify-center transition-colors",
            isSelected
              ? "bg-primary text-primary-foreground"
              : "border-2 border-muted-foreground/40"
          )}>
            {isSelected && <Check className="h-3.5 w-3.5" />}
          </div>
        </Button>

        <Link href={`/rules/${rule.slug}`} className="block h-full">
          <Card className={cn(
            "overflow-hidden transition-all hover:shadow-lg border border-border/50 hover:border-border dark:hover:border-border/80 bg-card/70 backdrop-blur-sm h-full relative flex flex-col",
            isSelected && "ring-1 ring-primary/40"
          )}>
            <CardContent className="flex-1">
              <div className="flex flex-col gap-4">
                {/* Title from first h1 in content */}
                <div>
                  <h3 className="font-bold text-lg md:text-xl transition-colors mr-4 text-indigo-950 tracking-tighter">
                    {getFirstH1() ?? rule.slug}
                  </h3>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-muted-foreground font-light line-clamp-3 overflow-hidden">
                  {rule.frontmatter.description}
                </p>

              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              {/* Globs display */}
              {rule.frontmatter.globs && (
                <div className="font-mono text-xs bg-muted/90 p-2.5 rounded-md border border-border/50 w-full">
                  <div className="flex items-center text-foreground/70 mb-1">
                    <span className="font-semibold">Globs</span>
                  </div>
                  <div className="overflow-x-auto whitespace-nowrap text-muted-foreground scrollbar-hide">
                    {rule.frontmatter.globs}
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}