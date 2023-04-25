import { createUseExternalEvents } from '@spektr/common';

const [useDiscardFormEvent, createEvent] = createUseExternalEvents<{
  discardForm: () => void;
}>('spektr-discard-form-event');

export { useDiscardFormEvent };
export const discardForm = createEvent('discardForm');
