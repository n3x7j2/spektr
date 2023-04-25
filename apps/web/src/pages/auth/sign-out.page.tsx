import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

import { Loading } from '~/components';

const Page = () => {
  useEffect(() => {
    signOut({ redirect: true, callbackUrl: '/' });
  }, []);

  return <Loading />;
};

export default Page;
