import { Button, Stack } from '@mui/material';

import { discardForm, saveForm } from '~/events';
import { useSavingEnabled } from '~/store';

import AccountMenu from './components/AccountMenu';
import ActionsMenu from './components/ActionsMenu';

const Actions = () => {
  const [savingEnabled, setSavingEnabled] = useSavingEnabled();
  const handleDiscard = () => {
    discardForm();
    setSavingEnabled(false);
  };
  return (
    <Stack direction="row" alignItems="center" sx={{ mx: 2 }} spacing={1.5}>
      {savingEnabled ? (
        <Button variant="outlined" onClick={handleDiscard} sx={{ minWidth: 100 }}>
          Discard
        </Button>
      ) : (
        <ActionsMenu />
      )}

      <Button disabled={!savingEnabled} onClick={() => saveForm({})} variant="contained" sx={{ minWidth: 100 }}>
        Save
      </Button>
      <AccountMenu />
    </Stack>
  );
};

export default Actions;
