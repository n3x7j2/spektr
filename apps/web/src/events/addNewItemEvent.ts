import { createUseExternalEvents } from '@spektr/common';

const [useAddNewItemEvent, createEvent] = createUseExternalEvents<{
  addNewItem: () => void;
}>('spektr-add-new-item-event');

export { useAddNewItemEvent };
export const addNewItem = createEvent('addNewItem');
