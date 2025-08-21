import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';

export function BlogSingleLoading() {
  return (
    <Container
      aria-busy="true"
      aria-label="Loading blog post"
      component="main"
      itemType="https://schema.org/BlogPosting"
      maxWidth="md"
      sx={{ py: 4 }}
      itemScope
    >
      <Stack spacing={3}>
        <Box>
          <Skeleton aria-hidden="true" height={36} variant="rectangular" width={80} />
        </Box>
        <Skeleton aria-hidden="true" height={48} variant="text" width="60%" />
        <Skeleton aria-hidden="true" height={24} variant="text" width="40%" />
        <Skeleton
          aria-hidden="true"
          height={400}
          sx={{ borderRadius: 1 }}
          variant="rectangular"
          width="100%"
        />
        <Box width="100%">
          <Skeleton aria-hidden="true" height={32} variant="text" width="100%" />
          <Skeleton aria-hidden="true" height={32} variant="text" width="100%" />
          <Skeleton aria-hidden="true" height={32} variant="text" width="80%" />
        </Box>
        <Divider />
        <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
          {[...Array(3)].map((_, i) => (
            <Skeleton aria-hidden="true" height={32} key={i} variant="rounded" width={60} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
