import * as React from 'react';
import { YoutubeLightboxPlayer } from '@/components/youtube-lightbox/youtube-lightbox-player';
import Card from '@mui/material/Card';

interface VideoCardProps {
  'aria-label': string;
  height: number | string;
  videoId: string;
}

export function VideoCard(props: VideoCardProps) {
  const { 'aria-label': ariaLabel, height, videoId } = props;
  return (
    <Card aria-label={ariaLabel} itemType="https://schema.org/Review" role="region" itemScope>
      <meta content={`https://www.youtube.com/watch?v=${videoId}`} itemProp="video" />
      <YoutubeLightboxPlayer
        aria-label={ariaLabel}
        borderRadius={1}
        height={height}
        videoId={videoId}
        width="100%"
      />
    </Card>
  );
}
