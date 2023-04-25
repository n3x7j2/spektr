import LockIcon from '@mui/icons-material/Lock';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps, styled } from '@mui/material';
import { useEffect, useState } from 'react';

import TextField from '../TextField';

type CheckboxProps = Omit<
  MuiCheckboxProps,
  'sx' | 'disabled' | 'disableRipple' | 'disableFocusRipple' | 'disableTouchRipple'
> & {
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  label?: string;
};

const Checkbox = styled((props: CheckboxProps) => {
  const { error, helperText, label, fullWidth = false, onChange, ...restProps } = props;
  const readOnly = props.readOnly || false;

  const [value, setValue] = useState(props.checked || props.defaultChecked ? 'Yes' : 'No');

  const handleChange: CheckboxProps['onChange'] = (event, checked) => {
    setValue(checked ? 'Yes' : 'No');
    onChange && onChange(event, checked);
  };

  useEffect(() => {
    setValue(props.checked || props.defaultChecked ? 'Yes' : 'No');
  }, [props.checked, props.defaultChecked]);

  const InputProps = {
    readOnly,
    endAdornment: readOnly ? (
      <LockIcon htmlColor="#78909c" sx={{ fontSize: 18 }} />
    ) : (
      <MuiCheckbox
        size="small"
        disableRipple
        sx={{ padding: 0, '& .MuiSvgIcon-root': { fontSize: 16 } }}
        {...restProps}
        onChange={handleChange}
      />
    ),
  };
  return (
    <TextField
      focused
      variant="outlined"
      value={value}
      label={label}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      InputProps={InputProps}
    />
  );
})(() => ({}));

export default Checkbox;
