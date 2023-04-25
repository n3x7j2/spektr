import '~/assets/styles/index.scss';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DndContext, PointerSensor, pointerWithin, useSensor, useSensors } from '@spektr/dnd';
import { ModalsProvider } from '@spektr/modals';
import { Notifications, notifications } from '@spektr/notifications';
import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ErrorBoundary } from 'react-error-boundary';

import RouterTransition from '~/features/app/components/RouterTransition';
import createEmotionCache from '~/helpers/createEmotionCache';
import theme from '~/theme';
import { NAppProps } from '~/types';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      useErrorBoundary: (error: any) => error.response?.status >= 500,
      onError: (error: any) => {
        notifications.clean();
        notifications.show({
          severity: 'error',
          variant: 'filled',
          message:
            error.body?.error?.validationErrors?.[0]?.message ||
            error.body?.error?.message ||
            error.message ||
            'Something went wrong! Please try again',
        });
      },
    },
    mutations: {
      onError: (error: any) => {
        notifications.clean();
        notifications.show({
          severity: 'error',
          variant: 'filled',
          message:
            error.body?.error?.validationErrors?.[0]?.message ||
            error.body?.error?.message ||
            error.message ||
            'Something went wrong! Please try again',
        });
      },
    },
  },
});

export default function MyApp(props: NAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const { reset } = useQueryErrorResetBoundary();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 10 },
    }),
  );

  const handleDragStart = () => {
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = () => {
    document.body.style.cursor = '';
  };

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ErrorBoundary onReset={reset} fallbackRender={() => <ErrorPage statusCode={500} />}>
              <SessionProvider session={session} refetchInterval={30 * 60} refetchOnWindowFocus={true}>
                <DndContext
                  sensors={sensors}
                  collisionDetection={pointerWithin}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragCancel={handleDragEnd}
                >
                  <RouterTransition />
                  <Notifications position="top-center" containerWidth="fit-content" limit={1} />
                  <ModalsProvider>{getLayout(<Component {...pageProps} />)}</ModalsProvider>
                </DndContext>
              </SessionProvider>
            </ErrorBoundary>
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
