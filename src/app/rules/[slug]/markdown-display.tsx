'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface MarkdownDisplayProps {
  content: string;
}

export function MarkdownDisplay({ content }: MarkdownDisplayProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="overflow-hidden rounded-md relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 z-10 cursor-pointer"
              onClick={copyToClipboard}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? "Copied!" : "Copy to clipboard"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SyntaxHighlighter
        language="markdown"
        style={isDark ? oneDark : oneLight}
        customStyle={{
          borderRadius: 'var(--rounded)',
          margin: 0,
          backgroundColor: 'hsl(230, 1%, 98%)',
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}