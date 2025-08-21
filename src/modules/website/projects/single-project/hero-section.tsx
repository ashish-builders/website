'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { EnquireNowButton } from '@/modules/website/enquire-now-button';
import { Image } from '@/components/image/image';
import { useTheme } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';
import { LinkNoPrefetch } from '@/components/link/link';
import { VideoPlayButton } from './video-play-button';

type HeroSectionProps = {
  address: string;
  brochure?: null | string;
  featuredImage?: null | string;
  featuredImageBlurDataUrl?: null | string;
  name: string;
  reraNumber?: null | string;
};

export function HeroSection(props: HeroSectionProps) {
  const { address, brochure, featuredImage, featuredImageBlurDataUrl, name, reraNumber } = props;

  const theme = useTheme();
  const height = 600;

  return (
    <Box sx={{ isolation: 'isolate', position: 'relative' }}>
      {featuredImage ? (
        <Box
          sx={{
            borderRadius: theme.shape.borderRadius,
            bottom: 0,
            left: 16,
            maskImage: {
              sm: 'url("/assets/projects/project-banner-mask.webp")',
              xs: 'none',
            },
            maskRepeat: 'no-repeat',
            maskSize: 'cover',
            overflow: 'hidden',
            position: 'absolute',
            right: 16,
            top: 0,
            zIndex: -1,
          }}
        >
          <Image
            alt={name}
            blurDataURL={featuredImageBlurDataUrl || undefined}
            loading="eager"
            placeholder={featuredImageBlurDataUrl ? 'blur' : 'empty'}
            quality={100}
            src={featuredImage}
            style={{ objectFit: 'cover' }}
            fill
            priority
          />
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            }}
            aria-hidden="true"
          />
        </Box>
      ) : null}
      <Container maxWidth="lg">
        <Grid spacing={2} sx={{ height: '100%', minHeight: height }} container>
          <Grid alignSelf="center" size={{ md: 4, xs: 12 }}>
            <Box sx={{ px: 2, py: 3 }}>
              {reraNumber ? (
                <Typography
                  sx={{ color: theme.palette.common.white, display: 'block' }}
                  variant="caption"
                >
                  RERA No: {reraNumber}
                </Typography>
              ) : null}
              <Typography
                sx={{
                  color: theme.palette.common.white,
                  fontSize: { md: '3.5rem', sm: '3rem', xs: '2.5rem' },
                }}
                fontWeight={600}
                variant="h1"
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.common.white,
                  fontSize: { sm: '1rem', xs: '0.875rem' },
                  mt: 1,
                }}
                variant="body1"
              >
                {address}
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                spacing={1.5}
                sx={{ mt: 3 }}
              >
                <EnquireNowButton color="tertiary" variant="contained" />
                {brochure ? (
                  <Button
                    color="tertiary"
                    href={brochure}
                    LinkComponent={LinkNoPrefetch}
                    sx={{ backgroundColor: theme.palette.common.white }}
                    target="_blank"
                    variant="outlined"
                  >
                    View Brochure
                  </Button>
                ) : null}
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ md: 8, xs: 12 }}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
              }}
            >
              <VideoPlayButton />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
