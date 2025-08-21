'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';
import { PhotoSwipe } from '@/components/image/photoswipe';
import { Fade } from '@/components/motion/fade/fade';
import { Section } from '../../layout/section';

type ProjectImagesProps = {
  exteriorImages: Array<{
    alt: null | string;
    height: null | number;
    src: string;
    width: null | number;
  }>;
  interiorImages: Array<{
    alt: null | string;
    height: null | number;
    src: string;
    width: null | number;
  }>;
};

export function ProjectImages(props: ProjectImagesProps) {
  const { exteriorImages, interiorImages } = props;

  const sectionId = React.useId();
  const [tabIndex, setTabIndex] = React.useState(0);

  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  // Filter out empty arrays and create tab configuration
  const tabs = [
    {
      images: exteriorImages,
      label: 'Exterior',
      show: exteriorImages.length > 0,
    },
    {
      images: interiorImages,
      label: 'Interior',
      show: interiorImages.length > 0,
    },
  ].filter((tab) => tab.show);

  // Don't render if no images
  if (tabs.length === 0) {
    return null;
  }

  return (
    <Box sx={{ py: 8 }}>
      <Section
        header={
          <Fade>
            <span>
              Project <mark>Gallery</mark>
            </span>
          </Fade>
        }
        subheader={
          <Fade>
            <span>
              Browse a curated collection of images showcasing the unique design, craftsmanship, and
              features of this project.
            </span>
          </Fade>
        }
        ariaLabel=""
        contentAriaLabel=""
        headerId={`${sectionId}-heading`}
        headingLevel={2}
        microdata={{}}
      >
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box
            aria-label="Project Images"
            itemType="https://schema.org/ImageGallery"
            sx={{ color: 'tertiary.main', width: '100%' }}
            itemScope
          >
            {/* Only show tabs if more than one category has images */}
            {tabs.length > 1 && (
              <Tabs
                slotProps={{
                  indicator: {
                    sx: {
                      backgroundColor: 'tertiary.main',
                    },
                  },
                }}
                aria-label="Project image tabs"
                centered={!smDown}
                onChange={(_, idx) => setTabIndex(idx)}
                scrollButtons="auto"
                textColor="inherit"
                value={tabIndex}
                variant={smDown ? 'scrollable' : 'standard'}
              >
                {tabs.map((tab, idx) => (
                  <Tab
                    sx={{
                      fontSize: { sm: '1.25rem', xs: '1rem' },
                      opacity: 1,
                    }}
                    aria-controls={`project-images-panel-${idx}`}
                    id={`project-images-tab-${idx}`}
                    itemProp="name"
                    key={tab.label}
                    label={tab.label}
                  />
                ))}
              </Tabs>
            )}

            {tabs.map((tab, idx) => (
              <Box
                aria-labelledby={tabs.length > 1 ? `project-images-tab-${idx}` : undefined}
                hidden={tabs.length > 1 && tabIndex !== idx}
                id={`project-images-panel-${idx}`}
                key={tab.label}
                role="tabpanel"
                sx={{ pt: tabs.length > 1 ? 3 : 0 }}
              >
                {(tabs.length === 1 || tabIndex === idx) && (
                  <Box
                    sx={{
                      '& .photoswipe-gallery': {
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        justifyContent: 'center',
                      },
                      '& .photoswipe-gallery > *': {
                        boxSizing: 'border-box',
                        flex: {
                          md: '1 0 calc(33.333% - 16px)',
                          sm: '1 0 calc(50% - 16px)',
                          xs: '1 0 calc(100% - 16px)',
                        },
                        maxWidth: {
                          md: 'calc(33.333% - 16px)',
                          sm: 'calc(50% - 16px)',
                          xs: 'calc(100% - 16px)',
                        },
                      },
                      '& img': {
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        width: '100%',
                      },
                    }}
                  >
                    <PhotoSwipe
                      images={tab.images.map((img) => ({
                        image: {
                          alt: img.alt || `${tab.label} Image`,
                          height: img.height || 400,
                          loading: 'lazy',
                          src: img.src,
                          width: img.width || 400,
                        },
                        thumbnail: {
                          alt: img.alt || `${tab.label} Image`,
                          height: img.height || 400,
                          src: img.src,
                          width: img.width || 400,
                        },
                      }))}
                      microdata={{
                        itemProp: 'image',
                        itemScope: true,
                        itemType: 'https://schema.org/ImageGallery',
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Section>
    </Box>
  );
}
