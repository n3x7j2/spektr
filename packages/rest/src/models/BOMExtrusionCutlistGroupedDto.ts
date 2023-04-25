/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMExtrusionCutlistInfoDto } from './BOMExtrusionCutlistInfoDto';

export type BOMExtrusionCutlistGroupedDto = {
  bomCutlistId?: string;
  cutlistId?: string | null;
  cutProcess?: string | null;
  itemCode?: string | null;
  itemDescription?: string | null;
  profile?: string | null;
  readonly extrusionCutlistLengths?: number;
  readonly inventoryItemLength?: number;
  lengthUOMShort?: string | null;
  readonly numberOfLengths?: number;
  readonly lengths?: string | null;
  readonly quantity?: number;
  extrusionCutlists?: Array<BOMExtrusionCutlistInfoDto> | null;
};
