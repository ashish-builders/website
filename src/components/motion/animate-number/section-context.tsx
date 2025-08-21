import * as React from 'react';

export interface SectionContextProps {
  justify?: 'center' | 'left' | 'right';
}

export const SectionContext = React.createContext<SectionContextProps>({
  justify: 'left',
});
