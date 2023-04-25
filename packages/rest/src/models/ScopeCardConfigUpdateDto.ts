/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardConfigDivider } from './CardConfigDivider';
import type { ScopeCardType } from './ScopeCardType';

export type ScopeCardConfigUpdateDto = {
  type?: ScopeCardType;
  section?: number;
  template?: string | null;
  filterBy?: string | null;
  divider?: CardConfigDivider;
};
