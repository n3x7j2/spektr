import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FavoriteIcon from '@mui/icons-material/StarBorder';
import { TabContext } from '@mui/lab';
import React, { useState } from 'react';

import { Accordion, Tab, TabPanel, Tabs } from '~/components';
import { LeftComponentProps } from '~/features/app/components';
import { ProjectTree } from '~/features/project/components';

const LeftPanel = (props: LeftComponentProps) => {
  const [tabValue, setTabValue] = useState<'projects' | 'favourites'>('projects');
  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setTabValue(value as 'projects' | 'favourites');
  };

  return (
    <TabContext value={tabValue}>
      <Tabs onChange={handleChange} variant="fullWidth" sx={{ minHeight: 32 }} aria-label="projects favourites tabs">
        <Tab value="projects" icon={<FolderOpenIcon sx={{ fontSize: 18 }} />}></Tab>
        <Tab value="favourites" icon={<FavoriteIcon sx={{ fontSize: 18 }} />}></Tab>
      </Tabs>
      <TabPanel value={tabValue}>
        <Accordion
          defaultExpanded
          slots={{
            Summary: <>Current Projects</>,
            Details: <ProjectTree tab={tabValue} />,
          }}
        />
      </TabPanel>
    </TabContext>
  );
};

export default LeftPanel;
