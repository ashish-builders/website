'use client';

import * as React from 'react';
import { ProgressProvider } from '@bprogress/next/app';
import { useTheme } from '@mui/material/styles';

export default function BProgressProvidere({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <ProgressProvider
      color={theme.palette.tertiary.main}
      height={theme.spacing(0.25)}
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
