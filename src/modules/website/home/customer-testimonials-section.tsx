'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useTheme } from '@mui/material/styles';
import { Fade } from '@/components/motion/fade/fade';
import testimonials from '@/data/testimonials';
import { CommentCard } from './customer-testimonials/comment-card';
import { VideoCard } from './customer-testimonials/video-card';
import { Author } from './customer-testimonials/author';
import 'swiper/css';
import 'swiper/css/pagination';

export function CustomerTestimonailsSection() {
  const theme = useTheme();

  // Swiper initialization state
  const [swiperReady, setSwiperReady] = React.useState(false);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Box aria-label="Customer testimonials" component="section" role="region" sx={{ pt: 8 }}>
      <Fade>
        <Container maxWidth="lg">
          <Swiper
            breakpoints={{
              [theme.breakpoints.values.md]: {
                slidesPerView: 3,
              },
              [theme.breakpoints.values.sm]: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            style={
              {
                '--swiper-pagination-color': (theme.vars || theme).palette.quaternary.main,
                paddingBottom: theme.spacing(3),
              } as React.CSSProperties
            }
            a11y={{ enabled: true }}
            centeredSlides={false}
            modules={[Pagination, A11y]}
            onInit={() => setSwiperReady(true)}
            slidesPerView={1}
            spaceBetween={32}
            autoplay
            grabCursor
            loop
          >
            {swiperReady &&
              testimonials.map((testimonial) => {
                let testimonialContent = null;
                if (testimonial.youtubeVideoId) {
                  testimonialContent = (
                    <VideoCard
                      aria-label={`Testimonial video by ${testimonial.name}`}
                      height={300}
                      videoId={testimonial.youtubeVideoId}
                    />
                  );
                } else if (testimonial.comment) {
                  const featuredImage = testimonial.image;

                  testimonialContent = (
                    <CommentCard
                      comment={testimonial.comment}
                      height={300}
                      image={featuredImage}
                      name={testimonial.name}
                    />
                  );
                }
                return (
                  <SwiperSlide
                    aria-label={`Testimonial slide for ${testimonial.name}`}
                    itemType="https://schema.org/Review"
                    key={testimonial.name}
                    role="group"
                    itemScope
                  >
                    <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
                      {testimonialContent}
                      <Author designation={testimonial.designation} name={testimonial.name} />
                    </Stack>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Container>
      </Fade>
    </Box>
  );
}
