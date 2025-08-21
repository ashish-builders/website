import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from '@/components/link/link';
import { type SxProps, type Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Variants } from './types';

const buttonVariantsStyle: Record<Variants, SxProps<Theme>> = {
  [Variants.DEFAULT]: {
    textTransform: 'none',
  },
  [Variants.SAURAL]: {
    background: 'var(--mui-palette-quinary-main)',
    borderRadius: 2,
    fontWeight: 700,
    px: 2,
    textTransform: 'none',
  },
};

const labelVariantsStyle: Record<Variants, SxProps<Theme>> = {
  [Variants.DEFAULT]: {
    fontSize: 15,
  },
  [Variants.SAURAL]: {
    background: 'var(--mui-palette-gradient)',
    display: 'inline-block',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.2,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};

interface DesktopNavItemProps {
  href: string;
  label: string;
  variant?: string;
}

export function DesktopNavItem({ href, label, variant }: DesktopNavItemProps) {
  const variantKey = Object.values(Variants).includes(variant as Variants)
    ? (variant as Variants)
    : Variants.DEFAULT;
  const buttonStyles = buttonVariantsStyle[variantKey];
  const labelStyles = labelVariantsStyle[variantKey];
  return (
    <Button
      color="inherit"
      href={href}
      key={href}
      LinkComponent={Link}
      size="medium"
      sx={buttonStyles}
    >
      <Box component="span" sx={labelStyles}>
        {label}
      </Box>
    </Button>
  );
}
