'use client';

import * as React from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export type ProvidersProps = { children: React.ReactNode };

export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
      {process.env.NODE_ENV === 'production' ? (
        <React.Fragment>
          <Analytics />
          <SpeedInsights />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
