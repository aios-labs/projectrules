'use client';

import { useLocalStorage } from 'usehooks-ts';
export const SELECTED_RULES_KEY = 'projectrules-selected';

export function useSelectedRules() {
  const [selectedRules, setSelectedRules] = useLocalStorage<string[]>(
    SELECTED_RULES_KEY,
    [],
    { initializeWithValue: false }
  );

  const toggleRule = (slug: string) => {
    if (selectedRules.includes(slug)) {
      deselectRule(slug);
    } else {
      selectRule(slug);
    }
  };

  const selectRule = (slug: string) => {
    if (!selectedRules.includes(slug)) {
      setSelectedRules([...selectedRules, slug]);
    }
  };

  const deselectRule = (slug: string) => {
    setSelectedRules(selectedRules.filter(item => item !== slug));
  };

  const clearSelections = () => {
    setSelectedRules([]);
  };

  const isRuleSelected = (slug: string) => {
    return selectedRules.includes(slug);
  };

  return {
    selectedRules,
    toggleRule,
    selectRule,
    deselectRule,
    clearSelections,
    isRuleSelected,
  };
}