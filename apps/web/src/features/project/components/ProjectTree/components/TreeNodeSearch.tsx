import { Search as SearchIcon } from '@mui/icons-material';
import { OutlinedInput, OutlinedInputProps, styled } from '@mui/material';
import React from 'react';

const SearchField = styled((props: OutlinedInputProps) => (
  <OutlinedInput
    size="small"
    sx={{ borderRadius: 8, fontSize: 13, height: '32px' }}
    placeholder="Search..."
    startAdornment={<SearchIcon sx={{ fontSize: 18 }} htmlColor="#78909c" />}
    {...props}
  />
))({
  '& .MuiOutlinedInput-input': {
    marginLeft: 8,
  },
});

export default SearchField;
