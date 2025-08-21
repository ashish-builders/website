import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import dayjs from 'dayjs';
import { Link } from '@/components/link/link';

type PostMetaProps = {
  category?: string;
  categorySlug?: string;
  publishedAt: string;
  readMinutes?: null | string;
};

export function PostMeta(props: PostMetaProps) {
  const { category, categorySlug, publishedAt, readMinutes } = props;

  const publishedOn = React.useMemo(() => {
    if (!publishedAt) {
      return '';
    }
    const publishedOnDate = dayjs(publishedAt);
    if (!publishedOnDate.isValid()) {
      return '';
    }
    return publishedOnDate.format('DD MMM, YYYY');
  }, [publishedAt]);

  if (!publishedOn && !category) {
    return null;
  }

  return (
    <Box
      alignItems="center"
      aria-label="Post metadata"
      color="text.secondary"
      component="section"
      display="flex"
      flexWrap="wrap"
      gap={2}
      itemType="https://schema.org/BlogPosting"
      itemScope
    >
      {readMinutes ? (
        <Box alignItems="center" display="flex" gap={0.5}>
          <ScheduleIcon aria-hidden="true" sx={{ fontSize: 16 }} />
          <Typography
            aria-label="Estimated read time"
            color="text.secondary"
            component="span"
            itemProp="timeRequired"
            variant="body2"
          >
            {readMinutes}
          </Typography>
        </Box>
      ) : null}
      {publishedOn ? (
        <Box alignItems="center" display="flex" gap={0.5}>
          <CalendarTodayIcon aria-hidden="true" sx={{ fontSize: 18 }} />
          <time
            aria-label="Published date"
            dateTime={publishedAt}
            itemProp="datePublished"
            style={{ color: 'inherit', fontSize: 'inherit' }}
          >
            {publishedOn}
          </time>
        </Box>
      ) : null}
      {category ? (
        <Box alignItems="center" display="flex" gap={0.5}>
          <FolderOpenIcon aria-hidden="true" sx={{ fontSize: 16, mr: 0.5 }} />
          {categorySlug ? (
            <Link
              style={{
                color: 'inherit',
                fontSize: 'inherit',
              }}
              aria-label="Category"
              href={`/blog/category/${categorySlug}`}
              itemProp="articleSection"
              prefetch={false}
              underline="none"
            >
              {category}
            </Link>
          ) : (
            <span
              aria-label="Category"
              itemProp="articleSection"
              style={{ color: 'inherit', fontSize: 'inherit' }}
            >
              {category}
            </span>
          )}
        </Box>
      ) : null}
    </Box>
  );
}
