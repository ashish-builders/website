import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface AuthorProps {
  designation: string;
  name: string;
}

export function Author(props: AuthorProps) {
  const { designation, name } = props;
  return (
    <Stack
      aria-label={`Testimonial author: ${name}, ${designation}`}
      component="div"
      direction="column"
      itemType="https://schema.org/Person"
      spacing={0}
      sx={{ mt: 1 }}
      itemScope
    >
      <Typography component="h3" fontWeight={500} itemProp="name" variant="body1">
        {name}
      </Typography>
      <Typography color="text.secondary" itemProp="jobTitle" variant="body2">
        {designation}
      </Typography>
    </Stack>
  );
}
