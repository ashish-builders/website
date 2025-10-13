'use client';

import { Fade } from '@/components/motion/fade/fade';
import { YoutubeLightboxPlayer } from '@/components/youtube-lightbox/youtube-lightbox-player';
import { Section } from '@/modules/website/layout/section';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export function AboutUsSection() {
  const sectionId = React.useId();

  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const divider = (
    <Divider
      sx={{
        borderColor: 'quaternary.main',
        borderWidth: 4,
        display: { md: 'block', xs: 'none' },
      }}
      aria-hidden="true"
      orientation="vertical"
      flexItem
    />
  );

  return (
    <Box sx={{ pb: 8 }}>
      <Section
        header={
          <Fade>
            <span>
              About <mark>Us</mark>
            </span>
          </Fade>
        }
        microdata={{
          contentItemProp: 'hasOfferCatalog',
          headerItemProp: 'name',
          itemScope: true,
          itemType: 'https://schema.org/Service',
          subheaderItemProp: 'description',
        }}
        subheader={
          <Fade delay={100}>
            Building trust and transforming dreams into reality with quality homes that inspire
            modern living.
          </Fade>
        }
        ariaLabel="Our Real Estate Services"
        contentAriaLabel="Discover our range of real estate services including apartments, villas, and commercial spaces"
        headerId={`${sectionId}-heading`}
        headingLevel={2}
      >
        <Container sx={{ pt: 3 }}>
          <Fade>
            <Stack
              sx={{
                '& img': {
                  objectPosition: '0% 50%',
                },
                maxWidth: 1080,
                mx: 'auto',
                px: 2,
              }}
              alignItems="stretch"
              direction="row"
              justifyContent="center"
              spacing={3}
              useFlexGap
            >
              {divider}
              <YoutubeLightboxPlayer
                aria-label="About Us Youtube Video"
                borderRadius={1}
                height={downMD ? 300 : 520}
                videoId="MI98LIp9cFg"
                width="100%"
              />
              {divider}
            </Stack>
          </Fade>
        </Container>
      </Section>
    </Box>
  );
}
