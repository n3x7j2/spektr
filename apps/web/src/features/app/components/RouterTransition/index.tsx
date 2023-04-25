import { modals } from '@spektr/modals';
import Router from 'next/router';
import React, { useCallback, useEffect } from 'react';

import { saveForm } from '~/events';
import { useSavingEnabled } from '~/store';

const RouterTransition = () => {
  const [savingEnabled, setSavingEnabled] = useSavingEnabled();

  const handleStart = useCallback(
    (url: string) => {
      if (savingEnabled) {
        modals.openConfirmModal({
          title: <>Confirmation</>,
          children: <>Would you like to save changes?</>,
          labels: { confirm: 'Save', cancel: 'Discard & Leave' },
          onConfirm: async () => {
            modals.closeAll();
            saveForm({
              callback: () => {
                setSavingEnabled(false);
                setTimeout(() => Router.push(url));
              },
            });
          },
          onCancel: () => {
            setSavingEnabled(false);
            Router.push(url);
          },
        });
        throw 'Abort route change. Please ignore this error.';
      }
    },
    [savingEnabled, setSavingEnabled],
  );

  useEffect(() => {
    Router.events.on('routeChangeStart', handleStart);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
    };
  }, [handleStart]);

  return <></>;
};

export default RouterTransition;
