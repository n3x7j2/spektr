import { createUseExternalEvents } from '@spektr/common';

const [useRemoveEstimateEvent, createEvent] = createUseExternalEvents<{
  removeEstimate: () => void;
}>('spektr-remove-estimate-event');

export { useRemoveEstimateEvent };
export const removeEstimate = createEvent('removeEstimate');
