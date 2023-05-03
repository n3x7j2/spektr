import { createUseExternalEvents } from '@spektr/common';

const [useRemoveItemEvent, createEvent] = createUseExternalEvents<{
  removeItem: () => void;
}>('spektr-remove-item-event');

export { useRemoveItemEvent };
export const removeItem = createEvent('removeItem');
