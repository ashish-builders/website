'use client';
import * as React from 'react';

export interface InstagramProps extends React.SVGProps<SVGSVGElement> {
  /**
   * If true, uses the Instagram gradient as the fill. If false, uses currentColor.
   * @default false
   */
  brandColor?: boolean;
}

function InstagramComponent(
  { brandColor = false, ...props }: InstagramProps,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg fill="none" ref={ref} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="ig-gradient"
          x1="0"
          x2="32"
          y1="0"
          y2="32"
        >
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="30%" stopColor="#dd2a7b" />
          <stop offset="60%" stopColor="#8134af" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <path
        d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
        fill={brandColor ? 'url(#ig-gradient)' : 'currentColor'}
      />
      <path
        d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zm5.7-10.484a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
        fill={brandColor ? 'url(#ig-gradient)' : 'currentColor'}
      />
    </svg>
  );
}
export const Instagram = React.forwardRef(InstagramComponent);
