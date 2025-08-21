'use client';

import { safeImageUri } from '@/lib/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fade } from '@/components/motion/fade/fade';
import { getImageProps, ImageProps } from 'next/image';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { useTheme } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';

function getAdBannerUri() {
  const adBannerUrlDesktop = safeImageUri('/assets/home/ad/banner-desktop.webp');
  const adBannerUrlMobile = safeImageUri('/assets/home/ad/banner-mobile.webp');
  if (!adBannerUrlDesktop || !adBannerUrlMobile) {
    return null;
  }
  const imageProps: Omit<ImageProps, 'src'> = {
    alt: 'Sharing lifestyles creating communities — 1000+ Happy Families',
    fill: true,
    itemProp: 'image',
    itemScope: true,
    itemType: 'https://schema.org/ImageObject',
    loading: 'lazy',
    priority: false,
    quality: 100,
    role: 'img',
    style: {
      objectFit: 'cover',
      pointerEvents: 'auto',
      zIndex: -1,
    },
  };
  const desktop = getImageProps({
    src: adBannerUrlDesktop,
    ...deepmerge(imageProps, {
      style: {
        objectPosition: '20% 0%',
      },
    }),
  });
  const mobile = getImageProps({
    src: adBannerUrlMobile,
    ...deepmerge(imageProps, {
      style: {
        objectPosition: 'bottom center',
      },
    }),
  });
  return {
    desktop,
    mobile,
  };
}

