'use client';

import * as React from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import clsx from 'clsx';
import { Image } from './image';
import 'photoswipe/style.css';

export type PhotoSwipeProps = {
  classes?: {
    anchor?: string;
    image?: string;
  };
  className?: string;
  images: {
    image: {
      alt?: string;
      height: number;
      src: string;
      width: number;
    } & Pick<React.ComponentProps<typeof Image>, 'blurDataURL' | 'loading' | 'placeholder'>;
    thumbnail?: {
      alt?: string;
      height: number;
      priority?: boolean;
      src: string;
      width: number;
    } & Pick<React.ComponentProps<typeof Image>, 'blurDataURL' | 'loading' | 'placeholder'>;
  }[];
  microdata?: {
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
  };
};

export function PhotoSwipe({ classes, className, images, microdata }: PhotoSwipeProps) {
  const galleryRef = React.useRef<HTMLDivElement>(null);
  const lightboxRef = React.useRef<null | PhotoSwipeLightbox>(null);

  React.useEffect(() => {
    if (galleryRef.current) {
      lightboxRef.current = new PhotoSwipeLightbox({
        children: 'a',
        gallery: galleryRef.current,
        pswpModule: () => import('photoswipe'),
      });
      lightboxRef.current.init();
    }
    const lightbox = lightboxRef.current;

    return () => {
      lightbox?.destroy();
      lightboxRef.current = null;
    };
  }, []);

  return (
    <div
      className={clsx('photoswipe-gallery', className)}
      itemProp={microdata?.itemProp}
      itemScope={microdata?.itemScope}
      itemType={microdata?.itemType}
      ref={galleryRef}
    >
      {images.map((item, index) => (
        <a
          className={classes?.anchor}
          data-pswp-height={item.image.height}
          data-pswp-width={item.image.width}
          href={item.image.src}
          itemType="https://schema.org/ImageObject"
          key={index}
          rel="noopener noreferrer"
          target="_blank"
          itemScope
        >
          <Image
            alt={item.thumbnail?.alt ?? (item.image.alt || 'Image')}
            blurDataURL={item.thumbnail?.blurDataURL ?? item.image.blurDataURL}
            className={classes?.image}
            height={item.thumbnail?.height ?? item.image.height}
            itemProp="contentUrl"
            loading={item.thumbnail?.loading ?? item.image.loading}
            placeholder={item.thumbnail?.placeholder ?? item.image.placeholder}
            priority={item.thumbnail?.priority}
            src={item.thumbnail?.src ?? item.image.src}
            sx={{ cursor: 'pointer' }}
            width={item.thumbnail?.width ?? item.image.width}
          />
        </a>
      ))}
    </div>
  );
}
