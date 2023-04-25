/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeType } from './NodeType';

export type ProjectExtraTypeNode = {
  parentNoteId?: string | null;
  nodeId?: string;
  nodeValue?: string | null;
  nodeType?: NodeType;
  readonly nodeTypeStr?: string | null;
  hasChildren?: boolean;
  projectId?: string;
  extraTypeId?: string;
  mainScopeId?: string | null;
};
