'use client';

import * as React from 'react';
import { useBoolean } from '@/hooks/utils/use-boolean';
import { YoutubeLightboxContext, YoutubeLightboxContextType } from './youtube-lightbox-context';
import { YoutubeLightbox } from './youtube-lightbox';

export function YoutubeLightboxProvider({ children }: { children: React.ReactNode }) {
  // ─── State ───────────────────────────────────────────────────────────
  const lightboxDialog = useBoolean(false);
  const [data, setData] = React.useState<string>('');

  // ─── Callbacks ───────────────────────────────────────────────────────
  const handleOpen = React.useCallback(
    (videoId: string) => {
      const lightboxDialogOpen = lightboxDialog.onTrue;
      setData(videoId);
      lightboxDialogOpen();
    },
    [lightboxDialog.onTrue],
  );

  const handleExited = React.useCallback(() => {
    setData('');
  }, []);

  // ─── Context Value ───────────────────────────────────────────────────
  const contextValue = React.useMemo<YoutubeLightboxContextType>(
    () => ({
      close: lightboxDialog.onFalse,
      open: handleOpen,
    }),
    [handleOpen, lightboxDialog.onFalse],
  );

  return (
    <YoutubeLightboxContext.Provider value={contextValue}>
      {children}
      <React.Suspense fallback={null}>
        <YoutubeLightbox
          onClose={lightboxDialog.onFalse}
          onExited={handleExited}
          open={lightboxDialog.value}
          videoId={data}
        />
      </React.Suspense>
    </YoutubeLightboxContext.Provider>
  );
}
