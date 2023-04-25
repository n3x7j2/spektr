/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeType } from './NodeType';

export type ProductionDirectiveNode = {
  parentNoteId?: string | null;
  nodeId?: string;
  nodeValue?: string | null;
  nodeType?: NodeType;
  readonly nodeTypeStr?: string | null;
  hasChildren?: boolean;
  productionDirectiveId?: string;
  shipDate?: string | null;
  numberOfPanelIssued?: number;
  numberOfPanels?: number;
};
