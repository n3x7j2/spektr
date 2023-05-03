import { useConst } from '@spektr/common';
import { useRef } from 'react';

import { FormHandle } from '~/types/form';

export const useFormHandleRefs = () => {
  const generalContentRef = useRef<FormHandle>(null);

  return useConst({
    generalContentRef,
  });
};
