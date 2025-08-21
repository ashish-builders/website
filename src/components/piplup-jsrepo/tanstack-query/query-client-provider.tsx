'use client';

import * as React from 'react';
import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from './get-query-client';

export interface QueryClientProviderProps {
  children: React.ReactNode;
}


/**
 * QueryClientProvider provides the @tanstack/react-query client context
 * to its children, enabling data fetching and caching throughout the component tree.
 * It also includes React Query Devtools for debugging query state in development.
 */
export default function QueryClientProvider(props: QueryClientProviderProps) {
  const { children } = props;
  const queryClient = getQueryClient();

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TanstackQueryClientProvider>
  );
}
