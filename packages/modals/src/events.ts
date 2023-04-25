import { createUseExternalEvents } from '@spektr/common';

import { ModalSettings, OpenConfirmModal, OpenContextModal } from './contexts/modalsContext';

type ModalsEvents = {
  openModal(payload: ModalSettings): void;
  closeModal(id: string): void;
  closeAllModals(): void;
  openConfirmModal(payload: OpenConfirmModal): void;
  openContextModal(payload: OpenContextModal & { modal: string }): void;
};

export const [useModalsEvents, createEvent] = createUseExternalEvents<ModalsEvents>('spektr-modals');

export const openModal = createEvent('openModal');
export const closeModal = createEvent('closeModal');
export const closeAllModals = createEvent('closeAllModals');
export const openConfirmModal = createEvent('openConfirmModal');
export const openContextModal = createEvent('openContextModal');

export const modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal,
};
