import LockIcon from '@mui/icons-material/Lock';
import { styled, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = Omit<MuiTextFieldProps, 'disabled'> & {
  readOnly?: boolean;
};

const TextField = styled((props: TextFieldProps) => {
  const readOnly = props.readOnly || false;
  const endAdornment = props.InputProps?.endAdornment;
  const InputProps: MuiTextFieldProps['InputProps'] = {
    ...props.InputProps,
    readOnly,
    endAdornment: readOnly ? <LockIcon htmlColor="#78909c" sx={{ fontSize: 16 }} /> : endAdornment,
  };
  return <MuiTextField focused variant="outlined" {...props} InputProps={InputProps} />;
})(({ theme, multiline }) => ({
  '& label.Mui-focused': {
    top: 3,
    fontSize: 13,
    lineHeight: '20px',
    letterSpacing: '0.4px',
    color: '#78909c',
    '&.Mui-error': {
      color: '#d32f2f',
    },
  },

  '& .MuiInputBase-input': {
    height: multiline ? 'auto' : 18,
    padding: '9px 14px',
  },

  '& .MuiInputBase-inputMultiline': {
    padding: 0,
  },

  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f1f3f4',
    height: multiline ? 'auto' : 36,
    fontSize: 13,
    '&.Mui-focused fieldset': {
      border: '1px solid #f1f3f4',
    },
    '&.Mui-error fieldset': {
      border: '1px solid #d32f2f',
    },
  },

  '& .MuiFormHelperText-root': {
    marginLeft: 0,
  },
}));

export default TextField;
