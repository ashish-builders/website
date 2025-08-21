'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { alpha, useTheme } from '@mui/material/styles';

export function HeroSection() {
  const id = React.useId();
  const theme = useTheme();
  const headingId = `${id}-title`;
  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${
          theme.palette.background.paper
        }, ${alpha(theme.palette.quaternary.main, 0.3)})`,
        borderBottom: `2px solid ${theme.palette.divider}`,
        pb: 10,
        pt: 8,
        px: 2,
        textAlign: { sm: 'center', xs: 'left' },
      }}
      aria-labelledby={headingId}
      component="section"
      itemType="https://schema.org/Organization"
      role="region"
      itemScope
    >
      <Typography
        sx={{
          color: theme.palette.quaternary.main,
          fontWeight: theme.typography.fontWeightBold,
        }}
        component="h1"
        id={headingId}
        itemProp="name"
        variant="body1"
      >
        About Us
      </Typography>
      <Typography
        sx={{
          '& mark': {
            backgroundColor: 'transparent',
            color: theme.palette.quaternary.main,
            padding: 0,
          },
          fontSize: { sm: '3rem', xs: '2.5rem' },
          maxWidth: 655,
          mx: { sm: 'auto', xs: 0 },
        }}
        component="p"
        fontWeight={500}
        itemProp="description"
        variant="h3"
      >
        ABD Shaping a <mark>legacy</mark> of trust, quality, and innovation
      </Typography>
    </Box>
  );
}
