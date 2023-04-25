import { Auth } from '~/features/app/components';
import { Layout } from '~/features/project/components';
import { NextPageWithLayout } from '~/types';

import MainPanel from './components/MainPanel';
import RightPanel from './components/RightPanel';

const Page: NextPageWithLayout = () => <></>;

Page.getLayout = function getLayout() {
  return (
    <Auth>
      <Layout
        slots={{
          MainComponent: MainPanel,
          RightComponent: RightPanel,
        }}
      />
    </Auth>
  );
};

export default Page;
