import AttachmentIcon from '@mui/icons-material/Attachment';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import { TabContext } from '@mui/lab';
import React, { ReactNode, useState } from 'react';

import { Tab, TabPanel, Tabs } from '~/components';

type TabValue = 'info' | 'attachments' | 'person' | 'timers' | 'history';

interface RightPanelLayoutProps {
  slots: {
    InfoComponent: ReactNode;
  };
}

const RightPanelLayout = (props: RightPanelLayoutProps) => {
  const {
    slots: { InfoComponent },
  } = props;
  const [tabValue, setTabValue] = useState<TabValue>('info');
  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setTabValue(value as TabValue);
  };

  return (
    <TabContext value={tabValue}>
      <Tabs
        onChange={handleChange}
        variant="fullWidth"
        sx={{ minHeight: 32 }}
        aria-label="info attachments person timers history tabs"
      >
        <Tab value="info" icon={<InfoIcon sx={{ fontSize: 18 }} />}></Tab>
        <Tab value="attachments" icon={<AttachmentIcon sx={{ fontSize: 18 }} />}></Tab>
        <Tab value="person" icon={<PersonIcon sx={{ fontSize: 18 }} />}></Tab>
        <Tab value="timers" icon={<TimerIcon sx={{ fontSize: 18 }} />}></Tab>
        <Tab value="history" icon={<HistoryIcon sx={{ fontSize: 18 }} />}></Tab>
      </Tabs>
      <TabPanel value="info">{InfoComponent}</TabPanel>
      <TabPanel value="attachments">Attachments</TabPanel>
      <TabPanel value="person">People</TabPanel>
      <TabPanel value="timers">Timers</TabPanel>
      <TabPanel value="history">History</TabPanel>
    </TabContext>
  );
};

export default RightPanelLayout;
