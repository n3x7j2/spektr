import DateIcon from '@mui/icons-material/DateRange';
import LockIcon from '@mui/icons-material/Lock';
import { styled } from '@mui/material';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

type DatePickerProps = Omit<MuiDatePickerProps<Dayjs>, 'disabled'> & {
  error?: boolean;
  helperText?: string;
  title?: string;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
};

const DatePicker = styled((props: DatePickerProps) => {
  const readOnly = props.readOnly || false;
  let { error, helperText, title, label, placeholder, fullWidth = false, ...restProps } = props;

  return (
    <MuiDatePicker<Dayjs>
      {...restProps}
      slotProps={{
        textField: {
          error,
          helperText,
          title,
          label,
          placeholder,
          fullWidth,
          focused: true,
          variant: 'outlined',
          sx: {
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

            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f1f3f4',
              height: 36,
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
          },
        },
        openPickerButton: { disableRipple: true },
        openPickerIcon: { htmlColor: '#78909c', sx: { fontSize: 16 } },
      }}
      slots={{
        openPickerIcon: readOnly ? LockIcon : DateIcon,
      }}
    />
  );
})(() => ({
  '& .MuiIconButton-root': {
    paddingRight: 12,
  },
}));

export default DatePicker;
