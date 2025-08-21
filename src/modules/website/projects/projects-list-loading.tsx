import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export function ProjectsListLoading() {
  return (
    <Grid aria-label="Loading project cards" role="list" spacing={4} container>
      {[...Array(6)].map((_, idx) => (
        <Grid
          aria-label={`Loading project card ${idx + 1}`}
          key={idx}
          role="listitem"
          size={{ md: 4, sm: 6, xs: 12 }}
        >
          <Box aria-busy="true" aria-label="Loading project details">
            <Skeleton
              height={240}
              sx={{ borderRadius: 2, mb: 2 }}
              variant="rectangular"
              width="100%"
            />
            <Skeleton height={32} sx={{ mb: 1 }} variant="text" width="60%" />
            <Skeleton height={24} sx={{ mb: 2 }} variant="text" width="80%" />
            <Skeleton height={36} variant="rounded" width={120} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
