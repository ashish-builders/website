'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Image } from '@/components/image/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import GlobalStyles from '@mui/material/GlobalStyles';
import { HeroForm } from './hero-form';

const globalStyles = (
  <GlobalStyles
    styles={{
      html: {
        scrollBehavior: 'smooth',
      },
    }}
  />
);

export function HeroSection() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Box
      sx={
        {
          '--pn-color': 'rgb(238,134,51)',
          '--pna-color': 'rgb(48,49,42)',
          backgroundColor: 'var(--pna-color)',
          isolation: 'isolate',
          position: 'relative',
        } as React.CSSProperties
      }
      component="section"
    >
      {globalStyles}
      {downMD ? (
        <Image
          alt="Banner"
          fetchPriority="auto"
          loading="eager"
          sizes="100vw"
          src="/assets/projects/other/prakash-nilayam/landing-page-banner-background.webp"
          sx={{ objectFit: 'cover', objectPosition: 'left' }}
          fill
        />
      ) : (
        <Image
          alt="Banner"
          fetchPriority="auto"
          loading="eager"
          sizes="100vw"
          src="/assets/projects/other/prakash-nilayam/landing-page-banner.webp"
          sx={{ objectFit: 'cover', objectPosition: 'left' }}
          fill
        />
      )}

      <Box
        sx={{
          height: '100%',
          pb: 10,
          position: 'relative',
          pt: 10,
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ md: 3, xs: 12 }}>
              <Typography
                sx={{
                  color: 'common.white',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
                component="h1"
                variant="body1"
              >
                The key to your <br />
                <Box
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'var(--pn-color)',
                    fontSize: { md: '4rem', xs: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1,
                    p: 0,
                  }}
                  component="mark"
                >
                  dream home?
                </Box>
              </Typography>
              <Typography
                sx={{
                  color: 'common.white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}
              >
                Ashish Builders &amp; Developers
              </Typography>
            </Grid>
            <Grid size={{ lg: 5, md: 4, xs: 12 }} />
            <Grid size={{ lg: 4, md: 5, xs: 12 }}>
              <Box sx={{ pt: { md: 0, xs: 8 } }}>
                <Box
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 1,
                  }}
                >
                  <Box id="enquire-now" sx={{ p: 2, scrollMarginTop: 14 }}>
                    <Typography
                      sx={{
                        borderBottom: '1px dashed',
                        borderColor: 'grey.300',
                        fontWeight: 700,
                        mb: 2,
                        pb: 2,
                      }}
                    >
                      Premium 2, 3, & 4 BHK Duplex Homes & Villas in Kashipur
                    </Typography>
                    <iframe
                      height={400}
                      src="/prakash-nilayam-form.html"
                      style={{ width: '100%' }}
                      title="Enquire Now Form"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
