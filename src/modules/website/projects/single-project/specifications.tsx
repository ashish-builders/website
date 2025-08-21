'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Section } from '@/modules/website/layout/section';
import { Fade } from '@/components/motion/fade/fade';
import * as React from 'react';
import { Image } from '@/components/image/image';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { safeImageUri } from '@/lib/image';

export type SpecificationProps = {
  specifications?: Array<{
    caption: null | string;
    publicUrl: string;
    title: null | string;
  }>;
};

export function Specification(props: SpecificationProps) {
  const { specifications } = props;

  const sectionId = React.useId();
  const theme = useTheme();

  const specificationsData = React.useMemo(
    () => (Array.isArray(specifications) ? specifications : []),
    [specifications],
  );

  if (specificationsData.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: 'color-mix(in srgb, var(--mui-palette-quaternary-light) 15%, white 85%)',
        py: 8,
      }}
    >
      <Section
        header={
          <Fade>
            <span>Specifications</span>
          </Fade>
        }
        ariaLabel=""
        contentAriaLabel=""
        headerId={`${sectionId}-heading`}
        headingLevel={2}
        microdata={{}}
      >
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Grid justifyContent="center" spacing={2} container>
            {specificationsData.map((specification, index) => {
              const safePublicUrl = safeImageUri(specification.publicUrl);

              return (
                <Grid key={index} size={{ md: 3, sm: 6, xs: 12 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    aria-labelledby={`speifications-title-${index}`}
                    component="article"
                  >
                    {safePublicUrl ? (
                      <HoverScale
                        sx={{
                          aspectRatio: '4/3',
                          borderRadius: (theme.vars || theme).shape.borderRadius,
                          overflow: 'hidden',
                          width: '100%',
                        }}
                      >
                        <Image
                          alt={specification.title || 'Specification Image'}
                          itemProp="image"
                          loading="lazy"
                          priority={false}
                          quality={100}
                          sizes="100vw"
                          src={safePublicUrl}
                          sx={{ objectFit: 'cover' }}
                          fill
                        />
                      </HoverScale>
                    ) : null}
                    <Box sx={{ mt: 1 }}>
                      <Typography id={`amenity-title-${index}`} itemProp="name" variant="body1">
                        <strong>{specification.title}</strong>: {specification.caption}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
