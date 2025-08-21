import { allowedRemotePatterns } from '@/image';
import warning from 'warning';

export function safeImageUri(uri: null | string | undefined): string {
  if (!uri) {
    return '';
  }

  // Handle data URIs (base64 encoded images)
  if (uri.startsWith('data:')) {
    try {
      // Validate data URI format and ensure it's an image
      const dataUriRegex = /^data:image\/(jpeg|jpg|png|gif|webp|svg\+xml|bmp|ico);base64,/i;
      if (dataUriRegex.test(uri)) {
        return uri;
      }
      warning(false, `Invalid or unsupported data URI format: ${uri.substring(0, 50)}...`);
      return '';
    } catch (error) {
      warning(false, `Invalid data URI: ${error}`);
      return '';
    }
  }

  // Handle relative URLs (starting with / or ./)
  if (uri.startsWith('/') || uri.startsWith('./') || uri.startsWith('../')) {
    return uri;
  }

  try {
    const parsedUrl = new URL(uri);

    // Check if URL matches any allowed remote pattern
    const isAllowed = allowedRemotePatterns.some((pattern) => {
      // Check protocol
      if (pattern.protocol && parsedUrl.protocol !== `${pattern.protocol}:`) {
        return false;
      }

      // Check hostname
      if (pattern.hostname && parsedUrl.hostname !== pattern.hostname) {
        return false;
      }

      // Check pathname pattern
      if (pattern.pathname) {
        const patternRegex = pattern.pathname
          .replace(/\*\*/g, '.*') // ** matches any path segment
          .replace(/\*/g, '[^/]*'); // * matches any single path segment

        const regex = new RegExp(`^${patternRegex}$`);
        if (!regex.test(parsedUrl.pathname)) {
          return false;
        }
      }

      return true;
    });

    return isAllowed ? parsedUrl.toString() : '';
  } catch (error) {
    warning(false, `Invalid URL: ${uri} - ${error}`);
    return '';
  }
}

export function getBlurURL(url: string): string {
  // Replace .jpg, .jpeg, .png, .gif, .webp (case-insensitive) with -blur.jpg
  return url.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '-blur.jpg');
}
