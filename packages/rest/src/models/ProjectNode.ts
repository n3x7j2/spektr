/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeType } from './NodeType';
import type { SearchResult } from './SearchResult';

export type ProjectNode = {
  parentNoteId?: string | null;
  nodeId?: string;
  nodeValue?: string | null;
  nodeType?: NodeType;
  readonly nodeTypeStr?: string | null;
  hasChildren?: boolean;
  projectId?: string;
  searchResult?: SearchResult;
  projectNumber?: string | null;
  projectName?: string | null;
  projectTeamId?: string;
  favouriteId?: string | null;
  isFavourite?: boolean;
};
