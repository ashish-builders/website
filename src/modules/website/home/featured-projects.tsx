'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Section } from '@/modules/website/layout/section';
import { Fade } from '@/components/motion/fade/fade';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import data from '@/data/projects';
import { getBlurURL } from '@/lib/image';
import locations from '@/data/locations';
import { ProjectCard } from './featured-projects/project-card';
import { SpecialProjectCard } from './featured-projects/special-project-card';

export function FeaturedProjects() {
  const sectionId = React.useId();
  const projects = data.slice(0, 6);

  // ─── Services ────────────────────────────────────────────────────────
  if (projects.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: 'color-mix(in srgb, var(--mui-palette-quaternary-light) 15%, white 85%)',
        pb: 3,
        pt: 8,
      }}
      aria-labelledby={`${sectionId}-heading`}
      component="section"
      role="region"
    >
      <Section
        header={
          <Fade>
            <span>
              Featured <mark>Projects</mark>
            </span>
          </Fade>
        }
        microdata={{
          contentItemProp: 'makesOffer',
          headerItemProp: 'name',
          itemScope: true,
          itemType: 'https://schema.org/Organization',
          subheaderItemProp: 'description',
        }}
        subheader={
          <Fade delay={100}>
            We are a real estate firm with over 20 years of expertise, and our main goal is to
            provide amazing locations to our partners and clients.
          </Fade>
        }
        ariaLabel="Featured Projects"
        contentAriaLabel="Featured real estate projects including residential societies, luxury villas, and premium developments"
        headerId={`${sectionId}-heading`}
        headerMaxWidth={870}
        headingLevel={2}
      >
        <Container maxWidth="lg" sx={{ pt: 3 }}>
          <Grid
            aria-label="Featured real estate projects"
            role="list"
            spacing={4}
            sx={{ mb: 8 }}
            container
          >
            {projects.map((project, index) => {
              const featuredImage = project.featuredImage;
              const location = locations.find((loc) => loc.Pincode === project.pincode);
              return (
                <Grid key={index} role="listitem" size={{ md: index > 1 ? 4 : 6, xs: 12 }}>
                  <Fade>
                    <ProjectCard
                      blurDataUrl={getBlurURL(featuredImage)}
                      city={location?.City || ''}
                      description={project.description}
                      id={project.slug}
                      image={featuredImage}
                      imageHeight={260}
                      name={project.name}
                    />
                  </Fade>
                </Grid>
              );
            })}
            <Grid role="listitem" size={{ md: 8, xs: 12 }}>
              <Fade>
                <ErrorBoundary fallback={null}>
                  <SpecialProjectCard height={250} />
                </ErrorBoundary>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
