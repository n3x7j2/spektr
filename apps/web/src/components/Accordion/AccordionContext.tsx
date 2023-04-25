import { createContext } from 'react';

export type AccordionContextType = {
  expanded: boolean;
  toggle: () => void;
};

export const AccordionContext = createContext<AccordionContextType>({} as AccordionContextType);
