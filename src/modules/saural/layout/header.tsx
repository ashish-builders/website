import { Image } from '@/components/image/image';
import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { EnquireNowDialogProvider } from '@/modules/website/enquire-now-dialog/enquire-now-dialog-provider';
import * as React from 'react';
import { DesktopNavigation } from './desktop-navigation';
import navigationJson from './navigation.json';

const navigation = navigationJson.items;

export function Header() {
  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      color="default"
      position="absolute"
    >
      <Toolbar disableGutters>
        <Stack alignItems="center" direction="column" width="100%">
          <Box sx={{ py: 2 }}>
            <Image
              alt="Saural Villa Logo"
              height={73.8}
              loading="eager"
              src="/assets/projects/logo/saural-villa-corbett/logo-white.svg"
              sx={{ objectFit: 'contain' }}
              width={127.8}
              priority
            />
          </Box>
          <React.Suspense fallback={null}>
            <EnquireNowDialogProvider>
              <DesktopNavigation navigation={navigation} />
            </EnquireNowDialogProvider>
          </React.Suspense>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
