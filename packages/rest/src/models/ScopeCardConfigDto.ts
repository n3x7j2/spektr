/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardConfigDivider } from './CardConfigDivider';
import type { ScopeCardType } from './ScopeCardType';

export type ScopeCardConfigDto = {
  type?: ScopeCardType;
  section?: number;
  template?: string | null;
  filterBy?: string | null;
  divider?: CardConfigDivider;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};
