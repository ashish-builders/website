import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PrakashNilayam } from '@/modules/icons/prakash-nilayam';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { EnquireNowButton } from '../../enquire-now-button';

export function SlideTwo() {
  return (
    <Box
      sx={{
        ml: { sm: 'auto', xs: 0 },
        mr: { md: 10, sm: 6, xs: 0 },
        pb: 8,
        pt: { sm: 16, xs: 4 },
        width: { lg: '35%', md: '45%', sm: '70%', xs: 'auto' },
      }}
    >
      <Box
        sx={{
          isolation: 'isolate',
          mx: 2,
          p: 3,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#1E434C',
            borderRadius: 1.5,
            bottom: 0,
            boxShadow: 4,
            left: 0,
            opacity: 0.9,
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: -1,
          }}
          aria-hidden="true"
        />
        <Typography
          sx={{
            color: 'var(--mui-palette-quaternary-light)',
            textAlign: 'center',
          }}
          component="h1"
          fontWeight={500}
          variant="h5"
        >
          Live Spaciously, Live Green
        </Typography>
        <Typography
          sx={{
            color: 'var(--mui-palette-quaternary-light)',
            textAlign: 'center',
          }}
          component="p"
          variant="body1"
        >
          Discover 25 Acres of Serenity!
        </Typography>
        <PrakashNilayam
          sx={{
            color: 'var(--mui-palette-common-white)',
            display: 'block',
            height: { sm: 114.4, xs: 'auto' },
            maxWidth: '100%',
            mt: 2,
            mx: 'auto',
            width: 297.6,
          }}
        />
        <Typography
          sx={{
            color: 'var(--mui-palette-common-white)',
            mb: 2,
            textAlign: 'center',
          }}
          component="p"
          variant="body1"
        >
          2, 3 & 4 BHK Villas & Duplex
        </Typography>
        <Divider
          sx={{
            borderColor: 'var(--mui-palette-quaternary-light)',
          }}
        />
        <Stack
          alignItems="center"
          direction={{ sm: 'row', xs: 'row-reverse' }}
          justifyContent="space-between"
          mt={2}
          spacing={2}
          useFlexGap
        >
          <Typography
            sx={{
              color: 'var(--mui-palette-quaternary-light)',
              fontSize: { sm: '1.25rem', xs: '1rem' },
            }}
            component="p"
            fontWeight={500}
          >
            ₹ 56.32 lacs onwards
          </Typography>
          <EnquireNowButton
            sx={{
              fontSize: { sm: '0.875rem', xs: '0.8125rem' },
              px: { sm: 2, xs: 1.25 },
              py: { sm: 0.75, xs: 0.25 },
            }}
            color="tertiary"
            variant="contained"
          />
        </Stack>
      </Box>
    </Box>
  );
}
