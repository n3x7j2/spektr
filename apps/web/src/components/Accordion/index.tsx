import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
  AccordionProps as MuiAccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  styled,
  useControlled,
} from '@mui/material';
import { useCallback, useMemo } from 'react';

import { AccordionContext } from './AccordionContext';

const StyledAccordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
});

const StyledAccordionSummary = styled((props: MuiAccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowRightIcon />} {...props} />
))(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  minHeight: 40,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    marginLeft: theme.spacing(0.5),
    fontWeight: 500,
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#78909c',
  },
}));

const StyledAccordionDetails = styled(MuiAccordionDetails)({
  padding: 0,
});

export interface AccordionProps {
  defaultExpanded?: boolean;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
  slots: {
    Summary: React.ReactNode;
    Details: React.ReactNode;
  };

  ComponentProps?: {
    AccordionProps?: Omit<MuiAccordionProps, 'defaultExpanded' | 'expanded' | 'onChange' | 'disabled' | 'children'>;
    SummaryProps?: Omit<MuiAccordionSummaryProps, 'children'>;
    DetailsProps?: Omit<MuiAccordionDetailsProps, 'children'>;
  };
}

const Accordion = (props: AccordionProps) => {
  const {
    defaultExpanded,
    expanded: expandedProp,
    onChange,
    slots: { Summary, Details },
    ComponentProps,
  } = props;

  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded',
  });

  const handleChange = useCallback(() => {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(!expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  const contextValue = useMemo(() => ({ expanded, toggle: handleChange }), [expanded, handleChange]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <StyledAccordion expanded={expanded} onChange={handleChange} {...ComponentProps?.AccordionProps}>
        <StyledAccordionSummary
          {...ComponentProps?.SummaryProps}
          sx={{ position: 'sticky', top: 0, zIndex: 900, bgcolor: '#f7f9fa', ...ComponentProps?.SummaryProps?.sx }}
        >
          {Summary}
        </StyledAccordionSummary>
        <StyledAccordionDetails {...ComponentProps?.DetailsProps}>{Details}</StyledAccordionDetails>
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

export default Accordion;

export { useAccordion } from './useAccordion';
