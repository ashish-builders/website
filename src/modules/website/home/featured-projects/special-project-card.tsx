'use client';

import * as React from 'react';
import { LinkNoPrefetch } from '@/components/link/link';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import projects from '@/data/projects';
import Image from 'next/image';
import { getBlurURL } from '@/lib/image';

export interface SpecialProjectCardProps {
  height: number;
}

export function SpecialProjectCard(props: SpecialProjectCardProps) {
  const { height } = props;

  const titleId = React.useId();
  const descriptionId = React.useId();
  const imageCaptionId = React.useId();

  const project = projects.find((prjct) => prjct.slug === 'saural-villa-corbett');

  if (!project) {
    return null;
  }

  const featuredImage = project.featuredImage;
  const logo = project.logo;

  return (
    <Card
      sx={{
        backgroundColor: 'var(--mui-palette-quinary-main)',
        border: '3px solid var(--mui-palette-quinary-light)',
        borderRadius: 4,
        isolation: 'isolate',
        overflow: 'hidden',
        position: 'relative',
      }}
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      component="article"
      itemType="https://schema.org/RealEstateProject"
      role="article"
      itemScope
    >
      <Image
        alt=""
        loading="lazy"
        priority={false}
        quality={100}
        role="presentation"
        sizes="100vw"
        src="/assets/projects/other/saural-villa-corbett/card-background-1.webp"
        style={{ objectFit: 'cover', zIndex: -1 }}
        fill
      />
      <CardContent>
        <Grid
          sx={{
            color: 'common.white',
          }}
          spacing={3}
          container
        >
          <Grid size={{ sm: 6, xs: 12 }}>
            {featuredImage && featuredImage ? (
              <Box
                aria-labelledby={imageCaptionId}
                component="figure"
                position="relative"
                role="img"
                sx={{ m: 0 }}
              >
                <HoverScale
                  sx={{
                    borderRadius: 4,
                    isolation: 'isolate',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  style={{ height }}
                >
                  <Image
                    alt={`Featured view of ${project?.name} luxury villas`}
                    blurDataURL={getBlurURL(featuredImage) || undefined}
                    itemProp="image"
                    loading="lazy"
                    placeholder={featuredImage ? 'blur' : 'empty'}
                    priority={false}
                    quality={100}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    src={featuredImage}
                    style={{ objectFit: 'cover' }}
                    fill
                  />
                </HoverScale>
              </Box>
            ) : null}
          </Grid>
          <Grid alignSelf="center" size={{ sm: 6, xs: 12 }}>
            {logo ? (
              <React.Fragment>
                <Box
                  style={{
                    height: height ? Math.round(height / 1.5) : undefined,
                    isolation: 'isolate',
                    margin: 0,
                  }}
                  aria-label={`${project.name} project logo`}
                  component="figure"
                  position="relative"
                  role="img"
                >
                  <Image
                    alt={`${project.name} logo`}
                    itemProp="logo"
                    loading="lazy"
                    priority={false}
                    quality={100}
                    sizes="(max-width: 600px) 100vw, 33vw"
                    src={logo}
                    style={{ objectFit: 'contain' }}
                    fill
                  />
                </Box>
                <Divider
                  aria-hidden="true"
                  role="separator"
                  sx={{ borderColor: 'inherit', mb: 1, mt: 2 }}
                />
              </React.Fragment>
            ) : null}
            <Typography
              sx={{
                fontSize: '1rem',
                letterSpacing: '0.1rem',
                textAlign: 'center',
              }}
              aria-label="Property type"
              component="div"
              itemProp="description"
              variant="body1"
            >
              3 & 4 BHK Luxury Villas
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography
              sx={{
                '& mark': {
                  backgroundColor: 'transparent',
                  color: 'quaternary.light',
                  padding: 0,
                },
                fontWeight: 700,
                letterSpacing: '0.125rem',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
              aria-level={2}
              component="h2"
              id={titleId}
              itemProp="name"
              role="heading"
              variant="h6"
            >
              Where <mark>Comfort</mark> Meets the <mark>Wild Charm</mark> of Corbett
            </Typography>
          </Grid>
          <Grid size={{ sm: 'grow', xs: 12 }}>
            <Divider
              sx={{
                borderColor: 'var(--mui-palette-quaternary-light)',
                borderWidth: 1,
              }}
              aria-hidden="true"
              role="separator"
            />
            <Typography
              sx={{
                fontStyle: 'normal',
                letterSpacing: '0.125rem',
                mt: 1,
                textTransform: 'uppercase',
              }}
              aria-label="Project address"
              component="address"
              id={descriptionId}
              itemProp="address"
              itemType="https://schema.org/PostalAddress"
              variant="body1"
              itemScope
            >
              <span itemProp="streetAddress">{project.address}</span>
            </Typography>
          </Grid>
          <Grid size={{ sm: 'auto', xs: 12 }}>
            <Button
              aria-describedby={`${titleId} ${descriptionId}`}
              aria-label={`Learn more about ${project.name} project`}
              color="inherit"
              href={`/projects/${project.slug}`}
              itemProp="url"
              LinkComponent={LinkNoPrefetch}
              role="link"
              size="large"
              variant="outlined"
              fullWidth
            >
              Know More
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
