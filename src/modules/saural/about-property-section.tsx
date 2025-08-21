import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { safeImageUri } from '@/lib/image';
import { getImageProps } from 'next/image';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { YoutubeLightboxPlayer } from '@/components/youtube-lightbox/youtube-lightbox-player';
import { Image } from '@/components/image/image';
import { Fade } from '@/components/motion/fade/fade';

export default function AboutPropertySection() {
  const bgImageUri = safeImageUri(
    '/assets/projects/other/saural-villa-corbett/about-property-dark.webp',
  );
  if (!bgImageUri) {
    console.warn(
      `[Saural]: About property background image URI is not valid. Skipping Component Render.`,
    );
    return null;
  }
  const bgImage = getImageProps({
    alt: 'Saural Villa Corbett Property',
    'aria-hidden': true,
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAXEAEAAwAAAAAAAAAAAAAAAAAAASEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIh/9oADAMBAAIRAxEAPwCzegI2nS//2Q==',
    fetchPriority: 'low',
    height: 659,
    loading: 'lazy',
    placeholder: 'blur',
    quality: 90,
    src: bgImageUri,
    style: { display: 'block', objectFit: 'cover' },
    width: 1512,
  });

  return (
    <Box>
      <Fade>
        <HoverScale scaleValue={1.02}>
          <Box
            {...bgImage.props}
            sx={{
              height: '80vh',
              minHeight: 500,
              width: '100%',
            }}
            component="img"
          />
        </HoverScale>
      </Fade>
      <Container id="about-saural" maxWidth="lg">
        <Box position="relative" sx={{ isolation: 'isolate' }}>
          <Grid spacing={4} sx={{ mb: 4 }} container>
            <Grid size={{ md: 6, xs: 12 }}>
              <Box sx={{ pt: 6 }}>
                <Fade>
                  <Typography
                    sx={{
                      color: 'var(--mui-palette-senary-main)',
                      fontFamily: 'var(--font-saural)',
                      fontSize: { md: '3rem', sm: '2.5rem', xs: '2.15rem' },
                      fontWeight: 400,
                      letterSpacing: 1,
                      lineHeight: 1.2,
                      mb: 4,
                      textAlign: 'center',
                      textTransform: 'uppercase',
                    }}
                    variant="h2"
                  >
                    About
                    <br aria-hidden="true" />
                    This Property
                  </Typography>
                </Fade>
              </Box>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <Fade>
                <Paper
                  sx={{
                    backgroundColor:
                      'color-mix(in srgb, var(--mui-palette-quaternary-light) 15%, white 85%)',
                    borderRadius: 0,
                    height: '100%',
                    p: 4,
                    position: 'relative',
                    top: { md: -100 },
                  }}
                  elevation={0}
                >
                  <Typography
                    sx={{
                      color: 'text.primary',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 18,
                      lineHeight: 1.6,
                      textAlign: 'center',
                    }}
                    variant="body1"
                  >
                    Welcome to The Saural Villa Corbett by ABD, where the serenity of the wilderness
                    meets the elegance of curated living. Nestled on the edge of Jim Corbett&apos;s
                    lush greenery, these thoughtfully designed 3 and 4 BHK villas offer a harmonious
                    blend of rustic charm and modern sophistication.
                    <br />
                    <br />
                    Crafted with wooden flooring, vintage-inspired bar counters, and sun-drenched
                    balconies, each villa is a tribute to timeless aesthetics and peaceful luxury.
                    Whether you&apos;re sipping your morning coffee with birdsong in the background
                    or unwinding in the warm, heritage-inspired interiors, The Saural is where
                    comfort meets nature — effortlessly.
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Fade>
                <Typography
                  sx={{
                    color: 'var(--mui-palette-senary-main)',
                    fontFamily: 'var(--font-saural)',
                    fontSize: { md: '3rem', sm: '2.5rem', xs: '2.15rem' },
                    fontWeight: 400,
                    letterSpacing: 1,
                    lineHeight: 1.2,
                    mb: 4,
                    textAlign: { md: 'right', xs: 'center' },
                    textTransform: 'uppercase',
                  }}
                  variant="h2"
                >
                  Experience
                  <br aria-hidden="true" />
                  The wild beauty of saural
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Image
            style={{
              objectFit: 'cover',
            }}
            sx={{
              bottom: -100,
              display: { md: 'block', xs: 'none' },
              height: 'auto',
              left: 0,
              maxWidth: 495,
              position: 'absolute',
              width: '100%',
              zIndex: -1,
            }}
            alt="Saural Villa Corbett Background Element"
            aria-hidden="true"
            height={584}
            src="/assets/projects/other/saural-villa-corbett/saural-bg-element-two.webp"
            width={495}
          />
        </Box>
        <Box sx={{ mb: 6 }}>
          <Fade>
            <YoutubeLightboxPlayer
              aria-label="Watch the Saural Villa Corbett video"
              borderRadius={1}
              height={{ md: 520, xs: 300 }}
              iconSize={80}
              iconStyle="outlined"
              videoId="StcfKx58LPA"
              disableLightboxOnMobile
            />
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}
