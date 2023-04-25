/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSystemUpdateDto = {
  projectId?: string;
  systemId?: string;
  systemTypeId?: string;
  description?: string | null;
  sortNr?: number;
  fabricationLeadTime?: number;
  fabricationLeadTimeUOMID?: string | null;
};
