'use client';

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import * as React from 'react';
import { isExternal } from '@/lib/url';

// Allow all props from both MuiLink and NextLink
export type LinkProps = Omit<MuiLinkProps, 'component' | 'href'> &
  Omit<NextLinkProps, 'as' | 'href' | 'passHref' | 'prefetch'> & {
    children: React.ReactNode;
    href: NextLinkProps['href'];
    prefetch?: NextLinkProps['prefetch'];
  };

function LinkComponent(
  { children, href, prefetch, ...props }: LinkProps,
  ref: React.Ref<HTMLAnchorElement>,
) {
  if (typeof href === 'string' && isExternal(href)) {
    // Use only MUI Link for external URLs
    return (
      <MuiLink href={href} ref={ref} {...props}>
        {children}
      </MuiLink>
    );
  }
  // Use Next.js Link with MUI Link styling for internal URLs
  return (
    <MuiLink component={NextLink} href={href} prefetch={prefetch} ref={ref} {...props}>
      {children}
    </MuiLink>
  );
}

export const Link = React.forwardRef(LinkComponent);

function LinkNoPrefetchComponent(
  props: Omit<LinkProps, 'prefetch'>,
  ref: React.Ref<HTMLAnchorElement>,
) {
  return <Link ref={ref} {...props} prefetch={false} />;
}

export const LinkNoPrefetch = React.forwardRef(LinkNoPrefetchComponent);
