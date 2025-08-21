import * as React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { QueryClient } from '@tanstack/react-query';
import { getQueryClientServer } from './get-query-client';

export interface HydrateClientProps {
  children: React.ReactNode;
  queryClient: QueryClient;
}

/**
 * HydrateClient is a React component that wraps its children with a HydrationBoundary,
 * using the dehydrated state from the provided QueryClient. This enables React Query
 * to rehydrate server-fetched data on the client, supporting seamless SSR/SSG hydration.
 */
export default function HydrateClient(props: HydrateClientProps) {
  const { children, queryClient = getQueryClientServer() } = props;
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
