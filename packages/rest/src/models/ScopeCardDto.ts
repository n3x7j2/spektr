/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardSectionDto } from './CardSectionDto';
import type { ScopeCardViewType } from './ScopeCardViewType';

export type ScopeCardDto = {
  projectId?: string;
  viewType?: ScopeCardViewType;
  projectExtraId?: string | null;
  sections?: Array<CardSectionDto> | null;
};
