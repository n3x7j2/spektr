/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhaseItemSystemInfoPartTypeCodeCategoryDto } from './PhaseItemSystemInfoPartTypeCodeCategoryDto';
import type { PhaseItemSystemInfoProjectSystemDto } from './PhaseItemSystemInfoProjectSystemDto';

export type PhaseItemSystemInfoDto = {
  projectPhaseId?: string;
  systemTypeId?: string;
  systemTypeName?: string | null;
  bgColor?: string | null;
  sortNr?: number;
  systemId?: string;
  systemName?: string | null;
  nextShippingDate?: string | null;
  primaryProjectSystemComponents?: Array<PhaseItemSystemInfoProjectSystemDto> | null;
  categories?: Array<PhaseItemSystemInfoPartTypeCodeCategoryDto> | null;
};
