import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

export function CallToAction({ image }: { image: string }) {
  return (
    <Box
      sx={{
        bgcolor: 'grey.700',
        color: 'primary.contrastText',
        isolate: 'isolate',
        overflow: 'hidden',
        position: 'relative',
        py: { md: 12, xs: 8 },
      }}
      component="section"
    >
      {/* Background Image */}
      <Image
        style={{
          filter: 'brightness(0.3)',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        alt="Background"
        fetchPriority="auto"
        loading="lazy"
        src={image}
        fill
      />

      {/* Content */}
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          px: { md: 6, xs: 4 },
          zIndex: 1,
        }}
        maxWidth="xl"
      >
        <Box sx={{ maxWidth: 600, mx: 'auto', spaceY: 6, textAlign: 'center' }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: { md: '3rem', sm: '2.5rem', xs: '2rem' },
                fontWeight: 'bold',
                letterSpacing: '-0.02em',
              }}
              component="h2"
              variant="h3"
            >
              Ready to buy your
              <br /> Dream Home?
            </Typography>
          </Box>

          <Stack direction={{ sm: 'row', xs: 'column' }} justifyContent="center" spacing={2}>
            <Button
              color="tertiary"
              component="a"
              href="#enquire-now"
              size="large"
              variant="contained"
            >
              Enquire Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
