/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkEntityType } from './LinkEntityType';

export type EntityLinkDto = {
  id?: string;
  entityType?: LinkEntityType;
  entityId?: string;
  linkEntityType?: LinkEntityType;
  linkEntityId?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};
