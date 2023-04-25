import { EmotionCache } from '@emotion/cache';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { ReactElement, ReactNode } from 'react';

export * from './nav-item';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface NAppProps extends AppProps<{ session: Session }> {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}
