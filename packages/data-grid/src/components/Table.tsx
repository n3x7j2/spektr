import { VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { styled } from '@mui/material';

const StyledTable = styled(VirtualTable.Table)(({ theme }) => ({
  '&': {
    '.MuiTableRow-root': {
      backgroundColor: '#fff',

      '&:hover': {
        backgroundColor: '#f1f3f4',
        borderRadius: theme.spacing(1),
      },

      '&.TableSelectRow-selected': {
        backgroundColor: '#f1f3f4',

        '& .MuiTableCell-root': {
          fontWeight: 700,
        },
      },

      '&.TableSelectRow-over': {
        backgroundColor: '#cdcdcd',
      },

      '&.TableSelectRow-dragging': {
        backgroundColor: '#f3aa18',

        '& .MuiTableCell-root': {
          color: '#fff',
        },
      },

      '&': {
        '.MuiTableCell-head': {
          lineHeight: '20px',
          color: '#78909c',
          padding: '4px 8px 5px',
          height: 45,

          '&:first-of-type': {
            paddingLeft: '8px',
          },

          '&.TableSelectAllCell-cell': {
            paddingLeft: 0,
          },
        },

        '.MuiTableCell-footer': {
          lineHeight: '20px',
          color: '#78909c',
          padding: '4px 8px 5px',
          height: 45,

          '&:first-of-type': {
            paddingLeft: '8px',
          },

          '&.TableSelectAllCell-cell': {
            paddingLeft: 0,
          },
        },

        '.MuiTableCell-body': {
          padding: '8px',
          height: 45,

          '&:first-of-type': {
            paddingLeft: '8px',
          },

          '&.has-error': {
            border: `1px solid ${theme.palette.error.light}`,
          },
        },

        '.TableEditCell-cell': {
          padding: '0 8px',

          '&:first-of-type': {
            paddingLeft: '8px',
          },

          '.MuiInput-input': {
            height: 30,
            fontSize: 13,
          },
        },

        '.TableSelectCell-checkbox': {
          padding: 0,
        },
      },
    },
  },
}));

const Table = (props: any) => {
  return <StyledTable {...props} />;
};

export default Table;
