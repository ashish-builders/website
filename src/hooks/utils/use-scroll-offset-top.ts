'use client';

import * as React from 'react';

/**
 * Custom hook to manage the offset top state based on scroll position.
 *
 * @param {number} [defaultValue=0] - The offset value at which the state changes.
 *
 * @returns {UseScrollOffsetTopReturn<T>} - An object containing:
 * - `offsetTop`: A boolean indicating whether the scroll position is past the offset.
 * - `elementRef`: A ref object to attach to the element to track its offset.
 *
 * @example
 * 1.Applies to top <header/>
 * const { offsetTop } = useScrollOffsetTop(80);
 *
 * Or
 *
 * 2.Applies to element
 * const { offsetTop, elementRef } = useScrollOffsetTop(80);
 * <div ref={elementRef} />
 */
export type UseScrollOffsetTopReturn<T extends HTMLElement = HTMLElement> = {
  elementRef: React.RefObject<T>;
  offsetTop: boolean;
};

export function useScrollOffsetTop<T extends HTMLElement = HTMLElement>(
  defaultValue: number = 0,
): UseScrollOffsetTopReturn<T> {
  const elementRef = React.useRef<T>(null) as React.RefObject<T>;

  const [offsetTop, setOffsetTop] = React.useState<boolean>(false);

  const handleScroll = React.useCallback(() => {
    const windowScrollY = window.scrollY;

    if (elementRef.current) {
      const elementOffsetTop = elementRef.current.offsetTop;
      // Track element offset top
      setOffsetTop(windowScrollY > elementOffsetTop - defaultValue);
    } else {
      // Track window offset top
      setOffsetTop(windowScrollY > defaultValue);
    }
  }, [defaultValue]);

  React.useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    elementRef,
    offsetTop,
  };
}
