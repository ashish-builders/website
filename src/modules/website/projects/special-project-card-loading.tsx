import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export function SpecialProjectCardLoading({ height }: { height: number }) {
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
      >
        <Skeleton
          height={height}
          sx={{ left: 0, position: 'absolute', top: 0, zIndex: -1 }}
          variant="rectangular"
          width="100%"
        />
        <CardContent>
          <Grid spacing={3} sx={{ color: 'common.white' }} container>
            <Grid size={{ md: 4, xs: 12 }}>
              <Skeleton
                height={height}
                sx={{ borderRadius: 2, mb: 2 }}
                variant="rectangular"
                width="100%"
              />
            </Grid>
            <Grid alignSelf="center" size={{ md: 3, xs: 12 }}>
              <Skeleton
                height={Math.round(height / 1.5)}
                sx={{ mb: 2, mx: 'auto' }}
                variant="rectangular"
                width={120}
              />
              <Skeleton height={32} sx={{ mx: 'auto' }} variant="text" width="80%" />
            </Grid>
            <Grid alignSelf="center" size={{ md: 5, xs: 12 }}>
              <Skeleton height={40} sx={{ mb: 2, mx: 'auto' }} variant="text" width="90%" />
              <Skeleton height={28} sx={{ mb: 2, mx: 'auto' }} variant="text" width="60%" />
              <Skeleton height={44} sx={{ mx: 'auto' }} variant="rounded" width={160} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
