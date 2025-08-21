import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';

export function BlogArticlesError({ error }: { error: Error }) {
  return (
    <Box maxWidth={500} mx="auto" py={8}>
      <Alert severity="error" variant="filled">
        <AlertTitle>Something went wrong</AlertTitle>
        <Typography variant="body2">
          {error.message || 'Unable to load blog articles. Please try again later.'}
        </Typography>
      </Alert>
    </Box>
  );
}
