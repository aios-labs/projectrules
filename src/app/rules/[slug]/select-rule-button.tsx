"use client";

import { useSelectedRules } from "@/hooks/use-selected-rules";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";

interface SelectRuleButtonProps {
  slug: string;
}

export function SelectRuleButton({ slug }: SelectRuleButtonProps) {
  const { toggleRule, isRuleSelected } = useSelectedRules();
  const isSelected = isRuleSelected(slug);

  return (
    <Button
      className="cursor-pointer"
      variant={isSelected ? "secondary" : "default"}
      onClick={() => toggleRule(slug)}
    >
      {isSelected ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
      {isSelected ? 'Selected' : 'Select Rule'}
    </Button>
  );
}