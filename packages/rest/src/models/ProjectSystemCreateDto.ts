/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSystemCreateDto = {
  id?: string;
  projectId?: string;
  systemId?: string;
  systemTypeId?: string;
  description?: string | null;
  sortNr?: number;
  fabricationLeadTime?: number;
  fabricationLeadTimeUOMID?: string | null;
};
