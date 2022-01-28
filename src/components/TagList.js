import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Checkbox,
  ListItemText,
} from '@mui/material';

import { Cancel as CancelIcon } from '@mui/icons-material';

import useTags from '../hooks/useTags';

const dropdownMenuProps = {
  style: {
    maxHeight: 300,
  },
};

const TagList = props => {
  const allTags = useTags();

  const dispatch = useDispatch();
  const tags = useSelector(({ tags: t = [] }) => t);

  const handleChange = event => {
    if (event.target.value) {
      dispatch({ type: 'TAG_DEFINE', value: event.target.value });
    }
  };

  const renderSelectValue = React.useCallback(
    selected => (
      <Box sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {!selected.length && (
          <Chip label="" sx={{ opacity: 0 }} size="small" />
        )}

        {selected.map(value => (
          <Chip
            key={value}
            label={allTags[value]?.label || value}
            size="small"
            sx={{ mr: 0.5 }}
            clickable
            onDelete={() => dispatch({ type: 'TAG_TOGGLE', value })}
            deleteIcon={(
              <CancelIcon onMouseDown={event => event.stopPropagation()} />
            )}
          />
        ))}
      </Box>
    ),
    [allTags, dispatch],
  );

  return (
    <Box {...props}>
      <FormControl fullWidth size="small">
        <InputLabel id="tags-selection-label">Filtrer…</InputLabel>
        <Select
          labelId="tags-selection-label"
          id="tags-selection"
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput id="tags-selection-input" label="Filter…" />}
          displayEmpty
          renderValue={renderSelectValue}
          MenuProps={dropdownMenuProps}
        >
          {Object.entries(allTags).map(([key, properties]) => (
            <MenuItem key={key} value={key} dense>
              <Checkbox checked={tags.includes(key)} size="small" />
              <ListItemText primary={properties.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TagList;
