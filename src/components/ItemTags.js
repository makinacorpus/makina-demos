import React from 'react';
import { Box, Chip } from '@mui/material';

import useTags from '../hooks/useTags';

const ItemTags = ({ tags = [] }) => {
  const allTags = useTags();

  return (
    <Box>
      {tags.map(({ value }) => (
        <Chip
          key={value}
          label={allTags[value]?.label || value}
          size="small"
        />
      ))}
    </Box>
  );
};

export default ItemTags;
