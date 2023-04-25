/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhaseItemSystemInfoDto } from './PhaseItemSystemInfoDto';

export type PhaseItemDto = {
  phaseNumber?: string | null;
  phaseName?: string | null;
  phaseDescription?: string | null;
  extraTypeLong?: string | null;
  phaseContractReference?: string | null;
  phaseId?: string;
  extraId?: string;
  scopeNumber?: number;
  scopeName?: string | null;
  directiveQty?: number;
  mainScopeTotalDirective?: number;
  customerExtraTotalDirective?: number;
  nextShippingDate?: string | null;
  shippingDates?: Array<string> | null;
  infos?: Array<PhaseItemSystemInfoDto> | null;
};
