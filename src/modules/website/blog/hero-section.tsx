import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function HeroSection() {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, var(--mui-palette-background-paper), color-mix(in srgb, var(--mui-palette-quaternary-main) 15%, white 85%))`,
        borderBottom: `2px solid var(--mui-palette-divider)`,
        pb: 10,
        pt: 8,
        px: 4,
        textAlign: 'center',
      }}
      aria-label="Blog"
      component="section"
      itemType="https://schema.org/WebPage"
      role="region"
      itemScope
    >
      <Typography
        sx={{
          color: 'var(--mui-palette-quaternary-main)',
          fontWeight: 700,
        }}
        component="h1"
        itemProp="name"
        variant="body1"
      >
        Blog
      </Typography>
      <Typography
        sx={{
          '& mark': {
            backgroundColor: 'transparent',
            color: 'var(--mui-palette-quaternary-main)',
            padding: 0,
          },
          maxWidth: 400,
          mx: 'auto',
        }}
        component="p"
        fontWeight={600}
        itemProp="description"
        variant="h4"
      >
        Stay <mark>in the loop</mark> with the latest about ABD
      </Typography>
    </Box>
  );
}
