/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardConfigDivider } from './CardConfigDivider';

export type CardSectionDto = {
  section?: number;
  divider?: CardConfigDivider;
  items?: Array<string> | null;
};
