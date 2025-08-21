import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EnquireNowButton } from '../../enquire-now-button';

export function SlideOne() {
  const content = `With over two decades of experience, Ashish Builders & Developers has
        become Kashipur's most trusted name in real estate. We craft homes that
        offer peace, happiness, and a better lifestyle—blending quality
        construction with sincere values.`;
  return (
    <Box
      sx={{
        color: 'var(--mui-palette-common-white)',
        ml: { sm: 'auto', xs: 0 },
        mr: { md: 10, sm: 6, xs: 0 },
        pb: 8,
        pt: { sm: 16, xs: 4 },
        px: { sm: 0, xs: 3 },
        width: { md: '35%', sm: '50%', xs: 'auto' },
      }}
    >
      <Typography
        sx={{
          fontSize: { md: '3.5rem', sm: '3rem', xs: '2.5rem' },
        }}
        fontWeight={600}
        variant="h1"
      >
        Building Dreams on Trust.
      </Typography>
      <Typography sx={{ fontSize: { sm: '1rem', xs: '0.875rem' }, mt: 1 }} variant="body1">
        {content}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { sm: 'flex-end', xs: 'flex-start' },
          mt: 3,
        }}
      >
        <EnquireNowButton
          sx={{
            fontSize: { sm: '0.875rem', xs: '0.8125rem' },
            px: { sm: 2, xs: 1.25 },
            py: { sm: 0.75, xs: 0.25 },
          }}
          color="tertiary"
          variant="contained"
        />
      </Box>
    </Box>
  );
}
