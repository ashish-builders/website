'use client';

import * as React from 'react';

/**
 * Custom hook to manage a boolean state with utility functions to set it to true, false, or toggle its value.
 *
 * @param {boolean} [defaultValue=false] - The initial value of the boolean state.
 *
 * @example
 * const { value, onTrue, onFalse, onToggle } = useBoolean(false);
 *
 * return (
 *   <div>
 *     <p>Value: {value.toString()}</p>
 *     <button onClick={onTrue}>Set True</button>
 *     <button onClick={onFalse}>Set False</button>
 *     <button onClick={onToggle}>Toggle</button>
 *   </div>
 * );
 */
export type UseBooleanReturn = {
  onFalse: () => void;
  onToggle: () => void;
  onTrue: () => void;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
};

export function useBoolean(defaultValue: boolean = false): UseBooleanReturn {
  const [value, setValue] = React.useState(defaultValue);

  const onTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  const onToggle = React.useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return {
    onFalse,
    onToggle,
    onTrue,
    setValue,
    value,
  };
}
