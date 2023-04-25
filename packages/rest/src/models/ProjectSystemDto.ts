/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSystemDto = {
  id?: string;
  projectId?: string;
  projectNumber?: string | null;
  systemId?: string;
  systemName?: string | null;
  systemTypeId?: string;
  systemTypeName?: string | null;
  description?: string | null;
  sortNr?: number;
  fabricationLeadTime?: number;
  fabricationLeadTimeUOMID?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};
