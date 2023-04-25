import { createUseExternalEvents } from '@spektr/common';

const [useAddNewEstimateEvent, createEvent] = createUseExternalEvents<{
  addNewEstimate: () => void;
}>('spektr-add-new-estimate-event');

export { useAddNewEstimateEvent };
export const addNewEstimate = createEvent('addNewEstimate');
