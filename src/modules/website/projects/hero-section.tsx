'use client';

import * as React from 'react';
import { safeImageUri } from '@/lib/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getImageProps, ImageProps } from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

function getBannerUri() {
  const desktopSafeUri = safeImageUri('/assets/projects/list/banner-desktop.webp');
  const mobileSafeUri = safeImageUri('/assets/projects/list/banner-mobile.webp');
  if (!desktopSafeUri || !mobileSafeUri) {
    return null;
  }
  const imageProps: Omit<ImageProps, 'src'> = {
    alt: 'Home is where your moments matter',
    'aria-hidden': true,
    fill: true,
    priority: true,
    quality: 100,
    style: {
      objectFit: 'cover',
    },
  };
  const desktop = getImageProps({
    src: desktopSafeUri,
    ...imageProps,
  });
  const mobile = getImageProps({
    src: mobileSafeUri,
    ...imageProps,
  });
  return {
    desktop,
    mobile,
  };
}

export function HeroSection() {
  const theme = useTheme();
  const bannerUri = getBannerUri();
  return (
    <Box
      sx={{
        height: 600,
        isolation: 'isolate',
        position: 'relative',
      }}
    >
      {bannerUri ? (
        <Box
          sx={{
            bottom: 0,
            left: 0,
            overflow: 'hidden',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: -1,
          }}
        >
          <picture>
            <source
              media={`(min-width: ${theme.breakpoints.values.sm}px)`}
              srcSet={bannerUri.desktop.props.srcSet}
            />
            <source
              media={`(min-width: ${theme.breakpoints.values.xs}px)`}
              srcSet={bannerUri.mobile.props.srcSet}
            />
            <Box component="img" {...bannerUri.mobile.props} />
          </picture>
        </Box>
      ) : null}
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Grid
          sx={{
            alignItems: { sm: 'center', xs: 'flex-start' },
            height: '100%',
          }}
          container
        >
          <Grid size={{ sm: 6, xs: 12 }}>
            <Box sx={{ py: 3 }}>
              <Typography
                sx={{
                  fontSize: { md: '3.5rem', sm: '3rem', xs: '2.5rem' },
                }}
                fontWeight={600}
                variant="h1"
              >
                Home is where your moments matter
              </Typography>
              <Typography sx={{ fontSize: { sm: '1rem', xs: '0.875rem' }, mt: 1 }} variant="body1">
                ABD is committed to enhancing your lifestyle by delivering cutting edge projects on
                time, without compromising on quality.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
