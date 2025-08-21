import { Fade } from '@/components/motion/fade/fade';
import { Box, Typography } from '@mui/material';
import * as React from 'react';

export function CompanyDescriptionSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'color-mix(in srgb, var(--mui-palette-quaternary-light) 30%, white 70%)',
        py: { lg: 16 / 4, xs: 12 / 4 },
      }}
    >
      <Fade>
        <Typography
          sx={{
            color: 'black',
            fontSize: { lg: '19.5px', xs: '1.125rem' },
            lineHeight: { lg: '29px', xs: '1.75rem' },
            maxWidth: 1150,
            mx: 'auto',
            px: 4,
          }}
          align="center"
        >
          Ashish Builders and Developers welcomes you to an exclusive collection of premium
          apartments, villas, and commercial spaces— crafted for modern living at some of the most
          sought-after locations in Kashipur & Uttarakhand.
        </Typography>
      </Fade>
    </Box>
  );
}
