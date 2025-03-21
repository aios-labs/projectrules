"use client";

import { useSelectedRules } from "@/hooks/use-selected-rules";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface SelectRuleButtonProps {
  slug: string;
}

export function SelectRuleButton({ slug }: SelectRuleButtonProps) {
  const { selectRule, isRuleSelected } = useSelectedRules();
  const isSelected = isRuleSelected(slug);

  return (
    <Button
      variant={isSelected ? "secondary" : "default"}
      onClick={() => selectRule(slug)}
      disabled={isSelected}
    >
      <Download className="mr-2 h-4 w-4" />
      {isSelected ? 'Selected' : 'Select Rule'}
    </Button>
  );
}