'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import { Image } from '@/components/image/image';

type GallerySectionProps = {
  images: {
    alt?: string;
    blurDataUrl?: string;
    height?: number;
    url: string;
    width?: number;
  }[];
};

export function GallerySection(props: GallerySectionProps) {
  const { images } = props;

  if (images.length === 0) {
    return null;
  }

  const firstImage = images[0];
  const lastImage = images[images.length - 1];
  const remainingImages = images.slice(1, -1);

  return (
    <Box
      sx={{
        backgroundColor: 'color-mix(in srgb, var(--mui-palette-quaternary-light) 15%, white 85%)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: 'var(--mui-palette-senary-main)',
            fontFamily: 'var(--font-saural)',
            fontSize: { md: '3rem', sm: '2.5rem', xs: '2.15rem' },
            fontWeight: 400,
            lineHeight: 1.2,
            mb: 4,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
          variant="h2"
        >
          Gallery
        </Typography>
        <Box>
          <Grid spacing={2} sx={{ mb: 2 }} container>
            <Grid size={{ sm: 7, xs: 12 }}>
              <Image
                sx={{
                  display: 'block',
                  height: 'auto',
                  objectFit: 'contain',
                  width: '100%',
                }}
                alt={firstImage.alt || 'Gallery Image'}
                blurDataURL={firstImage.blurDataUrl || undefined}
                height={firstImage.height || 400}
                loading="lazy"
                placeholder={firstImage.blurDataUrl ? 'blur' : 'empty'}
                priority={false}
                sizes="50vw"
                src={firstImage.url}
                width={firstImage.width || 800}
              />
            </Grid>
            <Grid
              sx={{
                display: { sm: 'block', xs: 'none' },
              }}
              alignSelf="flex-end"
              size={{ sm: 5, xs: 6 }}
            >
              <Box>
                <Typography
                  sx={{
                    color: 'var(--mui-palette-quaternary-main)',
                    fontFamily: 'var(--font-saural)',
                    fontSize: '4vw',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    maxWidth: 300,
                    textTransform: 'uppercase',
                  }}
                  variant="body1"
                >
                  Experience Every Corner
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mr: -1 }}>
            <Masonry columns={{ sm: 2, xs: 1 }}>
              {remainingImages.map((image, idx) => {
                return (
                  <Image
                    sx={{
                      display: 'block',
                      height: 'auto',
                      objectFit: 'contain',
                      width: '100%',
                    }}
                    alt={image.alt || 'Gallery Image'}
                    blurDataURL={image.blurDataUrl || undefined}
                    height={image.height || 400}
                    key={idx}
                    loading="lazy"
                    placeholder={image.blurDataUrl ? 'blur' : 'empty'}
                    priority={false}
                    sizes="50vw"
                    src={image.url}
                    width={image.width || 800}
                  />
                );
              })}
              <Image
                sx={{
                  display: 'block',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                alt={lastImage.alt || 'Gallery Image'}
                blurDataURL={lastImage.blurDataUrl || undefined}
                height={lastImage.height || 400}
                loading="lazy"
                placeholder={lastImage.blurDataUrl ? 'blur' : 'empty'}
                priority={false}
                sizes="50vw"
                src={lastImage.url}
                width={lastImage.width || 800}
              />
              <Box>
                <Typography
                  sx={{
                    color: 'var(--mui-palette-quaternary-main)',
                    fontFamily: 'var(--font-saural)',
                    fontSize: { sm: '4vw', xs: '5vw' },
                    fontWeight: 400,
                    lineHeight: 1.2,
                    maxWidth: 400,
                    mx: { sm: 0, xs: 'auto' },
                    pt: 3,
                    textAlign: { sm: 'left', xs: 'center' },
                    textTransform: 'uppercase',
                  }}
                  variant="body1"
                >
                  Imagine Your New Beginning
                </Typography>
              </Box>
            </Masonry>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
