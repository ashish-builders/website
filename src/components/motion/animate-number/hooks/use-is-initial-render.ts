'use client';

import * as React from 'react';

function useIsInitialRender() {
  /**
   * If `initial={false}` we only want to pass this to components in the first render.
   */
  const isInitialRender = React.useRef(true);
  React.useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

export { useIsInitialRender };
