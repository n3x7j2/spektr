import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { randomId } from '@spektr/common';
import React, { useCallback, useReducer, useRef } from 'react';

import {
  ConfirmLabels,
  ContextModalProps,
  ModalsContext,
  ModalsContextProps,
  ModalSettings,
  OpenConfirmModal,
  OpenContextModal,
} from '../contexts/modalsContext';
import { useModalsEvents } from '../events';
import { modalsReducer } from '../reducer';
import { ConfirmModal } from './ConfirmModal';

export interface ModalsProviderProps {
  /** Your app */
  children: React.ReactNode;

  /** Predefined modals */
  modals?: Record<string, React.FC<ContextModalProps<any>>>;

  /** Shared Modal component props, applied for every modal */
  modalProps?: ModalSettings;

  /** Confirm modal labels */
  labels?: ConfirmLabels;
}

function separateConfirmModalProps(props: OpenConfirmModal) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }

  const {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels,
    dividers,
    ...others
  } = props;

  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels,
      dividers,
    },
    modalProps: {
      id,
      ...others,
    },
  };
}

export function ModalsProvider({ children, modalProps, labels, modals = {} }: ModalsProviderProps) {
  const [state, dispatch] = useReducer(modalsReducer, { modals: [], current: null });
  const stateRef = useRef(state);
  stateRef.current = state;

  const closeAll = useCallback(
    (canceled?: boolean) => {
      stateRef.current.modals.forEach((modal) => {
        if (modal.type === 'confirm' && canceled) {
          modal.props.onCancel?.();
        }

        modal.props.onClose?.({}, 'backdropClick');
      });
      dispatch({ type: 'CLOSE_ALL' });
    },
    [stateRef, dispatch],
  );

  const openModal = useCallback(
    ({ modalId, ...props }: ModalSettings) => {
      const id = modalId || randomId();

      dispatch({
        type: 'OPEN',
        payload: {
          id,
          type: 'content',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openConfirmModal = useCallback(
    ({ modalId, ...props }: OpenConfirmModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        payload: {
          id,
          type: 'confirm',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openContextModal = useCallback(
    (modal: string, { modalId, ...props }: OpenContextModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        payload: {
          id,
          type: 'context',
          props,
          ctx: modal,
        },
      });
      return id;
    },
    [dispatch],
  );

  const closeModal = useCallback(
    (id: string, canceled?: boolean) => {
      const modal = stateRef.current.modals.find((item) => item.id === id);
      if (!modal) {
        return;
      }

      if (modal.type === 'confirm' && canceled) {
        modal.props.onClose?.({}, 'backdropClick');
      }
      modal.props.onClose?.({}, 'backdropClick');
      dispatch({ type: 'CLOSE', payload: modal.id });
    },
    [stateRef, dispatch],
  );

  useModalsEvents({
    openModal,
    openConfirmModal,
    openContextModal: ({ modal, ...payload }) => openContextModal(modal, payload),
    closeModal,
    closeAllModals: closeAll,
  });

  const ctx: ModalsContextProps = {
    modals: state.modals,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll,
  };

  const getCurrentModal = () => {
    const currentModal = stateRef.current.current;
    switch (currentModal?.type) {
      case 'context': {
        const { innerProps, ...rest } = currentModal.props;
        const ContextModal = modals[currentModal.ctx];

        return {
          modalProps: rest,
          content: <ContextModal innerProps={innerProps} context={ctx} id={currentModal.id} />,
        };
      }
      case 'confirm': {
        const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } = separateConfirmModalProps(
          currentModal.props,
        );

        return {
          modalProps: separatedModalProps,
          content: (
            <ConfirmModal
              {...separatedConfirmProps}
              id={currentModal.id}
              labels={currentModal.props.labels || labels}
            />
          ),
        };
      }
      case 'content': {
        const { children: currentModalChildren, ...rest } = currentModal.props;

        return {
          modalProps: rest,
          content: <DialogContent>{currentModalChildren}</DialogContent>,
        };
      }
      default: {
        return {
          modalProps: {},
          content: null,
        };
      }
    }
  };

  const { modalProps: currentModalProps, content } = getCurrentModal();

  const { title: title, ...mp } = modalProps || {};
  const { title: currentTitle, ...cmp } = currentModalProps as { title: React.ReactElement };

  return (
    <ModalsContext.Provider value={ctx}>
      <Dialog {...mp} {...cmp} open={state.modals.length > 0} onClose={() => closeModal(state.current!.id)}>
        {currentTitle && <DialogTitle>{currentTitle}</DialogTitle>}
        {content}
      </Dialog>

      {children}
    </ModalsContext.Provider>
  );
}
