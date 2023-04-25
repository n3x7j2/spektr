import { RestClient } from '@spektr/rest';
import { get } from 'lodash';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

export const useRestClient = () => {
  const { data: session } = useSession();

  const accessToken = get(session, 'accessToken');

  const restClient = useMemo(() => {
    return new RestClient({
      BASE: process.env.NEXT_PUBLIC_REMOTE_ENDPOINT_URL,
      TOKEN: accessToken,
    });
  }, [accessToken]);

  return restClient;
};
