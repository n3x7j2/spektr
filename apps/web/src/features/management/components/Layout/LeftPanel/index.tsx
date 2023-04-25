import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FavoriteIcon from '@mui/icons-material/StarBorder';
import { TabContext } from '@mui/lab';
import React, { useState } from 'react';

import { Tab, TabPanel, Tabs } from '~/components';
import { LeftComponentProps } from '~/features/app/components';

import ManagementTree from '../../ManagementTree';

const LeftPanel = (props: LeftComponentProps) => {
  const [tabValue, setTabValue] = useState<'administration' | 'favourites'>('administration');
  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setTabValue(value as 'administration' | 'favourites');
  };

  return (
    <TabContext value={tabValue}>
      <Tabs
        onChange={handleChange}
        variant="fullWidth"
        sx={{ minHeight: 32 }}
        aria-label="administration favourites tabs"
      >
        <Tab value="administration" icon={<FolderOpenIcon sx={{ fontSize: 18 }} />}></Tab>
        <Tab value="favourites" icon={<FavoriteIcon sx={{ fontSize: 18 }} />}></Tab>
      </Tabs>
      <TabPanel value={tabValue}>
        <ManagementTree />
      </TabPanel>
    </TabContext>
  );
};

export default LeftPanel;
