'use client';

import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { getImageProps, ImageProps } from 'next/image';
import * as React from 'react';
import { useIsInitialRender } from '@/components/motion/animate-number/hooks/use-is-initial-render';
import { useTheme } from '@mui/material/styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade } from '@/components/motion/fade/fade';
import { type Swiper as SwiperType } from 'swiper/types';
import { safeImageUri } from '@/lib/image';
import { SlideTwo } from './hero-section-slides/slide-two';
import { SlideOne } from './hero-section-slides/slide-one';
import { SlideThree } from './hero-section-slides/slide-three';

type Banner = {
  alt: string;
  content?: React.ReactNode;
  desktop: string;
  mobile: string;
};

const banners: Banner[] = [
  {
    alt: 'Building Dreams on Trust',
    content: <SlideOne />,
    desktop: '/assets/home/hero-section/1-desktop.webp',
    mobile: '/assets/home/hero-section/1-mobile.webp',
  },
  {
    alt: 'Prakash Nilayam - Live Spaciously, Live Green',
    content: <SlideTwo />,
    desktop: '/assets/home/hero-section/2-desktop.webp',
    mobile: '/assets/home/hero-section/2-mobile.webp',
  },
  {
    alt: 'Vivanta - A Premium Life, Nestled in Nature',
    content: <SlideThree />,
    desktop: '/assets/home/hero-section/3-desktop.webp',
    mobile: '/assets/home/hero-section/3-mobile.webp',
  },
];

const getBannerUri = (options: {
  alt: string;
  desktop: string;
  mobile: string;
  priority: boolean;
}) => {
  const desktopSafeUri = safeImageUri(options.desktop);
  const mobileSafeUri = safeImageUri(options.mobile);
  if (!desktopSafeUri || !mobileSafeUri) {
    return null;
  }

  const imageProps: Omit<ImageProps, 'src'> = {
    alt: options.alt,
    fetchPriority: options.priority ? 'high' : 'auto',
    fill: true,
    priority: options.priority,
    quality: 100,
    style: {
      objectFit: 'cover',
    },
  };

  const desktop = getImageProps({
    src: options.desktop,
    ...imageProps,
  });

  const mobile = getImageProps({
    src: options.mobile,
    ...imageProps,
  });

  return {
    desktop,
    mobile,
  };
};

export function HeroSection() {
  const theme = useTheme();

  // ─── State ───────────────────────────────────────────────────────────
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isInitialRender = useIsInitialRender();

  // ─── Callbacks ───────────────────────────────────────────────────────
  const handleSlideChange = React.useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  // ─── Calculation ─────────────────────────────────────────────────────
  const bannersWithImages = React.useMemo(
    () =>
      banners.map((banner, index) => {
        return {
          content: banner.content,
          images: getBannerUri({
            alt: banner.alt,
            desktop: banner.desktop,
            mobile: banner.mobile,
            priority: index === 0,
          }),
        };
      }),
    [],
  );

  return (
    <Box
      sx={{
        '& .swiper-pagination-bullet': {
          border: '2px solid var(--mui-palette-quaternary-main)',
        },
      }}
      component="section"
    >
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={
          {
            '--swiper-pagination-bullet-border-radius': '4px',
            '--swiper-pagination-bullet-inactive-color': 'transparent',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-width': '36px',
            '--swiper-pagination-color': 'var(--mui-palette-quaternary-main)',
            height: '100%',
          } as React.CSSProperties
        }
        modules={[Pagination, Autoplay]}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        loop
      >
        {bannersWithImages
          .filter((banner) => !!banner.images)
          .map((banner, index) => (
            <SwiperSlide inert={index !== activeIndex} key={index}>
              <Box>
                <Box
                  sx={{
                    isolation: 'isolate',
                    minHeight: 600,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      position: 'absolute',
                      width: '100%',
                      zIndex: -1,
                    }}
                    component="picture"
                  >
                    <source
                      media={`(min-width: ${theme.breakpoints.values.sm}px)`}
                      srcSet={banner.images?.desktop.props.srcSet}
                    />
                    <source
                      media={`(min-width: ${theme.breakpoints.values.xs}px)`}
                      srcSet={banner.images?.mobile.props.srcSet}
                    />
                    <Box component="img" {...banner.images?.mobile.props} />
                  </Box>
                  <Fade once={false} skipAnimation={index === 0 && isInitialRender}>
                    {banner.content}
                  </Fade>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
