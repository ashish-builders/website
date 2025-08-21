'use client';

import useMediaQuery from '@mui/material/useMediaQuery'
import { type Breakpoint, useTheme, type Theme } from '@mui/material/styles'

type BreakpointOrNull = Breakpoint | null

/**
 * This component is an extract from https://mui.com/material-ui/react-use-media-query/#system-UseWidth.tsx
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export default function useWidth() {
    const theme: Theme = useTheme()
    const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse()
    return (
        keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key))
            return !output && matches ? key : output
        }, null) || 'xs'
    )
}