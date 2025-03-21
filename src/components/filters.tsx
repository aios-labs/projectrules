'use client';

import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';

interface FiltersProps {
  services: string[];
  frameworks: string[];
  types: string[];
  counts: {
    services: Record<string, number>;
    frameworks: Record<string, number>;
    types: Record<string, number>;
  };
}

export function Filters({ services = [], frameworks = [], types = [], counts = { services: {}, frameworks: {}, types: {} } }: FiltersProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Create initial state from URL params
  const defaultServices = searchParams.getAll('service');
  const defaultFrameworks = searchParams.getAll('framework');
  const defaultTypes = searchParams.getAll('type');

  // Create active state (what is currently applied)
  const [activeFilters, setActiveFilters] = useState({
    services: defaultServices,
    frameworks: defaultFrameworks,
    types: defaultTypes,
  });

  // Create temp state (what user selects in the sheet)
  const [tempFilters, setTempFilters] = useState({
    services: defaultServices,
    frameworks: defaultFrameworks,
    types: defaultTypes,
  });

  // Create expanded state for collapsible sections
  const [expanded, setExpanded] = useState({
    services: true,
    frameworks: false,
    types: false,
  });

  // Update temp filters when URL params change
  useEffect(() => {
    setTempFilters({
      services: searchParams.getAll('service'),
      frameworks: searchParams.getAll('framework'),
      types: searchParams.getAll('type'),
    });
    setActiveFilters({
      services: searchParams.getAll('service'),
      frameworks: searchParams.getAll('framework'),
      types: searchParams.getAll('type'),
    });
  }, [searchParams]);

  // Count total active filters
  const totalActiveFilters =
    activeFilters.services.length +
    activeFilters.frameworks.length +
    activeFilters.types.length;

  // Toggle filter in the temp state
  const toggleTempFilter = useCallback((type: 'services' | 'frameworks' | 'types', value: string) => {
    setTempFilters(prev => {
      const current = prev[type];
      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter(item => item !== value)
          : [...current, value]
      };
    });
  }, []);

  // Toggle a quick filter (applies immediately)
  const toggleQuickFilter = useCallback((type: 'services' | 'frameworks' | 'types', value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    const paramName = type === 'services' ? 'service' : type === 'frameworks' ? 'framework' : 'type';

    if (searchParams.getAll(paramName).includes(value)) {
      // Remove this value
      const values = searchParams.getAll(paramName).filter(s => s !== value);
      newParams.delete(paramName);
      values.forEach(s => newParams.append(paramName, s));
    } else {
      // Add this value
      newParams.append(paramName, value);
    }

    router.push(`${pathname}?${newParams.toString()}`);
  }, [searchParams, pathname, router]);

  // Apply all temp filters to the URL
  const applyFilters = useCallback(() => {
    const newParams = new URLSearchParams();

    // Add all selected filters
    tempFilters.services.forEach(service => newParams.append('service', service));
    tempFilters.frameworks.forEach(framework => newParams.append('framework', framework));
    tempFilters.types.forEach(type => newParams.append('type', type));

    router.push(`${pathname}?${newParams.toString()}`);
  }, [tempFilters, pathname, router]);

  // Reset all filters
  const resetFilters = useCallback(() => {
    router.push(`${pathname}?${new URLSearchParams().toString()}`);

    setTempFilters({
      services: [],
      frameworks: [],
      types: [],
    });
  }, [pathname, router]);

  // Toggle section expansion
  const toggleSection = useCallback((section: 'services' | 'frameworks' | 'types') => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, []);

  // Component for filter section to avoid duplicate code
  const FilterSection = ({
    title,
    type,
    items,
    itemCounts,
    isExpanded,
    activeItems,
    paramName,
    onItemToggle
  }: {
    title: string;
    type: 'services' | 'frameworks' | 'types';
    items: string[];
    itemCounts: Record<string, number>;
    isExpanded: boolean;
    activeItems: string[];
    paramName: string;
    onItemToggle: (type: 'services' | 'frameworks' | 'types', value: string) => void;
  }) => {

    return (
      <div className={`${type !== 'types' ? 'py-4 border-b border-gray-200' : 'pt-4 pb-2'}`}>
        <div
          className="flex items-center justify-between cursor-pointer mb-3"
          onClick={() => toggleSection(type)}
        >
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm">{title}</h3>
            {activeItems.length === 1 && (
              <Badge variant="secondary" className="h-6 px-2 text-xs font-normal bg-gray-200 text-gray-800">
                {activeItems[0]}
              </Badge>
            )}
            {activeItems.length > 1 && (
              <Badge variant="secondary" className="h-6 w-6 p-0 flex items-center justify-center text-xs font-normal bg-gray-200 text-gray-800">
                {activeItems.length}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" className="text-gray-500 cursor-pointer">
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>

        {isExpanded && (
          <div className="space-y-2 mt-2">
            {items.map((item) => (
              <div key={item} className="flex items-center space-x-2 pl-1 py-1 rounded hover:bg-gray-50">
                <Checkbox
                  id={`desktop-${paramName}-${item}`}
                  checked={activeItems.includes(item)}
                  className="border-gray-400 bg-white data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  onCheckedChange={() => onItemToggle(type, item)}
                />
                <label
                  htmlFor={`desktop-${paramName}-${item}`}
                  className="text-sm flex items-center justify-between w-full cursor-pointer pr-3"
                >
                  <span className="truncate">{item}</span>
                  <span className="text-xs text-muted-foreground">
                    {itemCounts[item] || 0}
                  </span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
    <div>
      {/* Mobile filter button - only visible on small screens */}
      <div className="md:hidden flex pb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full h-8 px-3 w-full"
            >
              <Filter className="mr-2 h-3.5 w-3.5" />
              Filters
              {totalActiveFilters > 0 && (
                <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                  {totalActiveFilters}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filter Rules</SheetTitle>
              <SheetDescription>
                Filter the rules by service, framework, and type
              </SheetDescription>
            </SheetHeader>

            <div className="px-4 h-[calc(100vh-200px)] overflow-y-auto space-y-0">
              {/* Services section */}
              <FilterSection
                title="Services"
                type="services"
                items={services}
                itemCounts={counts.services}
                isExpanded={true}
                activeItems={tempFilters.services}
                paramName="service"
                onItemToggle={toggleTempFilter}
              />

              {/* Frameworks section */}
              <FilterSection
                title="Frameworks"
                type="frameworks"
                items={frameworks}
                itemCounts={counts.frameworks}
                isExpanded={true}
                activeItems={tempFilters.frameworks}
                paramName="framework"
                onItemToggle={toggleTempFilter}
              />

              {/* Types section */}
              <FilterSection
                title="Types"
                type="types"
                items={types}
                itemCounts={counts.types}
                isExpanded={true}
                activeItems={tempFilters.types}
                paramName="type"
                onItemToggle={toggleTempFilter}
              />
            </div>

            <SheetFooter className="flex-row justify-between gap-2 sm:flex-row">
              <Button
                variant="ghost"
                onClick={resetFilters}
              >
                Reset filters
              </Button>
              <SheetClose asChild>
                <Button onClick={applyFilters}>
                  Apply filters
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {/* Mobile active filters display */}
      <div className="md:hidden pb-4">
        {totalActiveFilters > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilters.services.map((service) => (
              <Badge
                key={`active-service-${service}`}
                variant="secondary"
                className="flex items-center bg-gray-200 gap-1 pl-2 pr-1 py-1"
              >
                <span className="text-xs">{service}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-4 w-4 rounded-full p-0"
                  onClick={() => toggleQuickFilter('services', service)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}

            {activeFilters.frameworks.map((framework) => (
              <Badge
                key={`active-framework-${framework}`}
                variant="secondary"
                className="flex items-center bg-gray-200 gap-1 pl-2 pr-1 py-1"
              >
                <span className="text-xs">{framework}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-4 w-4 rounded-full p-0"
                  onClick={() => toggleQuickFilter('frameworks', framework)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}

            {activeFilters.types.map((type) => (
              <Badge
                key={`active-type-${type}`}
                variant="secondary"
                className="flex items-center bg-gray-200 gap-1 pl-2 pr-1 py-1"
              >
                <span className="text-xs">{type}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-4 w-4 rounded-full p-0"
                  onClick={() => toggleQuickFilter('types', type)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}

            {totalActiveFilters > 1 && (
              <div className="border border-border rounded-md">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 w-full"
                  onClick={resetFilters}
                >
                Clear all
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
      </div>
      <div className="w-full border border-border/50 rounded-lg bg-card/70 backdrop-blur-sm shadow-sm">

      {/* Desktop filter sections - visible on md screens and up */}
      <div className="hidden md:block p-4">
        <div className="space-y-0">
          {/* Services section */}
          <FilterSection
            title="Services"
            type="services"
            items={services}
            itemCounts={counts.services}
            isExpanded={expanded.services}
            activeItems={activeFilters.services}
            paramName="service"
            onItemToggle={toggleQuickFilter}
          />

          {/* Frameworks section */}
          <FilterSection
            title="Frameworks"
            type="frameworks"
            items={frameworks}
            itemCounts={counts.frameworks}
            isExpanded={expanded.frameworks}
            activeItems={activeFilters.frameworks}
            paramName="framework"
            onItemToggle={toggleQuickFilter}
          />

          {/* Types section */}
          <FilterSection
            title="Types"
            type="types"
            items={types}
            itemCounts={counts.types}
            isExpanded={expanded.types}
            activeItems={activeFilters.types}
            paramName="type"
            onItemToggle={toggleQuickFilter}
          />
        </div>

        {/* Reset filters button */}
        {totalActiveFilters > 0 && (
          <div className="border-t border-border pt-2">
          <Button
            variant="outline"
            size="sm"
            className="mt-2 text-xs h-7 w-full"
            onClick={resetFilters}
            >
              Reset all filters
            </Button>
          </div>
        )}
      </div>
    </div>
    </>

  );
}