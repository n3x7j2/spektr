import { signIn, useSession } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';

import { Loading } from '~/components';

interface AuthProps extends PropsWithChildren {}

const Auth = (props: AuthProps) => {
  const { children } = props;
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn('spektr', undefined, { prompt: 'login' });
    },
  });

  if (status === 'loading') {
    return <Loading />;
  }

  return <>{children}</>;
};

export default Auth;
