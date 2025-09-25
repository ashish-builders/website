'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Fade } from '@/components/motion/fade/fade';
import { Image } from '@/components/image/image';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';

type Amenity = {
  alt?: null | string;
  blurDataUrl?: null | string;
  caption?: null | string;
  height?: number;
  title?: null | string;
  url: string;
  width?: number;
};

export type AmenitiesProps = {
  amenities: Amenity[];
};

export function AmenitiesSection(props: AmenitiesProps) {
  const { amenities } = props;

  if (amenities.length === 0) {
    return null;
  }

  return (
    <Box id="amenities" sx={{ pb: 8, pt: 2, scrollMarginTop: '100px' }}>
      <Container maxWidth="md">
        <Fade>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent={{ sm: 'flex-end', xs: 'center' }}
            spacing={2}
            useFlexGap
          >
            <Divider
              sx={{
                borderColor: 'var(--mui-palette-senary-main)',
                display: { sm: 'block', xs: 'none' },
                width: 240,
              }}
            />
            <Typography
              sx={{
                color: 'var(--mui-palette-senary-main)',
                fontFamily: 'var(--font-saural)',
                fontSize: { md: '3rem', sm: '2.5rem', xs: '2.15rem' },
                fontWeight: 400,
                letterSpacing: 1,
                lineHeight: 1.2,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
              variant="h2"
            >
              Amenities
            </Typography>
          </Stack>
        </Fade>
        <Stack direction="column" spacing={6} sx={{ mt: 4 }} useFlexGap>
          {amenities.map((amenity, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid alignItems="center" key={index} container>
                <Grid order={{ sm: isEven ? 1 : 2, xs: 1 }} size={{ sm: 6, xs: 12 }}>
                  <Fade>
                    <HoverScale>
                      <Image
                        style={{
                          borderRadius: 0,
                          display: 'block',
                          height: '100%',
                          objectFit: 'cover',
                          width: '100%',
                        }}
                        alt={amenity.alt || ''}
                        blurDataURL={amenity.blurDataUrl || undefined}
                        height={amenity.height || 400}
                        placeholder={amenity.blurDataUrl ? 'blur' : 'empty'}
                        src={amenity.url}
                        width={amenity.width || 400}
                      />
                    </HoverScale>
                  </Fade>
                </Grid>
                <Grid order={{ sm: isEven ? 2 : 1, xs: 2 }} size={{ sm: 6, xs: 12 }}>
                  <Fade delay={100}>
                    <Paper
                      sx={{
                        borderRadius: 0,
                        [isEven ? 'left' : 'right']: {
                          sm: 'calc(var(--mui-spacing) * -6)',
                        },
                        [isEven ? 'pl' : 'pr']: { sm: 12, xs: 2 },
                        pl: { sm: 8, xs: 2 },
                        position: 'relative',
                        py: 4,
                        zIndex: 1,
                      }}
                      elevation={0}
                    >
                      <Typography
                        sx={{
                          color: 'var(--mui-palette-senary-main)',
                          fontFamily: 'var(--font-saural)',
                          fontSize: '1.5rem',
                          fontWeight: 400,
                          mb: 2,
                        }}
                        component="h3"
                        variant="h6"
                      >
                        {amenity.title}
                      </Typography>
                      <Typography color="textPrimary" variant="body1">
                        {amenity.caption}
                      </Typography>
                    </Paper>
                  </Fade>
                </Grid>
              </Grid>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
