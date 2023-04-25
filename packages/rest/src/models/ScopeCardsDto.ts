/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScopeItemDto } from './ScopeItemDto';

export type ScopeCardsDto = {
  selectedScopeId?: string;
  selectedPhaseId?: string | null;
  selectedDirectiveId?: string | null;
  scopeItemDtos?: Array<ScopeItemDto> | null;
};
