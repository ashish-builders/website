'use client';
import * as React from 'react';

function CircularArrowRightComponent(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg fill="none" ref={ref} viewBox="0 0 74 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M52.54 37.759c9.809 0 17.76-7.952 17.76-17.76 0-9.809-7.951-17.76-17.76-17.76-9.809 0-17.76 7.951-17.76 17.76 0 9.808 7.951 17.76 17.76 17.76Z"
        opacity="0.5"
        stroke="#C28562"
      />
      <path
        d="M46.466 3.311c-9.217 3.355-14.97 13.546-11.615 22.763 3.355 9.217 13.546 14.97 22.763 11.615 9.217-3.355 14.97-13.547 11.615-22.764C65.874 4.708 55.683-.044 46.466 3.311Z"
        stroke="#C28562"
        strokeDasharray="150 150"
      />
      <path
        d="m49.525 14.265-.627.779 5.583 4.497H6.444v1h48.02l-5.563 4.413.621.783 7.178-5.693-7.175-5.779Z"
        fill="#C28562"
      />
    </svg>
  );
}

export const CircularArrowRight = React.forwardRef(CircularArrowRightComponent);
