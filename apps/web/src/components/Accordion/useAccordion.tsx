import { useContext } from 'react';

import { AccordionContext } from './AccordionContext';

export const useAccordion = () => {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error('useAccordion has to be used within <AccordionProvider>');
  }

  return accordionContext;
};
