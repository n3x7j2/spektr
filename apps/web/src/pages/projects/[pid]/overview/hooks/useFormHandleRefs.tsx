import { useConst } from '@spektr/common';
import { useRef } from 'react';

import { FormHandle } from '~/types/form';

export const useFormHandleRefs = () => {
  const generalContentRef = useRef<FormHandle>(null);
  const scheduleContentRef = useRef<FormHandle>(null);
  const estimatesDetailsContentRef = useRef<FormHandle>(null);
  const allowancesContentRef = useRef<FormHandle>(null);
  const wallTypeContentRef = useRef<FormHandle>(null);
  const otherContentRef = useRef<FormHandle>(null);

  return useConst({
    generalContentRef,
    scheduleContentRef,
    estimatesDetailsContentRef,
    allowancesContentRef,
    wallTypeContentRef,
    otherContentRef,
  });
};
