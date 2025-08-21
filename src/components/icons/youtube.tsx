'use client';
import * as React from 'react';

export interface YoutubeProps extends React.SVGProps<SVGSVGElement> {
  /**
   * If true, uses YouTube red (#ff0033) as the fill color. If false, uses currentColor.
   * @default false
   */
  brandColor?: boolean;
}

function YoutubeComponent(
  { brandColor = false, ...props }: YoutubeProps,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg fill="none" ref={ref} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M256.971 106.668c12.12.02 134.11.444 165.706 8.901 18.368 4.876 32.811 19.29 37.739 37.731 8.56 31.948 8.903 97.107 8.917 102.268v.653c-.014 5.177-.356 70.53-8.917 102.479-4.928 18.441-19.37 32.855-37.739 37.73-32.593 8.725-161.38 8.9-166.519 8.903h-.316c-5.14-.003-133.948-.178-166.562-8.902-18.347-4.876-32.81-19.29-37.717-37.731-8.54-31.948-8.882-97.302-8.896-102.479v-.653c.014-5.161.356-70.32 8.896-102.268 4.906-18.441 19.37-32.855 37.717-37.73 31.616-8.458 153.626-8.881 165.748-8.902Zm-44.619 86.27v126.123l111.53-63.167-111.53-62.955Z"
        fill={brandColor ? '#ff0033' : 'currentColor'}
        fillRule="evenodd"
      />
    </svg>
  );
}
export const Youtube = React.forwardRef(YoutubeComponent);
