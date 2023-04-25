/* eslint-disable react-hooks/exhaustive-deps */
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, AvatarGroup, Box, IconButton, Stack, styled, Typography } from '@mui/material';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { modals } from '@spektr/modals';
import { find, map } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';

import { useGetTeams } from '~/hooks/api';

import { useSelectedTeams, useTempSelectedTeams } from '../hooks/useSelectedTeams';

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 40,
  padding: '0 8px 0 31px',
  '&:hover': {
    backgroundColor: '#dce1e3',
    borderRadius: 4,
  },
});

const defaultColumns: ColumnDef[] = [
  {
    name: 'name',
    title: 'All Teams',
    width: 300,
  },
];

const DialogContent = () => {
  const { data: teams = [] } = useGetTeams();
  const [selectedTempTeams, setSelectedTempTeams] = useTempSelectedTeams();
  return (
    <>
      <Typography>Select the teams whose projects you want to display.</Typography>
      <DataGrid
        defaultColumns={defaultColumns}
        getRowId={(row) => row.id}
        rows={teams}
        height={300}
        onRowsSelect={setSelectedTempTeams}
        selectedRows={selectedTempTeams}
        multiSelect
      />
    </>
  );
};

const TreeNodeTeams = () => {
  const { data: teams = [] } = useGetTeams();
  const [selectedTempTeams, setSelectedTempTeams] = useTempSelectedTeams();
  const [selectedTeams, setSelectedTeams] = useSelectedTeams();
  const [confirmation, setConfirmation] = useState({ confirmed: false });

  const openModal = useCallback(
    () =>
      modals.openConfirmModal({
        title: (
          <Stack direction="row" alignItems="center">
            <SettingsIcon color="primary" />
            <Box sx={{ ml: 0.5 }} color="primary.main">
              Teams
            </Box>
          </Stack>
        ),
        children: <DialogContent />,
        maxWidth: 'xs',
        labels: { confirm: 'Confirm', cancel: 'Discard' },
        onCancel: () => setConfirmation({ confirmed: false }),
        onConfirm: () => setConfirmation({ confirmed: true }),
      }),
    [],
  );

  useEffect(() => {
    if (confirmation.confirmed) {
      setSelectedTeams(selectedTempTeams);
    } else {
      setSelectedTempTeams(selectedTeams);
    }
  }, [confirmation]);

  return (
    <StyledBox>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {selectedTeams.length === 0 || selectedTeams.length === teams.length ? (
          <>
            <GroupsIcon htmlColor="#78909c" />
            <Typography pl={1} pt={0.5} variant="body2">
              All Teams
            </Typography>
          </>
        ) : (
          <>
            <AvatarGroup
              max={7}
              total={selectedTeams.length}
              slotProps={{ additionalAvatar: { sx: { width: 24, height: 24, fontSize: 13, bgcolor: '#78909c' } } }}
            >
              {map(selectedTeams, (teamId) => {
                const team = find(teams, (t) => t.id === teamId);
                return (
                  <Avatar
                    title={team?.name || ''}
                    key={teamId}
                    sx={{ bgcolor: team?.colour || '#78909c', width: 24, height: 24 }}
                  >
                    <Box></Box>
                  </Avatar>
                );
              })}
            </AvatarGroup>
            <Typography pl={1} pt={0.5} variant="body2">
              Teams
            </Typography>
          </>
        )}
      </Box>
      <IconButton onClick={openModal}>
        <SettingsIcon sx={{ fontSize: 18 }} htmlColor="#78909c" />
      </IconButton>
    </StyledBox>
  );
};

export default TreeNodeTeams;
