import {
  Breadcrumbs as MUIBreadcrumbs,
  Link as MuiLink,
  Typography,
  BreadcrumbsProps,
} from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

export type BreadcrumbItem =
  | { href: string; isLink: true; key?: string; label: React.ReactNode }
  | { isLink: false; key?: string; label: React.ReactNode };

export interface BreadcrumbsPropsCustom extends Omit<BreadcrumbsProps, 'children'> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items, ...props }: BreadcrumbsPropsCustom) {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" {...props}>
      {items.map((item, idx) =>
        item.isLink ? (
          <MuiLink
            color="text.secondary"
            component={Link}
            href={item.href}
            key={item.key || idx}
            underline="hover"
          >
            {item.label}
          </MuiLink>
        ) : (
          <Typography color="text.secondary" key={item.key || idx}>
            {item.label}
          </Typography>
        ),
      )}
    </MUIBreadcrumbs>
  );
}
