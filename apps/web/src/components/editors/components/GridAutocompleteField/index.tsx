import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  Box,
  styled,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { find } from 'lodash';

import { Option } from '~/components/Autocomplete';

type GridAutocompleteFieldProps<
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = Omit<
  MuiAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
  'defaultValue' | 'value' | 'renderInput' | 'disabled'
> & {
  autoFocus?: boolean;
  error?: boolean;
  helperText?: string;
  defaultValue?: Option | string | number | null;
  value?: Option | string | number | null;
  label?: string;
  placeholder?: string;
  inputRef?: TextFieldProps['inputRef'];
};

const GridAutocompleteField = styled((props: GridAutocompleteFieldProps) => {
  const { options } = props;
  const { autoFocus, error, helperText, label, placeholder, readOnly, value, defaultValue, inputRef, ...restProps } =
    props;

  return (
    <MuiAutocomplete
      renderOption={(props, option) => (
        <Box component="li" sx={{ fontSize: 13 }} {...props} key={option.value}>
          {option.text}
        </Box>
      )}
      {...restProps}
      defaultValue={
        typeof defaultValue === 'string' || typeof defaultValue === 'number'
          ? find(options, (o) => o.value === defaultValue) || null
          : defaultValue
      }
      value={
        typeof value === 'string' || typeof value === 'number' ? find(options, (o) => o.value === value) || null : value
      }
      readOnly={readOnly}
      getOptionLabel={(option) => option.text}
      openOnFocus={true}
      selectOnFocus={true}
      renderInput={(params) => <TextField {...params} autoFocus={autoFocus} variant="standard" />}
    />
  );
})(() => ({}));

export default GridAutocompleteField;
