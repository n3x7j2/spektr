import type { AlertProps } from '@mui/material';

export interface NotificationProps extends Omit<AlertProps, 'onClose'> {
  id?: string;
  message: React.ReactNode;
  autoClose?: boolean | number;
  onClose?(props: NotificationProps): void;
  onOpen?(props: NotificationProps): void;
}

export interface NotificationsContextProps {
  notifications: NotificationProps[];
  queue: NotificationProps[];
}

export type NotificationsPositioning = ['top' | 'bottom', 'left' | 'right' | 'center'];
