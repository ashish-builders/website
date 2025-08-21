import { CircularArrowRight } from '@/components/icons/circular-arrow-right';
import { safeImageUri } from '@/lib/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getImageProps } from 'next/image';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { LinkNoPrefetch } from '@/components/link/link';
import * as React from 'react';

interface ProjectCardProps {
  blurDataUrl?: null | string;
  city: string;
  description: string;
  id: string;
  image?: null | string;
  imageHeight?: number | string;
  imageWidth?: number | string;
  name: string;
  priority?: boolean;
}

export function ProjectCard(props: ProjectCardProps) {
  const {
    blurDataUrl,
    city,
    description,
    id,
    image,
    imageHeight,
    imageWidth = 600,
    name,
    priority = false,
  } = props;

  const titleId = React.useId();
  const descriptionId = React.useId();

  const imageUri = safeImageUri(image);
  let imageProps;
  if (imageUri) {
    imageProps = getImageProps({
      alt: `${name} - ${city} residential project`,
      blurDataURL: blurDataUrl || undefined,
      height: typeof imageHeight === 'string' ? parseInt(imageHeight, 10) : imageHeight,
      loading: 'lazy',
      placeholder: blurDataUrl ? 'blur' : 'empty',
      priority,
      quality: 100,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
      src: imageUri,
      style: {
        height: imageHeight,
        objectFit: 'cover',
        width: '100%',
      },
      width: typeof imageWidth === 'string' ? parseInt(imageWidth, 10) : imageWidth,
    });
  }

  return (
    <Card
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      component="article"
      itemType="https://schema.org/RealEstateProject"
      role="article"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      itemScope
    >
      {imageProps ? (
        <HoverScale
          sx={{
            borderRadius: 1,
            mb: 2,
          }}
          height={imageHeight}
        >
          <CardMedia
            component="img"
            {...imageProps.props}
            aria-describedby={titleId}
            itemProp="image"
            role="img"
          />
        </HoverScale>
      ) : null}
      <CardContent sx={{ p: 0 }}>
        <Typography
          sx={{
            color: 'black',
            fontSize: { md: '1.5rem', xs: '1.25rem' },
            fontWeight: 500,
            letterSpacing: '0.1875rem',
            lineHeight: '2.3625rem',
            textTransform: 'uppercase',
          }}
          aria-level={3}
          component="h3"
          id={titleId}
          itemProp="name"
          role="heading"
          variant="h3"
        >
          {name}
        </Typography>
        <Grid alignItems="flex-start" container>
          <Grid size="grow">
            <Typography
              sx={{
                color: '#C28562',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.4875rem',
                lineHeight: '1.8125rem',
                mb: 2,
                textTransform: 'uppercase',
              }}
              aria-label={`Location: ${city}`}
              component="div"
              itemProp="address"
              itemType="https://schema.org/PostalAddress"
              variant="subtitle1"
              itemScope
            >
              <span itemProp="addressLocality">{city}</span>
            </Typography>
          </Grid>
          <Grid>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'flex-end',
                mt: -1.5,
                position: 'relative',
              }}
            >
              <IconButton
                sx={{
                  '&:active': {
                    transform: 'translateX(2px)',
                  },
                  '&:hover': {
                    transform: 'translateX(4px)',
                  },
                  borderRadius: 1,
                  transition: 'transform 0.2s ease-in-out',
                }}
                aria-label={`View details of ${name} project in ${city}`}
                href={`/projects/${id}`}
                itemProp="url"
                LinkComponent={LinkNoPrefetch}
                role="link"
                disableRipple
              >
                <CircularArrowRight aria-hidden="true" height={48} width={73.5} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{
            color: 'text.secondary',
            display: '-webkit-box',
            fontSize: '0.9375rem',
            lineHeight: '1.8125rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
          component="p"
          id={descriptionId}
          itemProp="description"
          variant="body2"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
