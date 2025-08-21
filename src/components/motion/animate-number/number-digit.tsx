import {
  motion,
  useIsPresent,
  animate,
  MotionConfigContext,
  type HTMLMotionProps,
} from 'motion/react';
import * as React from 'react';
import { useIsInitialRender } from './hooks/use-is-initial-render';
import { maskHeight } from './mask';
import { getWidthInEm } from './utils/get-width-in-ems';
import { targetWidths } from './utils/target-widths';

const digitFillStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',
};

interface NumberDigitProps extends Omit<HTMLMotionProps<'span'>, 'value'> {
  initialValue?: number;
  value: number;
}

function NumberDigitComponent(
  { value: _value, initialValue: _initialValue = _value, ...rest }: NumberDigitProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  const { transition } = React.useContext(MotionConfigContext);
  const initialValue = React.useRef(_initialValue).current; // non-reactive, like React's defaultValue props
  const isInitialRender = useIsInitialRender();

  const scope = React.useRef<HTMLSpanElement>(null);
  const internalRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref, () => internalRef.current!, []);

  const numberRefs = React.useRef<(HTMLSpanElement | null)[]>(new Array(10));

  // Don't use a normal exit animation for this because we want it to trigger a resize.
  const isPresent = useIsPresent();
  const value = isPresent ? _value : 0;

  // Set the width to the width of the initial value immediately, so on the next render we animate from that.
  React.useLayoutEffect(() => {
    if (!scope.current || !numberRefs.current[initialValue]) {
      return;
    }
    scope.current.style.width = getWidthInEm(numberRefs.current[initialValue]!);
  }, [initialValue]);

  // Animate the y-position in a layout effect, because it's a FLIP animation.
  const prevValue = React.useRef(_initialValue);
  React.useLayoutEffect(() => {
    if (!scope.current || value === prevValue.current) {
      return () => {};
    }

    const box = scope.current.getBoundingClientRect();
    const refBox = internalRef.current?.getBoundingClientRect();

    // Add the offset between the top of the inner and outer elements to account for
    // any current animation state.
    const initialY = box.height * (value - prevValue.current) + (box.top - (refBox?.top || 0));

    animate(scope.current, { y: [initialY, 0] }, transition);

    return () => {
      prevValue.current = value;
    };
  }, [value, transition]);

  const [width, setWidth] = React.useState<string | undefined>();

  React.useEffect(() => {
    // Skip setting the width if this is the first render and it's not going to animate.
    if (isInitialRender && initialValue === value) {
      return;
    }
    if (!numberRefs.current[value]) {
      return;
    }

    const w = getWidthInEm(numberRefs.current[value]!);

    // Store the target width immediately, so it can be used for the section resize.
    if (internalRef.current) {
      targetWidths.set(internalRef.current, w);
    }

    // Trigger the actual layout animation by causing another render.
    setWidth(w);
  }, [value, isInitialRender, initialValue]);

  const renderNumber = (i: number) => (
    <span
      ref={(r) => {
        numberRefs.current[i] = r;
      }}
      style={{
        display: 'inline-block',
        padding: `calc(${maskHeight}/2) 0`,
      }}
      key={i}
    >
      {i}
    </span>
  );

  return (
    <motion.span
      {...rest}
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        width,
      }}
      data-state={isPresent ? undefined : 'exiting'}
      layout="position"
      ref={internalRef}
    >
      <span
        style={{
          alignItems: 'center',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
        ref={scope}
      >
        {value !== 0 && (
          <span
            style={{
              ...digitFillStyle,
              bottom: `100%`,
              left: 0,
            }}
          >
            {new Array(value).fill(null).map((_, i) => renderNumber(i))}
          </span>
        )}
        {renderNumber(value)}
        {value !== 9 && (
          <span
            style={{
              ...digitFillStyle,
              left: 0,
              top: `100%`,
            }}
          >
            {new Array(9 - value).fill(null).map((_, i) => renderNumber(value + i + 1))}
          </span>
        )}
      </span>
    </motion.span>
  );
}

const NumberDigit = React.forwardRef(NumberDigitComponent);

if (process.env.NODE_ENV !== 'production') {
  NumberDigit.displayName = 'NumberDigit';
}

export { NumberDigit };
