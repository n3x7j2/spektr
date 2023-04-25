/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaterialDto } from './MaterialDto';

export type PagedResultDtoOfMaterialDto = {
  items?: Array<MaterialDto> | null;
  totalCount?: number;
};
