'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as React from 'react';
import { YoutubeLightboxPlayer } from '@/components/youtube-lightbox/youtube-lightbox-player';
import { Fade } from '@/components/motion/fade/fade';

const values = [
  'Quality craftsmanship in every project',
  'Timely delivery without compromise',
  'Customer satisfaction as our priority',
  'Innovation in design and construction',
  'Environmental responsibility',
  'Transparent business practices',
];

export function OurStorySection() {
  const id = React.useId();
  const headingId = `${id}-title`;
  return (
    <Box
      aria-label="Our Story"
      aria-labelledby={headingId}
      component="section"
      itemType="https://schema.org/Organization"
      role="region"
      sx={{ bgcolor: 'grey.50', py: 10 }}
      itemScope
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" spacing={6} container>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Fade>
              <Typography
                sx={{
                  '& mark': {
                    backgroundColor: 'transparent',
                    color: 'secondary.main',
                    padding: 0,
                  },
                  color: 'text.primary',
                  fontSize: '2.15rem',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  mb: 1,
                }}
                id={headingId}
                itemProp="name"
                tabIndex={0}
                variant="h1"
              >
                Two Decades of Excellence in Construction
              </Typography>
            </Fade>
            <Fade>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { lg: '1.125rem', xs: '1rem' },
                  mb: 2,
                }}
                itemProp="description"
                variant="body1"
              >
                ABD Group has been a trusted name in the real estate sector for over 20 years. Based
                in Kashipur, Uttarakhand, we have successfully completed numerous residential
                projects, covering more than 40 acres of land.
                <br />
                <br />
                Our focus is on quality and innovation, ensuring that every project meets the
                highest standards. We believe in creating not just buildings, but communities where
                families can thrive and create lasting memories.
              </Typography>
            </Fade>

            <Grid spacing={2} container>
              {values.map((value, index) => (
                <Grid key={index} size={{ sm: 6, xs: 12 }}>
                  <Fade>
                    <Stack alignItems="flex-start" direction="row" spacing={1}>
                      <CheckCircleIcon
                        sx={{
                          color: 'quaternary.main',
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                        aria-hidden="true"
                      />
                      <Typography color="text.secondary" itemProp="keywords" variant="body1">
                        {value}
                      </Typography>
                    </Stack>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            sx={{
              '& img': {
                objectPosition: '0% 50%',
              },
            }}
            size={{ lg: 6, xs: 12 }}
          >
            <Fade>
              <YoutubeLightboxPlayer
                aria-label="About Us Youtube Video"
                borderRadius={1}
                height={400}
                videoId="MI98LIp9cFg"
                width="100%"
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
