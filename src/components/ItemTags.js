import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Chip } from '@mui/material';

import useTags from '../hooks/useTags';

const ItemTags = ({ tags = [] }) => {
  const allTags = useTags();
  const dispatch = useDispatch();

  return (
    <Box>
      {tags.map(({ value }) => (
        <Chip
          key={value}
          label={allTags[value]?.label || value}
          size="small"
          onClick={event => {
            event.preventDefault();
            dispatch({ type: 'TAG_TOGGLE', payload: value });
          }}
        />
      ))}
    </Box>
  );
};

export default ItemTags;
