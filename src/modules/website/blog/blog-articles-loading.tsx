import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

export function BlogArticlesLoading() {
  return (
    <Stack aria-label="Blog articles list" component="section" role="region" spacing={3}>
      {[...Array(4)].map((_, idx) => (
        <Card
          aria-label="Loading blog article"
          component="article"
          elevation={0}
          key={idx}
          sx={{ borderRadius: 0 }}
        >
          <Skeleton animation="wave" height={300} variant="rectangular" />
          <CardContent sx={{ pt: 1.5, px: 0 }}>
            <Skeleton height={32} sx={{ mb: 1 }} variant="text" width="40%" />
            <Skeleton height={24} sx={{ mb: 0.5 }} variant="text" width="80%" />
            <Skeleton height={20} variant="text" width="60%" />
            <Skeleton height={32} sx={{ mt: 2 }} variant="rounded" width={100} />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
