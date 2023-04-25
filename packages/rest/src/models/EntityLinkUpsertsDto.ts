/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkEntityType } from './LinkEntityType';

export type EntityLinkUpsertsDto = {
  entityId?: string;
  entityType: LinkEntityType;
  linkEntityType: LinkEntityType;
  linkEntityIds?: Array<string> | null;
};
