import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';
import { rem } from '@spektr/common';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    's-outlined': true;
    's-contained': true;
  }
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 13,
    subtitle1: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '16px',
      letterSpacing: '1.5px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '16px',
      letterSpacing: '1.5px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#3e4345',
          backgroundColor: '#f7f9fa',
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
          {
            WebkitBoxShadow: '0 0 0 30px #f1f3f4 inset !important',
          },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: 's-outlined' },
          style: {
            color: '#78909c',
            border: '1px solid #e3e5e6',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 13,
            lineHeight: '22px',
            letterSpacing: '0.1px',
          },
        },
        {
          props: { variant: 's-contained' },
          style: {
            backgroundColor: '#069697',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: 13,
            lineHeight: '22px',
            letterSpacing: '0.1px',

            '&:hover': {
              backgroundColor: '#069697',
            },
          },
        },
      ],
    },
  },
});

export default theme;
