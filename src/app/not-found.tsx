import * as React from 'react';
import { type Metadata } from 'next';
import { Figtree, Gilda_Display, Playfair } from 'next/font/google';
import cssVariables from '@/lib/css-variables';
import { LuGhost, LuArrowLeft } from 'react-icons/lu';
import oklchToHex from '@/lib/color-manipulation/oklch-to-hext';
import './(frontend)/style.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@/components/link/link';
import Stack from '@mui/material/Stack';
import Providers from './(frontend)/providers';

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
  description:
    'The page you are looking for does not exist. Please check the URL or return to the homepage.',
  title: '404 - Ashish Builders & Developers',
};

export default async function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
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
        <Providers>
          {/* MUI version of Not Found page */}
          <Box
            sx={{
              bgcolor: 'background.default',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                minHeight: '80vh',
              }}
              component="main"
            >
              <Paper elevation={0} sx={{ maxWidth: 400, mx: 'auto', p: 3, textAlign: 'center' }}>
                <Box
                  sx={{
                    alignItems: 'center',
                    bgcolor: 'grey.100',
                    borderRadius: '50%',
                    display: 'flex',
                    height: 64,
                    justifyContent: 'center',
                    mb: 3,
                    mx: 'auto',
                    width: 64,
                  }}
                >
                  <LuGhost
                    style={{ color: 'var(--mui-palette-tertiary-main)', height: 32, width: 32 }}
                  />
                </Box>
                <Typography color="tertiary.main" fontWeight="bold" variant="h3" gutterBottom>
                  404
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Oops! Page Not Found
                </Typography>
                <Stack spacing={2}>
                  <Button
                    color="tertiary"
                    component={Link}
                    href="/"
                    startIcon={<LuArrowLeft style={{ height: 20, width: 20 }} />}
                    sx={{ '&:hover': { bgcolor: 'tertiary.main' }, bgcolor: 'tertiary.main' }}
                    variant="contained"
                    fullWidth
                  >
                    Return to Homepage
                  </Button>
                  <Typography color="text.secondary" variant="body2">
                    The page you are looking for does not exist. Please check the URL or{' '}
                    <Link color="tertiary" fontWeight="medium" href="/contact-us" underline="hover">
                      contact us
                    </Link>{' '}
                    if you need assistance.
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
