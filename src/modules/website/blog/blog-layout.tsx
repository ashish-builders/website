import Grid from '@mui/material/Grid';
import * as React from 'react';

type BlogLayoutProps = {
  children: React.ReactNode;
  disableSidebar?: boolean;
  sidebar: React.ReactNode;
};

export function BlogLayout(props: BlogLayoutProps) {
  const { children, disableSidebar, sidebar } = props;

  if (disableSidebar) {
    return (
      <Grid container>
        <Grid size={{ xs: 12 }}>{children}</Grid>
      </Grid>
    );
  }

  return (
    <Grid spacing={4} container>
      <Grid size={{ md: 8, sm: 7, xs: 12 }}>{children}</Grid>
      <Grid size={{ md: 4, sm: 5, xs: 12 }}>{sidebar}</Grid>
    </Grid>
  );
}
