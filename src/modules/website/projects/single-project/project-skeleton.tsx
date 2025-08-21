import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { Section } from '../../layout/section';

export function ProjectSkeleton() {
  return (
    <React.Fragment>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'grey.100',
          display: 'flex',
          height: { md: '70vh', xs: '60vh' },
          justifyContent: 'center',
          mb: 6,
          minHeight: '400px',
          position: 'relative',
        }}
      >
        <Skeleton
          height="100%"
          sx={{ left: 0, position: 'absolute', top: 0 }}
          variant="rectangular"
          width="100%"
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              color: 'white',
              maxWidth: '800px',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Skeleton
              sx={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                mb: 2,
                mx: 'auto',
              }}
              height={60}
              variant="text"
              width="60%"
            />
            <Skeleton
              sx={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                mb: 3,
                mx: 'auto',
              }}
              height={30}
              variant="text"
              width="80%"
            />
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Skeleton
                height={40}
                sx={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                variant="rounded"
                width={120}
              />
              <Skeleton
                height={40}
                sx={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                variant="rounded"
                width={120}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Section>
        <Container maxWidth="lg">
          <Grid spacing={4} container>
            <Grid size={{ md: 6, xs: 12 }}>
              <Skeleton height={40} sx={{ mb: 2 }} variant="text" width="40%" />
              <Skeleton height={20} sx={{ mb: 1 }} variant="text" width="100%" />
              <Skeleton height={20} sx={{ mb: 1 }} variant="text" width="100%" />
              <Skeleton height={20} sx={{ mb: 1 }} variant="text" width="80%" />
              <Skeleton height={20} sx={{ mb: 1 }} variant="text" width="90%" />
              <Skeleton height={20} variant="text" width="75%" />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <Skeleton height={30} sx={{ mb: 2 }} variant="text" width="30%" />
              <Grid spacing={2} container>
                {Array.from({ length: 8 }).map((_, index) => (
                  <Grid key={index} size={{ sm: 4, xs: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Skeleton
                        height={60}
                        sx={{ mb: 1, mx: 'auto' }}
                        variant="circular"
                        width={60}
                      />
                      <Skeleton height={16} sx={{ mx: 'auto' }} variant="text" width="80%" />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Skeleton height={40} sx={{ mb: 3, mx: 'auto' }} variant="text" width="35%" />
          <Grid spacing={4} container>
            <Grid size={{ md: 6, xs: 12 }}>
              <Skeleton height={20} sx={{ mb: 2 }} variant="text" width="100%" />
              <Skeleton height={40} sx={{ mb: 2 }} variant="rectangular" width="100%" />
              <Skeleton height={40} sx={{ mb: 2 }} variant="rectangular" width="100%" />
              <Skeleton height={40} sx={{ mb: 2 }} variant="rectangular" width="100%" />
              <Skeleton height={120} sx={{ mb: 2 }} variant="rectangular" width="100%" />
              <Skeleton height={40} variant="rounded" width={120} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <Skeleton height={300} variant="rectangular" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </React.Fragment>
  );
}
