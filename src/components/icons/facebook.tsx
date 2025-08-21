'use client';
import * as React from 'react';

export type FacebookProps = React.SVGProps<SVGSVGElement> & {
  /**
   * If true, uses Facebook blue (#0866ff) as the fill color. If false, uses currentColor.
   * @default false
   */
  brandColor?: boolean;
};

function FacebookComponent(
  { brandColor = false, ...props }: FacebookProps,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg fill="none" ref={ref} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m21.95 5.005-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"
        fill={brandColor ? '#0866ff' : 'currentColor'}
      />
    </svg>
  );
}

export const Facebook = React.forwardRef(FacebookComponent);
