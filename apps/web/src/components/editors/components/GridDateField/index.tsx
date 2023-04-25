import { styled } from '@mui/material';
import { DateField as MuiDateField, DateFieldProps as MuiDateFieldProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

type GridDateFieldProps = Omit<MuiDateFieldProps<Dayjs>, 'disabled'> & {
  error?: boolean;
  helperText?: string;
  title?: string;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
};

const GridDateField = styled((props: GridDateFieldProps) => {
  const readOnly = props.readOnly || false;
  let { error, helperText, title, label, placeholder, fullWidth = false, ...restProps } = props;

  return (
    <MuiDateField<Dayjs>
      {...restProps}
      readOnly={readOnly}
      slotProps={{
        textField: {
          error,
          helperText,
          title,
          label,
          placeholder,
          fullWidth,
          variant: 'standard',
        },
      }}
    />
  );
})(() => ({}));

export default GridDateField;
