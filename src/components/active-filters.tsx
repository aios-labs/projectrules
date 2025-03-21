'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ActiveFiltersProps {
  services: string[];
  frameworks: string[];
  types: string[];
}

export function ActiveFilters({ services, frameworks, types }: ActiveFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const removeFilter = (type: 'services' | 'frameworks' | 'types', value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    // Get current values for this filter type
    const currentValues = params.get(type)?.split(',') || [];
    // Remove the selected value
    const newValues = currentValues.filter(v => v !== value);

    if (newValues.length > 0) {
      params.set(type, newValues.join(','));
    } else {
      params.delete(type);
    }

    router.push(`/?${params.toString()}`);
  };

  const noActiveFilters = services.length === 0 && frameworks.length === 0 && types.length === 0;

  if (noActiveFilters) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="text-sm text-muted-foreground mr-2 flex items-center">
        Active filters:
      </div>

      {services.map(service => (
        <Badge
          key={`service-${service}`}
          variant="secondary"
          className="pl-3 pr-2 flex items-center gap-1"
        >
          <span>Service: {service}</span>
          <button
            onClick={() => removeFilter('services', service)}
            className="ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-muted"
          >
            <X size={12} />
            <span className="sr-only">Remove</span>
          </button>
        </Badge>
      ))}

      {frameworks.map(framework => (
        <Badge
          key={`framework-${framework}`}
          variant="secondary"
          className="pl-3 pr-2 flex items-center gap-1"
        >
          <span>Framework: {framework}</span>
          <button
            onClick={() => removeFilter('frameworks', framework)}
            className="ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-muted"
          >
            <X size={12} />
            <span className="sr-only">Remove</span>
          </button>
        </Badge>
      ))}

      {types.map(type => (
        <Badge
          key={`type-${type}`}
          variant="secondary"
          className="pl-3 pr-2 flex items-center gap-1"
        >
          <span>Type: {type}</span>
          <button
            onClick={() => removeFilter('types', type)}
            className="ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-muted"
          >
            <X size={12} />
            <span className="sr-only">Remove</span>
          </button>
        </Badge>
      ))}

      {/* Clear all button */}
      {!noActiveFilters && (
        <Badge
          variant="outline"
          className="cursor-pointer"
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('services');
            params.delete('frameworks');
            params.delete('types');
            router.push(`/?${params.toString()}`);
          }}
        >
          Clear all
        </Badge>
      )}
    </div>
  );
}