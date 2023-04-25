import { createUseExternalEvents } from '@spektr/common';

const [useSaveFormEvent, createEvent] = createUseExternalEvents<{
  saveForm: (event?: { callback?: () => void }) => void;
}>('spektr-save-form-event');

export { useSaveFormEvent };
export const saveForm = createEvent('saveForm');
