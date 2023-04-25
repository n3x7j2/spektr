import { ComponentType } from 'react';

import { DefaultLayout as Layout, MainComponentProps, RightComponentProps } from '~/features/app/components';
import { managementNavItems } from '~/features/app/constants';

import LeftPanel from './LeftPanel';

interface ManagementLayoutProps {
  slots: {
    MainComponent: ComponentType<MainComponentProps>;
    RightComponent: ComponentType<RightComponentProps>;
  };
}

const ManagemenLayout = (props: ManagementLayoutProps) => {
  const {
    slots: { MainComponent, RightComponent },
  } = props;

  return (
    <Layout
      navItems={managementNavItems}
      slots={{
        LeftComponent: LeftPanel,
        MainComponent,
        RightComponent,
      }}
    />
  );
};

export default ManagemenLayout;
