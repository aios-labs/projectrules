"use client";

import Link from 'next/link';
import { X, SquareArrowDown, Github } from 'lucide-react';
import { useSelectedRules } from '@/hooks/use-selected-rules';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLocalStorage } from 'usehooks-ts';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { selectedRules } = useSelectedRules();
  const selectedCount = selectedRules.length;
  return (
    <TooltipProvider>
      <div className="glass-navbar sticky top-0 z-10 w-full">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className={ cn(
              "flex items-center gap-2 text-xl md:text-2xl font-bold font-mono tracking-tight",
              selectedCount > 0 && "hidden md:flex"
            )}
          >
            <span >projectrules.ai</span>
          </Link>

          <div className="flex items-center gap-3 ">
            <ClearButton />
            <DownloadLink />
            <GitHubLink />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

function ClearButton() {
  const { selectedRules, clearSelections } = useSelectedRules();
  const selectedCount = selectedRules.length;

  if (selectedCount === 0) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={clearSelections}
      className="cursor-pointer border-muted-foreground/30 hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
    >
      <X size={14} className="mr-1" />
      <span>Clear</span>
    </Button>
  );
}

function useShowTooltip() {
  const { selectedRules } = useSelectedRules();
  const [tooltipShown, setTooltipShown] = useLocalStorage('tooltipShown', false);
  const [showTooltip, setShowTooltip] = useState(false);
  const firstRender = useRef(true);

  // Handle tooltip showing logic just once on client side
  useEffect(() => {
    // Reset tooltip shown state when all rules are cleared
    if (selectedRules.length === 0 && !firstRender.current) {
      setTooltipShown(false);
      return;
    }
    firstRender.current = false;

    // Only show tooltip on rule selection if this is the first time
    if (selectedRules.length > 0 && !tooltipShown) {
      // Mark as shown in localStorage
      setTooltipShown(true);

      // Show the tooltip
      setShowTooltip(true);
    }
  }, [selectedRules.length, tooltipShown, setTooltipShown]);

    // Handle the tooltip timer separately from rule count changes
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (showTooltip) {
      timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showTooltip]);


  return showTooltip;
}

function DownloadLink() {
  const { selectedRules } = useSelectedRules();
  const selectedCount = selectedRules.length;
  const showTooltip = useShowTooltip();

  if (selectedCount === 0) return null;

  return (
    <Tooltip open={showTooltip}>
      <TooltipTrigger asChild>
        <Button asChild>
          <Link
            href="/download"
            // className="flex items-center gap-2 bg-primary px-3 py-2 text-sm text-primary-foreground"
          >
            <SquareArrowDown />
            <span>Download selected {selectedCount > 0 ? `(${selectedCount})` : ''}</span>
          </Link>
        </Button>

      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        align="end"
        className="bg-primary text-primary-foreground p-3 max-w-[250px]"
      >
        <p className="font-medium mb-1">Rule added to your selection!</p>
        <p className="text-xs">Continue selecting rules and click this button when ready to download.</p>
      </TooltipContent>
    </Tooltip>
  );
}

function GitHubLink() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="https://github.com/aios-labs/projectrules" target="_blank" rel="noopener noreferrer">
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub Repository</span>
      </Link>
    </Button>
  );
}