export function AdSection() {
  const theme = useTheme();
  const sectionId = React.useId();

  const adBannerUri = getAdBannerUri();
  if (!adBannerUri) {
    return null;
  }
  return (
    <Box
      aria-labelledby={`${sectionId}-ad-heading`}
      className={`${sectionId}-section`}
      component="section"
      itemType="https://schema.org/Organization"
      role="region"
      itemScope
    >
      <Container maxWidth="lg">
        <Fade>
          <Box
            sx={{
              borderRadius: 4,
              position: 'relative',
              width: '100%',
            }}
          >
            <HoverScale
              sx={{
                borderRadius: 3,
                height: '100%',
                position: 'absolute',
                width: '100%',
                zIndex: -1,
              }}
            >
              <picture>
                <source
                  media={`(min-width: ${theme.breakpoints.values.sm}px)`}
                  srcSet={adBannerUri.desktop.props.srcSet}
                />
                <source
                  media={`(min-width: ${theme.breakpoints.values.xs}px)`}
                  srcSet={adBannerUri.mobile.props.srcSet}
                />
                <CardMedia component="img" {...adBannerUri.mobile.props} />
              </picture>
            </HoverScale>
            <Grid
              sx={{
                color: 'common.white',
              }}
              container
            >
              <Grid
                aria-hidden="true"
                order={{ sm: 1, xs: 2 }}
                size={{ sm: 6, xs: 12 }}
                sx={{ height: { md: 380, xs: 300 }, pointerEvents: 'none' }}
              />
              <Grid alignSelf="center" order={{ sm: 2, xs: 1 }} size={{ sm: 6, xs: 12 }}>
                <Box sx={{ p: { md: 4, xs: 3 } }}>
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      maxWidth: { sm: '100%', xs: 200 },
                      textTransform: 'uppercase',
                    }}
                    color="inherit"
                    component="h2"
                    id={`${sectionId}-ad-heading`}
                    itemProp="slogan"
                    variant="h2"
                  >
                    Shaping LifeStyles,
                    <br />
                    Creating Communities
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <svg fill="none" viewBox="0 0 523 109" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M496.525 104.353H498.74V78.8214H523V76.8236H498.74V51.2925H496.525V76.8236H472.265V78.8214H496.525V104.353Z"
                        fill="white"
                      />
                      <path
                        clipRule="evenodd"
                        d="M307.233 109C334.577 109 350.202 83.406 350.202 54.6507V54.3497C350.202 25.4438 334.577 0 307.233 0C279.89 0 264.265 25.594 264.265 54.3497V54.6507C264.265 83.5565 279.89 109 307.233 109ZM307.384 105.989C281.993 105.989 267.57 81.2986 267.57 54.4998V54.1988C267.57 27.2496 281.843 3.01082 307.083 3.01082C332.473 3.01082 346.897 27.7011 346.897 54.4991V54.8002C346.897 81.7494 332.624 105.989 307.384 105.989ZM413.904 109C441.249 109 456.874 83.406 456.874 54.6507V54.3497C456.874 52.7422 456.825 51.1454 456.729 49.5634H453.404C453.513 51.1973 453.568 52.8446 453.568 54.5002V54.8012C453.568 81.7504 439.295 105.989 414.055 105.989C388.665 105.989 374.241 81.2989 374.241 54.5002V54.1992C374.241 27.2499 388.514 3.01116 413.754 3.01116C420.413 3.01116 426.316 4.71003 431.404 7.69919H437.24C430.866 2.83969 423.039 0 413.904 0C386.561 0 370.936 25.594 370.936 54.3497V54.6507C370.936 83.5565 386.561 109 413.904 109Z"
                        fill="white"
                        fillRule="evenodd"
                      />
                      <path
                        clipRule="evenodd"
                        d="M21.0338 107.194H24.189V1.05423H21.4844L0 10.8399L1.35244 13.7002L21.0338 4.81758V107.194ZM95.7034 109C123.048 109 138.673 83.406 138.673 54.6507V54.3497C138.673 25.4438 123.048 0 95.7034 0C68.36 0 52.735 25.594 52.735 54.3497V54.6507C52.735 83.5565 68.36 109 95.7034 109ZM95.854 105.989C70.4635 105.989 56.0403 81.2986 56.0403 54.4998V54.1988C56.0403 27.2496 70.3133 3.01082 95.5533 3.01082C120.944 3.01082 135.367 27.7011 135.367 54.4991V54.8002C135.367 81.7494 121.094 105.989 95.854 105.989Z"
                        fill="white"
                        fillRule="evenodd"
                      />
                      <path
                        d="M421.487 26.0996V11.0485H424.362V17.1765H428.031V11.0485H430.906V26.0996H428.031V19.8856H424.362V26.0996H421.487Z"
                        fill="white"
                      />
                      <path
                        d="M432.277 26.0996L436.439 10.984H439.336L443.52 26.0996H440.581L439.765 22.9604H435.903L435.109 26.0996H432.277ZM436.59 20.4017H439.079L437.856 15.4563L436.59 20.4017Z"
                        fill="white"
                      />
                      <path
                        d="M444.871 26.0996V11.0485H448.605C451.738 11.0485 453.797 12.8332 453.797 16.1659V16.2089C453.797 19.6491 451.609 21.3477 448.691 21.4553H447.747V26.0996H444.871ZM447.747 18.8321H448.498C450.107 18.8321 450.901 17.8215 450.901 16.2734V16.2519C450.901 14.6178 450.15 13.6717 448.519 13.6932H447.747V18.8321Z"
                        fill="white"
                      />
                      <path
                        d="M455.39 26.0996V11.0485H459.124C462.257 11.0485 464.316 12.8332 464.316 16.1659V16.2089C464.316 19.6491 462.128 21.3477 459.21 21.4553H458.266V26.0996H455.39ZM458.266 18.8321H459.017C460.626 18.8321 461.42 17.8215 461.42 16.2734V16.2519C461.42 14.6178 460.669 13.6717 459.038 13.6932H458.266V18.8321Z"
                        fill="white"
                      />
                      <path
                        d="M468.532 26.0996V20.1652L464.627 11.0485H467.76L469.991 16.8324L472.244 11.0485H475.291L471.407 20.1437V26.0996H468.532Z"
                        fill="white"
                      />
                      <path
                        d="M421.487 45.061V30.01H429.168V32.6976H424.362V36.2669H428.567V38.9546H424.362V45.061H421.487Z"
                        fill="white"
                      />
                      <path
                        d="M428.987 45.061L433.15 29.9455H436.046L440.23 45.061H437.291L436.475 41.9218H432.613L431.819 45.061H428.987ZM433.3 39.3631H435.789L434.566 34.4178L433.3 39.3631Z"
                        fill="white"
                      />
                      <path
                        d="M441.582 45.061V30.01H444.521L447.16 35.8369L449.778 30.01H452.739V45.061H449.928V35.6863L447.16 41.6637H447.117L444.35 35.7293V45.061H441.582Z"
                        fill="white"
                      />
                      <path d="M455.141 45.061V30.01H457.995V45.061H455.141Z" fill="white" />
                      <path
                        d="M460.398 45.061V30.01H463.274V42.3733H467.78V45.061H460.398Z"
                        fill="white"
                      />
                      <path d="M469.453 45.061V30.01H472.306V45.061H469.453Z" fill="white" />
                      <path
                        d="M474.71 45.061V30.01H482.52V32.6761H477.564V36.1594H481.941V38.8256H477.564V42.3948H482.606V45.061H474.71Z"
                        fill="white"
                      />
                      <path
                        d="M487.972 45.2115C486.448 45.2115 484.817 44.6955 483.337 43.2119L485.053 40.9757C485.676 41.5992 486.684 42.5453 487.929 42.5453C488.98 42.5453 489.602 41.8573 489.602 40.9972V40.9757C489.602 40.3737 489.28 39.7716 487.564 38.8041C485.289 37.4495 483.959 36.2884 483.959 34.1597V34.1167C483.959 31.6011 485.804 29.8594 488.487 29.8594C489.774 29.8594 491.34 30.311 492.542 31.6011L490.782 33.8157C490.246 33.2352 489.409 32.5256 488.358 32.5256C487.5 32.5256 486.856 33.0417 486.856 33.8372V33.8587C486.856 34.5253 487.199 35.0843 489.28 36.3529C491.383 37.6645 492.499 38.8256 492.499 40.8252V40.8682C492.499 43.4484 490.482 45.2115 487.972 45.2115Z"
                        fill="white"
                      />
                      <path
                        clipRule="evenodd"
                        d="M200.56 109C227.904 109 243.529 83.406 243.529 54.6507V54.3497C243.529 25.4438 227.904 0 200.56 0C173.217 0 157.592 25.594 157.592 54.3497V54.6507C157.592 83.5565 173.217 109 200.56 109ZM200.711 105.989C175.32 105.989 160.897 81.2986 160.897 54.4998V54.1988C160.897 27.2496 175.17 3.01082 200.41 3.01082C225.801 3.01082 240.224 27.7011 240.224 54.4991V54.8002C240.224 81.7494 225.951 105.989 200.711 105.989Z"
                        fill="white"
                        fillRule="evenodd"
                      />
                    </svg>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
