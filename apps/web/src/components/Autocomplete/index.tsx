import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Autocomplete as MuiAutocomplete, AutocompleteProps as MuiAutocompleteProps, Box, styled } from '@mui/material';
import { find } from 'lodash';

import TextField, { TextFieldProps } from '../TextField';

export interface Option {
  value: string | number;
  text: string;
  [key: string]: any;
}

type AutocompleteProps<
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = Omit<
  MuiAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
  'defaultValue' | 'value' | 'renderInput' | 'disabled'
> & {
  error?: boolean;
  helperText?: string;
  defaultValue?: Option | string | number | null;
  value?: Option | string | number | null;
  label?: string;
  placeholder?: string;
  inputRef?: TextFieldProps['inputRef'];
};

const Autocomplete = styled((props: AutocompleteProps) => {
  const { options } = props;
  const { error, helperText, label, placeholder, readOnly, value, defaultValue, inputRef, ...restProps } = props;

  return (
    <MuiAutocomplete
      clearIcon={<ClearIcon htmlColor="#78909c" sx={{ fontSize: 16 }} />}
      popupIcon={<KeyboardArrowDownIcon htmlColor="#78909c" sx={{ fontSize: 18 }} />}
      componentsProps={{
        popper: {
          sx: {
            '& .MuiAutocomplete-listbox': {
              py: 0,
            },
            '& .MuiAutocomplete-noOptions': {
              py: '6px',
              fontSize: 13,
            },
          },
        },
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{ fontSize: 13 }} {...props} key={option.value}>
          {option.text}
        </Box>
      )}
      {...restProps}
      readOnly={readOnly}
      defaultValue={
        typeof defaultValue === 'string' || typeof defaultValue === 'number'
          ? find(options, (o) => o.value === defaultValue) || null
          : defaultValue
      }
      value={
        typeof value === 'string' || typeof value === 'number' ? find(options, (o) => o.value === value) || null : value
      }
      getOptionLabel={(option) => option.text}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          InputProps={{ ...params.InputProps, readOnly }}
          error={error}
          label={label}
          helperText={helperText}
          placeholder={placeholder}
        />
      )}
    />
  );
})(() => ({
  '& .MuiOutlinedInput-root': {
    paddingLeft: 14,
    '&.Mui-readOnly': {
      paddingRight: 14,
    },
    '& .MuiAutocomplete-input': {
      padding: 0,
    },
  },

  '& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
    right: 14,
    top: 'calc(50% - 10px)',
  },
}));

export default Autocomplete;
