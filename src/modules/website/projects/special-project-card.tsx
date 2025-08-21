'use client';

import * as React from 'react';
import { LinkNoPrefetch } from '@/components/link/link';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Image } from '@/components/image/image';
import { ErrorBoundary } from 'react-error-boundary';
import projects from '@/data/projects';
import { getBlurURL } from '@/lib/image';
import { SpecialProjectCardLoading } from './special-project-card-loading';

export type SpecialProjectCardProps = {
  height: number;
};

function SpecialProjectCardComponent(props: SpecialProjectCardProps) {
  const { height } = props;

  const titleId = React.useId();
  const descriptionId = React.useId();
  const imageCaptionId = React.useId();

  // ─── Calculation ─────────────────────────────────────────────────────
  const project = projects.find((p) => p.slug === 'saural-villa-corbett');

  if (!project) {
    return null;
  }

  const featuredImage = project.featuredImage;
  const logo = project.logo;

  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          backgroundColor: 'var(--mui-palette-quinary-main)',
          border: '3px solid var(--mui-palette-quinary-light)',
          borderRadius: 'var(--mui-shape-borderRadius)',
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
            aria-label="Saural project details"
            role="list"
            spacing={3}
            sx={{ color: 'common.white' }}
            container
          >
            <Grid aria-label="Project image" role="listitem" size={{ md: 4, xs: 12 }}>
              {featuredImage ? (
                <Box
                  aria-labelledby={imageCaptionId}
                  component="figure"
                  itemProp="image"
                  position="relative"
                  role="img"
                  sx={{ m: 0 }}
                >
                  <HoverScale
                    sx={{
                      borderRadius: 'var(--mui-shape-borderRadius)',
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
            <Grid
              alignSelf="center"
              aria-label="Project logo and type"
              role="listitem"
              size={{ md: 3, xs: 12 }}
            >
              {logo ? (
                <Box
                  style={{
                    height: height ? Math.round(height / 1.5) : undefined,
                    isolation: 'isolate',
                    margin: 0,
                  }}
                  aria-label={`${project.name} project logo`}
                  component="figure"
                  itemProp="logo"
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
            <Grid
              alignSelf="center"
              aria-label="Project name, address and link"
              role="listitem"
              size={{ md: 5, xs: 12 }}
            >
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
                variant="h5"
              >
                Where <mark>Comfort</mark> Meets the <mark>Wild Charm</mark> of Corbett
              </Typography>
              <Typography
                sx={{
                  fontStyle: 'normal',
                  letterSpacing: '0.125rem',
                  mt: 1,
                  textAlign: 'center',
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
              <Button
                sx={{
                  backgroundColor: 'var(--mui-palette-common-white)',
                  display: 'block',
                  mt: 3,
                  mx: 'auto',
                  width: 'fit-content',
                }}
                aria-describedby={`${titleId} ${descriptionId}`}
                aria-label={`Learn more about ${project.name} project`}
                color="tertiary"
                href={`/projects/${project.slug}`}
                itemProp="url"
                LinkComponent={LinkNoPrefetch}
                role="link"
                size="large"
                variant="outlined"
              >
                Know More
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export function SpecialProjectCard(props: SpecialProjectCardProps) {
  return (
    <ErrorBoundary fallback={null}>
      <React.Suspense fallback={<SpecialProjectCardLoading height={props.height} />}>
        <SpecialProjectCardComponent {...props} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
