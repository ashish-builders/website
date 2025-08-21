import { useControlled, useEventCallback } from '@mui/material';
import { parseAsString, useQueryState } from 'nuqs';
import * as React from 'react';

export type UseSearchOptions = {
  debounceMs?: number;
  defaultSearch?: string;
  enableNuqs?: boolean;
  onSearchChange?: (search: string) => void;
  search?: string;
  shallow?: boolean;
};

export function useSearch(options: UseSearchOptions) {
  // ─── State ───────────────────────────────────────────────────────────
  const [searchQueryState, setPageQueryState] = useQueryState(
    'q',
    parseAsString.withDefault(options.defaultSearch || '').withOptions({
      shallow: options.shallow,
      throttleMs: options.debounceMs ?? 0,
    }),
  );
  const [search, setSearch] = useControlled<string>({
    controlled: options.search,
    default: options.defaultSearch || '',
    name: 'useSearch',
    state: 'search',
  });
  // ─── Callbacks ───────────────────────────────────────────────────────
  const onChange = useEventCallback((updaterOrValue) => {
    const newValue = typeof updaterOrValue === 'function' ? updaterOrValue(search) : updaterOrValue;
    setSearch(newValue);
    if (options.enableNuqs) {
      setPageQueryState(newValue);
    }
    if (typeof options.onSearchChange === 'function') {
      options.onSearchChange(newValue);
    }
  });

  const clear = useEventCallback(() => {
    setSearch('');
    if (options.enableNuqs) {
      setPageQueryState('');
    }
  });

  React.useEffect(() => {
    if (options.enableNuqs) {
      setSearch(searchQueryState);
    }
  }, [options.enableNuqs, searchQueryState, setSearch]);

  return {
    clear,
    onChange,
    value: search,
  };
}
