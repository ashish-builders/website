import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';

export type SectionProps = {
  ariaLabel?: string;
  children: React.ReactNode;
  contentAriaLabel?: string;
  header?: React.ReactNode;
  headerId?: string;
  headerMaxWidth?: number | string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  microdata?: {
    contentItemProp?: string;
    headerItemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    subheaderItemProp?: string;
  };
  role?: React.AriaRole;
  subheader?: React.ReactNode;
  subheaderId?: string;
};

export function Section(props: SectionProps) {
  const {
    ariaLabel,
    children,
    contentAriaLabel,
    header,
    headerId,
    headerMaxWidth,
    headingLevel = 2,
    microdata,
    role = 'region',
    subheader,
    subheaderId,
  } = props;

  const generatedHeaderId = React.useId();

  const calculatedHeaderId = headerId || generatedHeaderId;
  const calculatedSubheaderId = subheaderId || `${calculatedHeaderId}-description`;

  // Dynamic heading component based on level
  const headingVariant = `h${headingLevel}` as const;
  const headingComponent = `h${headingLevel}` as const;

  return (
    <Box
      aria-label={!header && ariaLabel ? ariaLabel : undefined}
      aria-labelledby={header ? calculatedHeaderId : undefined}
      component="section"
      itemScope={microdata?.itemScope}
      itemType={microdata?.itemType}
      role={role}
    >
      <Container maxWidth="lg">
        {header && (
          <Typography
            sx={{
              '& mark': {
                backgroundColor: 'transparent',
                color: 'quaternary.main',
                padding: 0,
              },
              color: 'text.primary',
              fontSize: '2.15rem',
              fontWeight: 500,
              lineHeight: 1.2,
              maxWidth: headerMaxWidth,
              mb: 1,
              mx: 'auto',
              textAlign: 'center',
            }}
            aria-describedby={subheader ? calculatedSubheaderId : undefined}
            aria-level={headingLevel}
            component={headingComponent}
            id={calculatedHeaderId}
            itemProp={microdata?.headerItemProp}
            tabIndex={0}
            variant={headingVariant}
          >
            {header}
          </Typography>
        )}
        {subheader && (
          <Typography
            sx={{
              '&:focus-visible': {
                borderRadius: 1,
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: '2px',
              },
              color: 'text.primary',
              fontSize: { lg: '1.125rem', xs: '1rem' },
              lineHeight: { lg: 1.8, xs: 1.6 },
              maxWidth: headerMaxWidth,
              mb: header ? 2 : 0,
              mx: 'auto',
              textAlign: 'center',
            }}
            component="p"
            id={calculatedSubheaderId}
            itemProp={microdata?.subheaderItemProp}
            tabIndex={0}
            variant="body1"
          >
            {subheader}
          </Typography>
        )}
      </Container>
      <Box aria-label={contentAriaLabel || undefined} itemProp={microdata?.contentItemProp}>
        {children}
      </Box>
    </Box>
  );
}
