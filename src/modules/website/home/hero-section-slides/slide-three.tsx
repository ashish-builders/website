import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Vivanta } from '@/modules/icons/vivanta';

export function SlideThree() {
  const content = "Welcome to Kashipur's Most Exclusive Address";
  return (
    <Box
      sx={{
        ml: { sm: 'auto', xs: 0 },
        mr: { md: 10, sm: 6, xs: 0 },
        pb: 8,
        pt: { sm: 16, xs: 4 },
        width: { lg: '38%', md: '45%', sm: '70%', xs: 'auto' },
      }}
    >
      <Box
        sx={{
          mx: 2,
          p: 2,
        }}
      >
        <Vivanta
          sx={{
            display: 'block',
            height: { sm: 188, xs: 'auto' },
            maxWidth: { sm: 400, xs: '100%' },
            ml: 'auto',
            width: 500,
          }}
        />
        <Typography
          sx={{
            color: 'var(--mui-palette-common-white)',
            fontSize: { sm: '3rem', xs: '2.5rem' },
            lineHeight: 'normal',
            textAlign: 'right',
          }}
          component="h1"
          fontWeight={600}
        >
          A Premium Life,
          <br /> Nestled in Nature
        </Typography>
        <Typography
          sx={{
            color: 'var(--mui-palette-common-white)',
            fontSize: '1rem',
            mt: 1,
            textAlign: 'right',
          }}
          variant="body1"
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
