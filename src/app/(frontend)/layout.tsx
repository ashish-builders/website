import * as React from 'react';
import { type Metadata } from 'next';
import { Figtree, Gilda_Display, Playfair } from 'next/font/google';
import cssVariables from '@/lib/css-variables';
import oklchToHex from '@/lib/color-manipulation/oklch-to-hext';
import Providers from './providers';
import './style.css';

const primary = Figtree({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['300', '400', '500', '700'],
});

const saural = Gilda_Display({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-saural',
  weight: '400',
});

const secondary = Playfair({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: '400',
});

export const metadata: Metadata = {
  description: 'Construction and building services',
  title: 'Ashish Builders',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link
          color={oklchToHex(cssVariables.colors.primary)}
          href="/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content={oklchToHex(cssVariables.colors.primary)} name="theme-color" />
      </head>
      <body className={[primary.variable, saural.variable, secondary.variable].join(' ')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
