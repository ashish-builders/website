'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Section } from '@/modules/website/layout/section';
import { Fade } from '@/components/motion/fade/fade';
import * as React from 'react';
import { Image } from '@/components/image/image';
import { useTheme, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { safeImageUri } from '@/lib/image';

export type ProjectOverviewProps = {
  amenities?: Array<{
    caption: null | string;
    publicUrl: string;
    title: null | string;
  }>;
  name: string;
  overview?: null | string;
};

export function ProjectOverview(props: ProjectOverviewProps) {
  const { amenities, name, overview } = props;

  const sectionId = React.useId();
  const theme = useTheme();

  const amenitiesData = React.useMemo(
    () => (Array.isArray(amenities) ? amenities : []),
    [amenities],
  );

  return (
    <Box sx={{ py: 8 }}>
      <Section
        header={
          <Fade>
            <span>
              {name} <mark>Overview</mark>
            </span>
          </Fade>
        }
        subheader={
          overview ? (
            <Fade delay={100}>
              <Box component="span">{overview}</Box>
            </Fade>
          ) : null
        }
        ariaLabel=""
        contentAriaLabel=""
        headerId={`${sectionId}-heading`}
        headingLevel={2}
        microdata={{}}
      >
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Grid justifyContent="center" spacing={2} container>
            {amenitiesData.map((amenity, index) => {
              const safePublicUrl = safeImageUri(amenity.publicUrl);

              return (
                <Grid key={index} size={{ md: 4, sm: 6, xs: 12 }}>
                  <Box
                    sx={{
                      [`&:hover #amenity-caption-${index}`]: {
                        fontSize: '0.875rem',
                        height: 'auto',
                      },
                      alignItems: 'center',
                      aspectRatio: '5/6',
                      borderRadius: (theme.vars || theme).shape.borderRadius,
                      display: 'flex',
                      flexDirection: 'column',
                      isolation: 'isolate',
                      overflow: 'hidden',
                      position: 'relative',
                      textAlign: 'center',
                      width: '100%',
                    }}
                    aria-labelledby={`amenity-title-${index}`}
                    component="article"
                    itemType="https://schema.org/Place"
                    role="listitem"
                    itemScope
                  >
                    {safePublicUrl ? (
                      <HoverScale
                        sx={{
                          aspectRatio: '5/6',
                          borderRadius: (theme.vars || theme).shape.borderRadius,
                          overflow: 'hidden',
                          width: '100%',
                        }}
                      >
                        <Image
                          alt={amenity.title ?? name}
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
                    <Box
                      sx={{
                        backgroundColor: alpha(theme.palette.common.black, 0.7),
                        bottom: 0,
                        color: theme.palette.common.white,
                        left: 0,
                        padding: theme.spacing(1.5),
                        position: 'absolute',
                        right: 0,
                        transition: theme.transitions.create(['height'], {
                          duration: theme.transitions.duration.short,
                          easing: theme.transitions.easing.easeInOut,
                        }),
                        zIndex: 10,
                      }}
                    >
                      <Typography id={`amenity-title-${index}`} itemProp="name" variant="body1">
                        {amenity.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 0,
                          height: 0,
                          opacity: 0.75,
                        }}
                        id={`amenity-caption-${index}`}
                        itemProp="name"
                        variant="body2"
                      >
                        {amenity.caption}
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
