'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { Logo } from '@/modules/icons/logo';
import { Link } from '@/components/link/link';
import { Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StretchedHamburger from '@/components/icons/streched-hamburger';
import navigationConfig from './navigation.json';
import { DesktopNavItem } from './desktop-nav-item';
import { NavigationDrawer } from './navigation-drawer';

export function Header() {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  // ─── State ───────────────────────────────────────────────────────────
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // ─── Callbacks ───────────────────────────────────────────────────────────────
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar
      sx={{
        backgroundColor: 'var(--mui-palette-background-default)',
        height: 90,
        justifyContent: 'center',
        zIndex: 10,
      }}
      color="default"
      elevation={0}
      position="sticky"
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: 90,
          }}
        >
          <Link href="/" sx={{ alignItems: 'center', display: 'flex' }}>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <Logo height="59" width="124" />
            </Box>
          </Link>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              gap: 3,
            }}
          >
            {lgDown ? null : (
              <Box
                sx={{
                  alignItems: 'center',
                  display: { lg: 'flex', xs: 'none' },
                  gap: 3,
                }}
              >
                {navigationConfig.items.map(({ href, label, variant }) => (
                  <DesktopNavItem href={href} key={href} label={label} variant={variant} />
                ))}
              </Box>
            )}
            <IconButton
              aria-label="Open navigation menu"
              onClick={handleDrawerOpen}
              sx={{ borderRadius: 1 }}
            >
              <StretchedHamburger aria-hidden="true" height={22} width={65} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <NavigationDrawer onClose={handleDrawerClose} open={drawerOpen} />
    </AppBar>
  );
}
