'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';
import { PhotoSwipe } from '@/components/image/photoswipe';

export type FloorPlansProps = {
  color?: 'primary' | 'quaternary' | 'quinary' | 'secondary' | 'senary' | 'tertiary';
  plans: Array<{
    images: Array<{
      alt: null | string;
      blurDataUrl?: string;
      height: null | number;
      placeholder?: 'blur' | 'empty';
      src: string;
      width: null | number;
    }>;
    name: string;
  }>;
};

export function FloorPlans(props: FloorPlansProps) {
  const { color = 'tertiary', plans } = props;
  const [tabIndex, setTabIndex] = React.useState(0);

  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ mb: 6 }}>
      <Box
        aria-label="Floor Plans"
        itemType="https://schema.org/Collection"
        sx={{ color: `${color}.main`, width: '100%' }}
        itemScope
      >
        <Tabs
          slotProps={{
            indicator: {
              sx: {
                backgroundColor: `${color}.main`,
              },
            },
          }}
          aria-label="Floor plan tabs"
          centered={!smDown}
          onChange={(_, idx) => setTabIndex(idx)}
          scrollButtons="auto"
          textColor="inherit"
          value={tabIndex}
          variant={smDown ? 'scrollable' : 'standard'}
        >
          {plans.map((plan, idx) => (
            <Tab
              sx={{
                fontSize: { sm: '1.25rem', xs: '1rem' },
                opacity: 1,
              }}
              aria-controls={`floor-plan-panel-${idx}`}
              id={`floor-plan-tab-${idx}`}
              itemProp="name"
              key={plan.name}
              label={plan.name}
            />
          ))}
        </Tabs>
        {plans.map((plan, idx) => (
          <Box
            aria-labelledby={`floor-plan-tab-${idx}`}
            hidden={tabIndex !== idx}
            id={`floor-plan-panel-${idx}`}
            key={plan.name}
            role="tabpanel"
            sx={{ pt: 3 }}
          >
            {tabIndex === idx && (
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
                      sm: '1 0 calc(50% - 16px)',
                      xs: '1 0 calc(100% - 16px)',
                    },
                    maxWidth: {
                      sm: 'calc(50% - 16px)',
                      xs: 'calc(100% - 16px)',
                    },
                  },
                  '& img': {
                    display: 'block',
                    height: 'auto',
                    width: '100%',
                  },
                }}
              >
                <PhotoSwipe
                  images={plan.images.map((img) => ({
                    image: {
                      alt: img.alt || 'Floor Plan Image',
                      blurDataURL: img.blurDataUrl,
                      height: img.height || 800,
                      loading: 'lazy',
                      placeholder: img.placeholder,
                      priority: false,
                      src: img.src,
                      width: img.width || 800,
                    },
                    thumbnail: {
                      alt: img.alt || 'Floor Plan Image',
                      blurDataURL: img.blurDataUrl,
                      height: img.height || 800,
                      placeholder: img.placeholder,
                      src: img.src,
                      width: img.width || 800,
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
  );
}
