'use client';

import * as React from 'react';
import { FloorPlans, FloorPlansProps } from '@/modules/floor-plans';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getBlurURL } from '@/lib/image';

type FloorPlanSectionProps = {
  floorPlans: Array<{
    images: Array<{
      height: number;
      src: string;
      width: number;
    }>;
    name: string;
  }>;
};

export function FloorPlanSection(props: FloorPlanSectionProps) {
  const floorPlans = React.useMemo<FloorPlansProps['plans']>(
    () =>
      (Array.isArray(props.floorPlans) ? props.floorPlans : []).map((plan) => ({
        images: plan.images.map((img) => {
          const placeholder = img.src ? 'blur' : 'empty';
          return {
            alt: plan.name || null,
            blurDataUrl: getBlurURL(img.src) || undefined,
            height: img.height || 300,
            placeholder: placeholder as 'blur' | 'empty',
            src: img.src,
            width: img.width || 300,
          };
        }),
        name: plan.name,
      })),
    [props.floorPlans],
  );

  // ─── Service ─────────────────────────────────────────────────────────
  if (floorPlans.length === 0) {
    return null;
  }
  return (
    <Box sx={{ pb: 8, pt: 12 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: 'var(--mui-palette-senary-main)',
            fontFamily: 'var(--font-saural)',
            fontSize: { md: '3rem', sm: '2.5rem', xs: '2.15rem' },
            fontWeight: 400,
            letterSpacing: 1,
            lineHeight: 1.2,
            mb: 4,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
          variant="h2"
        >
          Floor Plans
        </Typography>
      </Container>
      <FloorPlans color="senary" plans={floorPlans} />
    </Box>
  );
}
