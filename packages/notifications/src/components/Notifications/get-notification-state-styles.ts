import { CSSProperties } from 'react';
import { TransitionStatus } from 'react-transition-group';

import { NotificationsPositioning } from '../../types';

interface NotificationStateStylesProps {
  state: TransitionStatus;
  maxHeight: number | string;
  positioning: NotificationsPositioning;
  transitionDuration: number;
}

const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  'top-center': 'translateY(-100%)',
  'bottom-center': 'translateY(100%)',
};

const noTransform = {
  left: 'translateX(0)',
  right: 'translateX(0)',
  'top-center': 'translateY(0)',
  'bottom-center': 'translateY(0)',
};

type TransformPosition = keyof typeof transforms;

export default function getNotificationStateStyles({
  state,
  maxHeight,
  positioning,
  transitionDuration,
}: NotificationStateStylesProps): CSSProperties {
  const [vertical, horizontal] = positioning;
  const property: TransformPosition = horizontal === 'center' ? `${vertical}-center` : horizontal;

  const commonStyles: CSSProperties = {
    opacity: 0,
    maxHeight,
    transform: transforms[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
    transitionProperty: 'opacity, transform, max-height',
  };

  const inState: CSSProperties = {
    opacity: 1,
    transform: noTransform[property],
  };

  const outState: CSSProperties = {
    opacity: 0,
    maxHeight: 0,
    transform: transforms[property],
  };

  const transitionStyles: Record<string, CSSProperties> = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState,
  };

  return { ...commonStyles, ...transitionStyles[state] };
}
