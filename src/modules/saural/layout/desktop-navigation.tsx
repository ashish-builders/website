'use client';

import * as React from 'react';
import { useEnquireNowDialog } from '@/modules/website/enquire-now-dialog/use-enquire-now-dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import jump from 'jump.js';

type DesktopNavItemProps = {
  anchor?: string;
  href?: string;
  label: string;
};

type DesktopNavigationProps = {
  navigation: DesktopNavItemProps[];
};

export function DesktopNavigation(props: DesktopNavigationProps) {
  const { navigation } = props;
  const enquireNowDialog = useEnquireNowDialog();

  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'), {
    defaultMatches: false,
    noSsr: true,
  });
  if (downMD) {
    return (
      <Divider
        sx={{
          borderColor: 'var(--mui-palette-common-white)',
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        borderBottom: '1px solid var(--mui-palette-common-white)',
        borderTop: '1px solid var(--mui-palette-common-white)',
        color: 'var(--mui-palette-common-white)',
        display: { md: 'block', xs: 'none' },
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}
          >
            {navigation.map((item, index) => (
              <ListItem key={index} sx={{ width: 'fit-content' }} disableGutters disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (!item.anchor || typeof document === 'undefined') {
                      return;
                    }
                    const element = document.getElementById(item.anchor);
                    if (!element) {
                      return;
                    }
                    jump(element, {
                      duration: 1000,
                      offset: -100,
                    });
                  }}
                  dense
                >
                  <ListItemText
                    slotProps={{
                      primary: {
                        fontSize: '0.9375rem',
                      },
                    }}
                    primary={item.label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box justifySelf="flex-end">
            <Button
              color="quaternary"
              onClick={() => enquireNowDialog.open()}
              sx={{ borderRadius: 8 }}
              variant="contained"
            >
              Enquire Now
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
