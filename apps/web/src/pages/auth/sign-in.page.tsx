import Router from 'next/router';
import { useEffect } from 'react';

import { Loading } from '~/components';

const Page = () => {
  useEffect(() => {
    Router.push('/');
  }, []);

  return <Loading />;
};

export default Page;
