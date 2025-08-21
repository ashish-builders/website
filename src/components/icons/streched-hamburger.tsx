'use client';
import * as React from 'react';

function StretchedHamburgerComponent(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg fill="none" ref={ref} viewBox="0 0 65 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M58.45 11.861H8.453v1h49.996v-1ZM58.45 3.861H8.453v1h49.996v-1ZM58.45 19.86H8.453v1h49.996v-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
const StretchedHamburger = React.forwardRef(StretchedHamburgerComponent);
export default StretchedHamburger;
