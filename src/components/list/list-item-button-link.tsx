import * as React from 'react';
import { ListItemButton, type ListItemButtonProps } from '@mui/material';
import { Link, type LinkProps } from '@/components/link/link';

function ListItemButtonBase(
  props: ListItemButtonProps & LinkProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return <ListItemButton component={Link} ref={ref} {...props} />;
}

export const ListItemButtonLink = React.forwardRef<
  HTMLAnchorElement,
  ListItemButtonProps & LinkProps
>(ListItemButtonBase);
