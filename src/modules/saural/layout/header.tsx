import { Image } from '@/components/image/image';
import { AppBar, Box, Stack, Toolbar, Container } from '@mui/material';
import { EnquireNowDialogProvider } from '@/modules/website/enquire-now-dialog/enquire-now-dialog-provider';
import * as React from 'react';
import { Logo } from '@/modules/icons/logo';
import Link from 'next/link';
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
          <Container maxWidth="lg">
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              py={2}
              spacing={2}
              width="100%"
              useFlexGap
            >
              <Box>
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
              <Link href="/">
                <Logo height="59" variant="alternative" width="124" />
              </Link>
            </Stack>
          </Container>
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
