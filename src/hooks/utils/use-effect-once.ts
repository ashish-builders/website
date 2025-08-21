import useEventCallback from '@mui/utils/useEventCallback';
import * as React from 'react';

/**
 * A custom hook that runs an effect only once, regardless of dependency changes.
 * Useful for initialization logic that should only run once.
 *
 * @param effect - The effect function to run once
 */
export function useEffectOnce(effect: () => (() => void) | void) {
  const hasRun = React.useRef<boolean>(false);
  const callback = useEventCallback(() => effect());

  React.useEffect(() => {
    if (hasRun.current) {
      return () => {};
    }
    hasRun.current = true;
    const cleanup = callback();
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, [callback]);
}
