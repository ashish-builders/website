'use client';

import * as React from 'react';
import { Fade } from '@/components/motion/fade/fade';
import { usePagination } from '@/hooks/utils/use-pagination';
import { Section } from '@/modules/website/layout/section';
import { Box, Grid, Typography, Pagination } from '@mui/material';
import Container from '@mui/material/Container';
import data from '@/data/projects';
import locations from '@/data/locations';
import { getBlurURL } from '@/lib/image';
import { ProjectCard } from './project-card';

export function ProjectsList() {
  const sectionId = React.useId();

  // ─── State ───────────────────────────────────────────────────────────────────
  const pagination = usePagination({
    enableNuqs: true,
  });

  // ─── Calculation ─────────────────────────────────────────────────────────────
  const projects = data.slice(
    (pagination.pageIndex - 1) * pagination.pageSize,
    pagination.pageIndex * pagination.pageSize,
  );
  const totalPages = projects.length > 0 ? Math.ceil(data.length / pagination.pageSize) : 1;

  return (
    <Box sx={{ py: 8 }}>
      <Section
        header={
          <Fade>
            <span>
              Showcasing <mark>Excellence</mark>
            </span>
          </Fade>
        }
        microdata={{
          contentItemProp: 'hasPart',
          itemScope: true,
          itemType: 'https://schema.org/Collection',
        }}
        subheader={
          <Fade delay={100}>
            Explore our projects—where innovation meets craftsmanship, delivering exceptional living
            spaces designed for tomorrow
          </Fade>
        }
        ariaLabel="Projects Section"
        contentAriaLabel="List of projects"
        headerId={`${sectionId}-heading`}
        headingLevel={2}
      >
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          {projects.length > 0 ? (
            <React.Fragment>
              <Grid spacing={4} container>
                {projects.map((project) => {
                  const featuredImage = project.featuredImage;
                  const location = locations.find((loc) => loc.Pincode === project.pincode);
                  return (
                    <Grid key={project.slug} size={{ md: 4, sm: 6, xs: 12 }}>
                      <Fade>
                        <ProjectCard
                          address={project.address}
                          blurDataUrl={getBlurURL(featuredImage) || null}
                          district={location?.District || ''}
                          featuredImage={featuredImage || null}
                          name={project.name}
                          pincode={location?.Pincode || ''}
                          slug={project.slug}
                          state={location?.State || ''}
                        />
                      </Fade>
                    </Grid>
                  );
                })}
              </Grid>
              {totalPages > 1 ? (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 6,
                  }}
                >
                  <Pagination
                    aria-label="Pagination navigation"
                    color="tertiary"
                    count={totalPages}
                    onChange={(_, value) => pagination.onPageChange(value)}
                    page={pagination.pageIndex}
                    role="navigation"
                    showFirstButton
                    showLastButton
                  />
                </Box>
              ) : null}
            </React.Fragment>
          ) : (
            <Box sx={{ py: 8, textAlign: 'center' }}>
              <Typography color="text.primary" variant="h6" gutterBottom>
                No projects found.
              </Typography>
              <Typography color="text.primary" variant="body1">
                Please check back later.
              </Typography>
            </Box>
          )}
        </Container>
      </Section>
    </Box>
  );
}
