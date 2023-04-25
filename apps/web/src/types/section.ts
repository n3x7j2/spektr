import { AccordionProps } from '~/components/Accordion';

export type Section = AccordionProps & {
  id: string;
  hide?: boolean;
};
