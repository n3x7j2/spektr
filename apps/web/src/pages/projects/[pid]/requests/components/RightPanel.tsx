import React from 'react';

import { RightComponentProps } from '~/features/app/components';

import { RightPanelLayout } from '../../components';

const RightPanel = (props: RightComponentProps) => {
  return (
    <RightPanelLayout
      slots={{
        InfoComponent: <></>,
      }}
    />
  );
};

export default RightPanel;
