import { ComponentsProps, styled, Tab } from '@mui/material';
import { LinkProps } from 'next/link';

const StyledTab = styled((props: ComponentsProps['MuiTab'] & LinkProps) => <Tab {...props} />)({
  color: '#78909c',
  margin: 0,
  padding: 0,
  minHeight: 'auto',
  minWidth: 100,
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,
  letterSpacing: '0.4px',
  textTransform: 'none',
  '&.Mui-selected': {
    zIndex: 1,
    color: '#78909c',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24)',
    fontWeight: 700,
  },
});

export default StyledTab;
