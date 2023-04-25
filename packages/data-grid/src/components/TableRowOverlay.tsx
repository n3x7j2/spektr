import { Box, Divider } from '@mui/material';
import { isEmpty, trim } from 'lodash';
import React from 'react';

import DragIcon from './icons/DragIcon';

type Props = {
  row: any;
  fields: string[];
};

const TableRowOverlay = (props: Props) => {
  const { row, fields = [] } = props;
  return row ? (
    <Box
      sx={{
        fontSize: 13,
        display: 'flex',
        height: '45px',
        bgcolor: '#fff',
        width: 'fit-content',
        alignItems: 'center',
        boxShadow: 1,
        py: 1,
      }}
    >
      <Box
        sx={{ width: '40px', display: 'flex', justifyContent: 'center', px: 1 }}
      >
        <DragIcon />
      </Box>
      {fields.map((field) => {
        return !isEmpty(trim(row[field])) ? (
          <React.Fragment key={field}>
            <Divider orientation="vertical" />
            <Box
              sx={{
                px: 1.5,
                width: 'fit-content',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              {row[field]}
            </Box>
          </React.Fragment>
        ) : null;
      })}
    </Box>
  ) : null;
};

export default TableRowOverlay;
