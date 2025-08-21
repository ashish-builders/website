import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Fade } from '@/components/motion/fade/fade';
import { Image } from '@/components/image/image';
import { AshishGuptaSignature } from './ashish-gupta-signature';

export function AboutSection() {
  return (
    <Box position="relative" py={8} sx={{ isolation: 'isolate' }}>
      <Container maxWidth="lg">
        <Fade>
          <Image
            sx={{
              display: 'block',
              mb: 3,
              mx: 'auto',
              textAlign: 'center',
            }}
            alt="Saural Logo"
            height={144}
            src="/assets/projects/other/saural-villa-corbett/escape-the-ordinary.webp"
            width={96}
          />
        </Fade>
        <Fade>
          <Typography
            sx={{
              fontFamily: 'var(--font-saural)',
              fontSize: 32,
              letterSpacing: 1,
              lineHeight: 1.2,
              mb: 2,
              textAlign: 'center',
            }}
            variant="h2"
          >
            Escape the <span style={{ color: '#D97C2D' }}>Ordinary</span>,
            <br />
            Embrace the Exceptional
          </Typography>
        </Fade>

        <Fade>
          <Typography
            sx={{
              color: 'text.primary',
              fontFamily: 'var(--font-secondary)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 800,
              mb: 8,
              mx: 'auto',
              textAlign: 'center',
            }}
            variant="body1"
          >
            We believe your home should be more than just a place to live—it should be a retreat
            where you can unwind, recharge, and create cherished memories. Our thoughtfully designed
            spaces blend modern comforts with serene surroundings, ensuring you and your family
            enjoy the perfect balance of convenience and tranquility, every single day.
          </Typography>
        </Fade>

        <Fade>
          <AshishGuptaSignature
            height={87}
            sx={{ display: 'block', maxWidth: '100%', mx: 'auto' }}
            width={272}
          />

          <Typography
            sx={{
              color: 'text.primary',
              fontFamily: 'var(--font-saural)',
              fontSize: 24,
              mb: 1,
              textAlign: 'center',
            }}
            variant="h3"
          >
            Ashish Gupta
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontFamily: 'var(--font-saural)',
              fontSize: 16,
              textAlign: 'center',
            }}
            variant="body2"
          >
            Managing Director, Ashish Builders & Developers
          </Typography>
        </Fade>
      </Container>
      <Box
        sx={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: -1,
        }}
        aria-hidden="true"
      >
        <Image
          sx={{
            height: 'auto',
            maxWidth: '100%',
          }}
          alt="Saural Villa Corbett Background Element"
          aria-hidden="true"
          height={117}
          loading="lazy"
          priority={false}
          src="/assets/projects/other/saural-villa-corbett/saural-bg-element-one.webp"
          width={208}
        />
      </Box>
    </Box>
  );
}
