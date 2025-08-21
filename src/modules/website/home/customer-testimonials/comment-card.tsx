import { Image } from '@/components/image/image';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import * as React from 'react';
import Box from '@mui/material/Box';

/**
 * Adjusts the height of a spacer element to properly position an image alongside text content
 * @param spacer - The HTML div element that acts as a spacer
 */
function sizeSpacer(spacer: HTMLDivElement) {
  if (!spacer) {
    return;
  }
  // Initialize spacer height to zero
  spacer.style.height = '0px';

  // Get the parent container that holds the spacer and other elements
  const container = spacer.parentNode as HTMLElement | null;
  if (!container) {
    return;
  }

  // Find the image element (assuming it's the next sibling after the spacer)
  const img = (spacer.nextElementSibling || spacer.nextSibling) as HTMLElement | null;
  if (!img) {
    return;
  }

  // Get all children of the container
  const children = Array.from(container.children);
  // Get the last content node in the container (likely text content)
  const lastContentNode = children[children.length - 1] as HTMLElement;
  if (!lastContentNode) {
    return;
  }

  // Calculate maximum available height for the spacer
  // (container height minus image height)
  const h = Math.max(0, container.clientHeight - img.clientHeight);
  let height = h;
  spacer.style.height = `${height}px`;

  // Fine-tune the spacer height to ensure the image doesn't extend beyond the text content
  // This loop decreases height until the bottom of the image aligns with the bottom of the content
  while (
    height > 0 &&
    img.getBoundingClientRect().bottom > lastContentNode.getBoundingClientRect().bottom
  ) {
    height -= 1;
    spacer.style.height = `${height}px`;
  }

  // If we've gone too far (text extends below image), increase height by 1px
  if (lastContentNode.getBoundingClientRect().bottom > img.getBoundingClientRect().bottom) {
    height += 1;
    spacer.style.height = `${height}px`;
  }
}

export interface CommentCardProps {
  blurDataUrl?: null | string;
  comment: string;
  height?: number | string;
  image?: null | string;
  name: string;
}

export function CommentCard(props: CommentCardProps) {
  const { blurDataUrl, comment, height, image, name } = props;
  const spacerRef = React.useRef<HTMLDivElement>(null);
  const resizeObserverRef = React.useRef<null | ResizeObserver>(null);

  const handleSpacerResize = React.useCallback(() => {
    if (spacerRef.current) {
      sizeSpacer(spacerRef.current);
    }
  }, []);

  React.useEffect(() => {
    handleSpacerResize();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', handleSpacerResize);
      window.addEventListener('orientationchange', handleSpacerResize);
      return () => {
        window.removeEventListener('resize', handleSpacerResize);
        window.removeEventListener('orientationchange', handleSpacerResize);
      };
    }

    // Set up ResizeObserver on the parent container
    const spacer = spacerRef.current;
    if (!spacer) {
      return () => {};
    }
    const container = spacer.parentNode as HTMLElement | null;
    if (!container) {
      return () => {};
    }

    // Observe both the container and the image for size changes
    const img = (spacer.nextElementSibling || spacer.nextSibling) as HTMLElement | null;
    if (!img) {
      return () => {};
    }
    resizeObserverRef.current = new ResizeObserver(() => {
      handleSpacerResize();
    });
    resizeObserverRef.current.observe(container);
    resizeObserverRef.current.observe(img);
    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [handleSpacerResize]);

  return (
    <Card
      sx={{
        backgroundColor: 'common.black',
        color: 'common.white',
        display: 'flex',
        flexDirection: 'column',
        height,
      }}
      aria-label={`Testimonial by ${name}`}
      elevation={0}
      itemType="https://schema.org/Review"
      role="region"
      itemScope
    >
      <CardContent itemProp="reviewBody" sx={{ flexGrow: 1, p: { md: 4, xs: 2 } }}>
        <Box
          sx={{
            float: 'right',
            width: 0,
          }}
          aria-hidden="true"
          ref={spacerRef}
        />
        {image ? (
          <Image
            sx={{
              borderRadius: 2,
              boxSizing: 'border-box',
              clear: 'right',
              float: 'right',
              m: 1.5,
            }}
            alt={name}
            blurDataURL={blurDataUrl || undefined}
            height={122}
            itemProp="image"
            loading="lazy"
            placeholder={blurDataUrl ? 'blur' : 'empty'}
            priority={false}
            quality={100}
            src={image}
            width={122}
          />
        ) : null}
        <Typography itemProp="reviewBody" variant="body1">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
