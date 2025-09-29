import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Logo } from '@/modules/icons/logo';
import { Divider } from '@mui/material';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MobileNavItem } from './mobile-nav-item';

interface NavigationDrawerProps {
  navigation: {
    href: string;
    label: string;
    variant?: string;
  }[];
  onClose: () => void;
  open: boolean;
}

export function NavigationDrawer({ navigation, onClose, open }: NavigationDrawerProps) {
  const drawerTitleId = 'navigation-drawer-title';
  const drawerDescId = 'navigation-drawer-desc';
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Drawer
      slotProps={{
        paper: {
          'aria-describedby': drawerDescId,
          'aria-labelledby': drawerTitleId,
          sx: { width: 320 },
        },
      }}
      anchor="right"
      aria-describedby={drawerDescId}
      aria-labelledby={drawerTitleId}
      aria-modal="true"
      onClose={onClose}
      open={open}
      role="dialog"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 2.5,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton aria-label="Close navigation drawer" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Logo aria-label="Ashish Builders & Developers logo" height={60} width={120} />
        </Box>
        <Typography id={drawerDescId} sx={{ mb: 2, textAlign: 'center' }} variant="body1">
          Ashish Builders & Developers brings into the city of Kashipur, Uttarakhand a new rhythm of
          life.
        </Typography>
        <Divider sx={{ mt: 1 }} />
        {lgDown ? (
          <Box sx={{ display: { lg: 'none', xs: 'block' }, mb: 2 }}>
            <List aria-label="Main navigation">
              {navigation.map(({ href, label, variant }) => (
                <MobileNavItem
                  href={href}
                  key={href}
                  label={label}
                  onClick={onClose}
                  variant={variant}
                />
              ))}
            </List>
          </Box>
        ) : (
          <Box sx={{ mb: 2 }}>
            <Typography id={drawerTitleId} sx={{ my: 2 }} variant="h6">
              Get In Touch
            </Typography>
            <Box sx={{ alignItems: 'flex-start', display: 'flex', mb: 2 }}>
              <LocationOnIcon aria-label="Address" sx={{ mr: 1, mt: 0.5 }} />
              <Typography variant="body2">
                Cheema Chauraha, Ramnagar Road, Kashipur, Uttrakhand - 244713
              </Typography>
            </Box>
            <Box sx={{ alignItems: 'center', display: 'flex', mb: 2 }}>
              <PhoneIcon aria-label="Phone number" sx={{ mr: 1 }} />
              <Typography variant="body2">+91 80 579 77777</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <EmailIcon aria-label="Email address" sx={{ mr: 1 }} />
              <Typography variant="body2">info@ashishbuilders.com</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
