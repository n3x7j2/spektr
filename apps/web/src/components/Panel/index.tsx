import { Box } from '@mui/material';

import { Accordion } from '~/components';
import { Section } from '~/types/section';

interface PanelProps {
  sections: Section[];
}

const Panel = (props: PanelProps) => {
  const { sections = [] } = props;
  return (
    <Box sx={{ minHeight: 'calc(100vh - 162px)', bgcolor: '#fff' }}>
      <Box sx={{ height: 'calc(100vh - 162px)', overflowY: 'scroll' }}>
        {sections.map(({ id, hide, ...rest }) => {
          if (hide) {
            return null;
          }

          return <Accordion key={id} {...rest} />;
        })}
      </Box>
    </Box>
  );
};

export default Panel;
