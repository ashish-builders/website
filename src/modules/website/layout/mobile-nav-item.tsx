import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@/components/link/link';
import * as React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { Variants } from './types';

interface MobileNavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
  variant?: string;
}

const variantStyles = {
  default: {
    fontSize: 15,
  },
  saural: {
    '&:hover': {
      background: 'var(--mui-palette-gradient)',
    },
    background: 'var(--mui-palette-gradient)',
    display: 'inline-block',
    fontSize: 15,
    lineHeight: 1.2,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};

const buttonVariantStyles: Record<Variants, SxProps<Theme>> = {
  default: {
    borderRadius: 2,
    px: 1.5,
    py: 1,
    textTransform: 'none',
  },
  saural: {
    '&:hover': {
      background: 'var(--mui-palette-quinary-main)',
    },
    background: 'var(--mui-palette-quinary-main)',
    borderRadius: 2,
    fontWeight: 700,
    px: 1.5,
    py: 0.5,
    textTransform: 'none',
  },
};

export function MobileNavItem({ href, label, onClick, variant }: MobileNavItemProps) {
  const style = variantStyles[variant as keyof typeof variantStyles] || variantStyles.default;
  const buttonStyle =
    buttonVariantStyles[variant as keyof typeof buttonVariantStyles] || buttonVariantStyles.default;
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} href={href} onClick={onClick} sx={buttonStyle}>
        <ListItemText primary={<span style={style as React.CSSProperties}>{label}</span>} />
      </ListItemButton>
    </ListItem>
  );
}
