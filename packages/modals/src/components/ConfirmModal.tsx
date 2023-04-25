import { Button, ButtonProps, DialogActions, DialogContent, DialogProps, Stack, StackProps } from '@mui/material';
import React from 'react';

import { ConfirmLabels } from '../contexts/modalsContext';
import { useModals } from '../hooks/useModals';

export interface ConfirmModalProps {
  id?: string;
  children?: DialogProps['children'];
  onCancel?(): void;
  onConfirm?(): void;
  dividers?: boolean;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  confirmProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  groupProps?: StackProps;
  labels?: ConfirmLabels;
}

export function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: '', confirm: '' },
  dividers = false,
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children,
}: ConfirmModalProps) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx.closeModal(id!);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx.closeModal(id!);
  };

  return (
    <>
      <DialogContent dividers={dividers}>{children}</DialogContent>
      <DialogActions>
        <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', px: 2, pb: 1 }} {...groupProps}>
          <Button
            variant="contained"
            size="large"
            disableElevation
            disableRipple
            sx={{
              backgroundColor: '#f1f3f4',
              color: '#5e6366',
              minWidth: '190px',
              '&:hover': {
                backgroundColor: '#d9d9d9',
                color: '#5e6366',
              },
            }}
            {...cancelProps}
            onClick={handleCancel}
          >
            {cancelProps?.children || cancelLabel}
          </Button>

          <Button
            variant="contained"
            size="large"
            disableElevation
            disableRipple
            sx={{ minWidth: '190px', ml: 2 }}
            {...confirmProps}
            onClick={handleConfirm}
          >
            {confirmProps?.children || confirmLabel}
          </Button>
        </Stack>
      </DialogActions>
    </>
  );
}
