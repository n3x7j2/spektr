import { ComponentsProps, styled, Tab } from '@mui/material';
import { LinkProps } from 'next/link';

const StyledTab = styled((props: ComponentsProps['MuiTab'] & LinkProps) => <Tab {...props} />)({
  color: '#78909c',
  backgroundColor: '#f1f3f4',
  margin: '10px 0',
  padding: 0,
  minHeight: 'auto',
  minWidth: 130,
  fontSize: 11,
  lineHeight: '16px',
  fontWeight: 700,
  letterSpacing: '0.4px',
  '&.Mui-selected': {
    zIndex: 1,
    color: '#78909c',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24)',
    borderRadius: 4,
  },
  '&:first-of-type': {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-of-type': {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default StyledTab;
