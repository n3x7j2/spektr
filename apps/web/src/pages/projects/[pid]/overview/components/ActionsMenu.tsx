import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, IconButtonProps, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material';
import { modals } from '@spektr/modals';
import { useState } from 'react';

import { DuplicateProjectModal } from '~/features/project/components';
import { useGetProject } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

const ActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { pid: projectId } = useQueryParams('pid');
  const { data: project } = useGetProject(projectId);

  const handleClick: IconButtonProps['onClick'] = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDuplicateProject = () => {
    if (project) {
      modals.open({
        title: (
          <Stack direction="row" alignItems="center">
            <ContentCopyIcon color="primary" />
            <Box sx={{ ml: 0.5 }} color="primary.main">
              Duplicate Project
            </Box>
          </Stack>
        ),
        children: <DuplicateProjectModal project={project} />,
        maxWidth: 'md',
      });
    }
  };

  return (
    <>
      <IconButton sx={{ color: '#78909c' }} onClick={handleClick}>
        <MoreVertIcon htmlColor="#78909c" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        sx={{
          '& .MuiPaper-root': {
            marginTop: '5px',
            minWidth: 200,

            '& .MuiMenuItem-root': {
              py: 1,
              fontSize: 13,
              lineHeight: '20px',
              letterSpacing: '0.25px',
            },
          },
        }}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem disabled={!project} onClick={handleDuplicateProject}>
          <ListItemIcon>
            <ContentCopyIcon htmlColor="#78909c" />
          </ListItemIcon>
          Duplicate Project
        </MenuItem>
        <MenuItem disabled>
          <ListItemIcon>
            <ArrowForwardIcon htmlColor="#78909c" />
          </ListItemIcon>
          Move Project
        </MenuItem>
      </Menu>
    </>
  );
};

export default ActionsMenu;
