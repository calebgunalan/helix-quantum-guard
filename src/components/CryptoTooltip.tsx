import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { cryptoTerms } from '@/data/mockData';

interface CryptoTooltipProps {
  term: string;
  children?: React.ReactNode;
  className?: string;
}

export function CryptoTooltip({ term, children, className }: CryptoTooltipProps) {
  const description = cryptoTerms[term] || `Technical term: ${term}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className={`inline-flex items-center gap-1 cursor-help ${className || ''}`}>
          {children || term}
          <Info className="h-3.5 w-3.5 text-muted-foreground hover:text-primary transition-colors" />
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-sm" side="top">
        <p className="font-semibold text-primary mb-1">{term}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
