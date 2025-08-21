import { useControlled, useEventCallback } from '@mui/material';
import { parseAsInteger, useQueryState } from 'nuqs';
import * as React from 'react';

export type UsePaginationOptions = {
  defaultPageIndex?: number;
  defaultPageSize?: number;
  enableNuqs?: boolean;
  onPageIndexChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageIndex?: number;
  pageSize?: number;
};

export function usePagination(options: UsePaginationOptions) {
  const [pageIndexQueryState, setPageIndexQueryState] = useQueryState(
    'page',
    parseAsInteger.withDefault(options.defaultPageIndex || 1),
  );
  const [pageSizeQueryState, setPageSizeQueryState] = useQueryState(
    'pageSize',
    parseAsInteger.withDefault(options.defaultPageSize || 25),
  );
  const [pageIndex, setPageIndex] = useControlled<number>({
    controlled: options.pageIndex,
    default: options.defaultPageIndex || 1,
    name: 'usePagination',
    state: 'page',
  });

  const [pageSize, setPageSize] = useControlled<number>({
    controlled: options.pageSize,
    default: options.defaultPageSize || 25,
    name: 'usePagination',
    state: 'pageSize',
  });

  const onPageIndexChange = useEventCallback((updaterOrValue) => {
    const newPage =
      typeof updaterOrValue === 'function' ? updaterOrValue(pageIndex) : updaterOrValue;

    setPageIndex(newPage);
    if (options.enableNuqs) {
      setPageIndexQueryState(newPage);
    }
    if (typeof options.onPageIndexChange === 'function') {
      options.onPageIndexChange(newPage);
    }
  });

  const onPageSizeChange = useEventCallback((updaterOrValue) => {
    const newPageSize =
      typeof updaterOrValue === 'function' ? updaterOrValue(pageSize) : updaterOrValue;

    setPageSize(newPageSize);
    if (options.enableNuqs) {
      setPageSizeQueryState(newPageSize);
    }
    if (typeof options.onPageSizeChange === 'function') {
      options.onPageSizeChange(newPageSize);
    }
  });

  const onChange = useEventCallback((updaterOrValue) => {
    const newPagination =
      typeof updaterOrValue === 'function'
        ? updaterOrValue({ page: pageIndex, pageSize })
        : updaterOrValue;

    setPageIndex(newPagination.page);
    setPageSize(newPagination.pageSize);
    if (options.enableNuqs) {
      setPageIndexQueryState(newPagination.page);
      setPageSizeQueryState(newPagination.pageSize);
    }

    if (typeof options.onPageIndexChange === 'function') {
      options.onPageIndexChange(newPagination.page);
    }
    if (typeof options.onPageSizeChange === 'function') {
      options.onPageSizeChange(newPagination.pageSize);
    }
  });

  const clear = useEventCallback(() => {
    setPageIndex(options.defaultPageIndex || 1);
    setPageSize(options.defaultPageSize || 25);
    if (options.enableNuqs) {
      setPageIndexQueryState(options.defaultPageIndex || 1);
      setPageSizeQueryState(options.defaultPageSize || 25);
    }
  });

  const value = React.useMemo(
    () => ({
      pageIndex: options.enableNuqs ? pageIndexQueryState : pageIndex,
      pageSize: options.enableNuqs ? pageSizeQueryState : pageSize,
    }),
    [options.enableNuqs, pageIndexQueryState, pageIndex, pageSizeQueryState, pageSize],
  );

  return {
    clear,
    onPageChange: onPageIndexChange,
    onPageSizeChange,
    onPaginationChange: onChange,
    pageIndex: value.pageIndex,
    pageSize: value.pageSize,
    value,
  };
}
