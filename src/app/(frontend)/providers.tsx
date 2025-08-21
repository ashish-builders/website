'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { QueryClientProvider } from '@/components/piplup-jsrepo/tanstack-query';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import CssBaseline from '@mui/material/CssBaseline';
import { ConfirmProvider } from '@/components/confirm-provider/confirm-provider';
import BProgressProvidere from '@/components/bprogress/bprogress-provider';
import theme from '@/theme';
import { Toaster } from '@/components/toaster/toaster';

export type ProvidersProps = { children: React.ReactNode };

export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <NextThemeProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BProgressProvidere>
            <ConfirmProvider>
              <NuqsAdapter>
                <QueryClientProvider>
                  {children}
                  <Toaster />
                </QueryClientProvider>
              </NuqsAdapter>
            </ConfirmProvider>
          </BProgressProvidere>
        </ThemeProvider>
      </NextThemeProvider>
    </AppRouterCacheProvider>
  );
}
