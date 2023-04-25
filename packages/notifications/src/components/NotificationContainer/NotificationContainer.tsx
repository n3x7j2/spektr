/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, AlertTitle, SxProps, Theme } from '@mui/material';
import React, { useEffect, useRef } from 'react';

import { NotificationProps } from '../../types';
import getAutoClose from './get-auto-close';

export interface NotificationContainerProps {
  notification: NotificationProps;
  onHide(id: string): void;
  autoClose: false | number;
  innerRef: React.ForwardedRef<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
}

export default function NotificationContainer({
  notification,
  autoClose,
  onHide,
  innerRef,
  ...others
}: NotificationContainerProps) {
  const { autoClose: notificationAutoClose, title, message, ...notificationProps } = notification;
  const autoCloseTimeout = getAutoClose(autoClose, notificationAutoClose!);
  const hideTimeout = useRef<number>();

  const handleHide = () => {
    onHide(notification.id!);
    window.clearTimeout(hideTimeout.current);
  };

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };

  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === 'number') {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };

  useEffect(() => {
    if (typeof notification.onOpen === 'function') {
      notification.onOpen(notification);
    }
  }, []);

  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, notification.autoClose]);

  return (
    <Alert
      {...notificationProps}
      {...others}
      onClose={handleHide}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
      ref={innerRef}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
}

NotificationContainer.displayName = '@spketr/notifications/NotificationContainer';
