/* eslint-disable react-hooks/exhaustive-deps */
import { QueryKeys } from '@spektr/common';
import {
  BOMDto,
  ExtraScopeNode,
  NonProductionDirectiveNode,
  NonProductionDirectiveTypeFolderNode,
  ProductionDirectiveNode,
  ProjectExtraTypeNode,
  ProjectNode,
  ProjectPhaseNode,
} from '@spektr/rest';
import { TreeNode } from '@spektr/treeview';
import { useQueries } from '@tanstack/react-query';
import { filter, flatMap, includes, isEmpty, map, some } from 'lodash';
import { useMemo } from 'react';

import { useRestClient } from '~/hooks';

import { useProjectNodeParams } from './useProjectNodeParams';
import { useSelectedTeams } from './useSelectedTeams';

const mapProjectNodeToTreeNode = (node: ProjectNode): TreeNode => {
  return {
    id: node.projectId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
    exData: { teamId: node.projectTeamId, favouriteId: node.favouriteId, isFavourite: node.isFavourite || false },
  };
};

const mapProjectExtraTypeNodeToTreeNode = (node: ProjectExtraTypeNode): TreeNode => {
  return {
    id: node.extraTypeId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
  };
};

const mapProjectExtraNodeToTreeNode = (node: ExtraScopeNode): TreeNode => {
  return {
    id: node.extraId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
  };
};

const mapProjectPhaseNodeToTreeNode = (node: ProjectPhaseNode): TreeNode => {
  return {
    id: node.phaseId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
  };
};

const mapNonProdDirectiveTypeFolderNodeToTreeNode = (node: NonProductionDirectiveTypeFolderNode): TreeNode => {
  return {
    id: node.directiveTypeId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
  };
};

const mapNonProdDirectiveNodeToTreeNode = (node: NonProductionDirectiveNode): TreeNode => {
  return {
    id: node.nodeId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
  };
};

const mapProdDirectiveNodeToTreeNode = (node: ProductionDirectiveNode): TreeNode => {
  return {
    id: node.productionDirectiveId || '',
    nodeId: node.nodeId || '',
    parentNodeId: node.parentNoteId || null,
    nodeValue: node.nodeValue || '',
    nodeType: node.nodeTypeStr || '',
    hasChildren: node.hasChildren || false,
  };
};

const mapBillToTreeNode = (parentId: string, node: BOMDto): TreeNode => {
  return {
    id: node.id || '',
    nodeId: node.id || '',
    parentNodeId: parentId,
    nodeValue: `Bill ${node.bomNumber}`,
    nodeType: 'Bill',
    hasChildren: false,
  };
};

export type ExtraTypeParams = {
  isMainScope: boolean;
  projectId: string;
  extraTypeId: string;
};

export type DirectiveTypeParams = { phaseId: string; directiveTypeId: string };
export type DirectiveParams = { directiveId: string; nodeId: string };

export type ProjectNodeParams = {
  searchKey?: string;
  projectIds?: string[];
  extraTypes?: ExtraTypeParams[];
  extraIds?: string[];
  npPhaseIds?: string[]; // non prod phaseId array
  directiveTypes?: DirectiveTypeParams[];
  pPhaseIds?: string[]; // prod phaseId array
  directiveIds?: DirectiveParams[];
};

export const useGetProjectNodes = (tab: 'projects' | 'favourites') => {
  const client = useRestClient();
  const [teamIds] = useSelectedTeams();
  const [params] = useProjectNodeParams();
  const {
    searchKey = '',
    projectIds = [],
    extraTypes = [],
    extraIds = [],
    npPhaseIds = [],
    directiveTypes = [],
    pPhaseIds = [],
    directiveIds = [],
  } = params;

  const extraTypeQueries = useMemo(
    () =>
      map(projectIds, (projectId) => {
        return {
          queryKey: [QueryKeys.GetExtraTypeNodes, projectId],
          queryFn: async () => {
            const nodes = await client.projectNavigation.projectNavigationGetProjectExtraTypeNode({
              projectId,
            });

            return map(nodes, mapProjectExtraTypeNodeToTreeNode);
          },
        };
      }),
    [projectIds],
  );

  const directivesFolderAndProjectExtraQueries = useMemo(
    () =>
      map(extraTypes, (extraType) => {
        return {
          queryKey: [QueryKeys.GetDirectivesFolderAndProjectExtraNodes, extraType.projectId, extraType.extraTypeId],
          queryFn: async () => {
            const nodes = extraType.isMainScope
              ? await client.projectNavigation.projectNavigationGetDirectivesFolderNode({
                  projectId: extraType.projectId,
                  extraTypeId: extraType.extraTypeId,
                })
              : await client.projectNavigation.projectNavigationGetProjectExtraNode({
                  projectId: extraType.projectId,
                  extraTypeId: extraType.extraTypeId,
                });

            return map(nodes, extraType.isMainScope ? mapProjectPhaseNodeToTreeNode : mapProjectExtraNodeToTreeNode);
          },
        };
      }),
    [extraTypes],
  );

  const phasesQueries = useMemo(
    () =>
      map(extraIds, (extraId) => {
        return {
          queryKey: [QueryKeys.GetPhaseNodes, extraId],
          queryFn: async () => {
            const nodes = await client.projectNavigation.projectNavigationGetProjectPhaseNode({
              extraId,
            });

            return map(nodes, mapProjectPhaseNodeToTreeNode);
          },
        };
      }),
    [extraIds],
  );

  const nonProdDirectiveTypeQueries = useMemo(
    () =>
      map(npPhaseIds, (phaseId) => {
        return {
          queryKey: [QueryKeys.GetNonProdDirectiveTypeNodes, phaseId],
          queryFn: async () => {
            const nodes = await client.projectNavigation.projectNavigationGetNonProductionDirectiveTypeNode({
              phaseId,
            });

            return map(nodes, mapNonProdDirectiveTypeFolderNodeToTreeNode);
          },
        };
      }),
    [npPhaseIds],
  );

  const nonProdDirectiveQueries = useMemo(
    () =>
      map(directiveTypes, (params) => {
        return {
          queryKey: [QueryKeys.GetNonProdDirectiveNodes, params.phaseId, params.directiveTypeId],
          queryFn: async () => {
            const nodes = await client.projectNavigation.projectNavigationGetNonProductionDirectiveNode({
              phaseId: params.phaseId,
              directiveTypeId: params.directiveTypeId,
            });

            return map(nodes, mapNonProdDirectiveNodeToTreeNode);
          },
        };
      }),
    [directiveTypes],
  );

  const prodDirectiveQueries = useMemo(
    () =>
      map(pPhaseIds, (phaseId) => {
        return {
          queryKey: [QueryKeys.GetProdDirectiveNodes, phaseId],
          queryFn: async () => {
            const nodes = await client.projectNavigation.projectNavigationGetProductionDirectiveNode({
              phaseId,
            });

            return map(nodes, mapProdDirectiveNodeToTreeNode);
          },
        };
      }),
    [pPhaseIds],
  );

  const billQueries = useMemo(
    () =>
      map(directiveIds, ({ directiveId, nodeId }) => {
        return {
          queryKey: [QueryKeys.GetBills, directiveId],
          queryFn: async () => {
            const result = await client.bom.bomGetList({
              productionDirectiveId: directiveId,
              disablePagination: true,
            });

            return map(result.items || [], (item) => mapBillToTreeNode(nodeId, item));
          },
        };
      }),
    [directiveIds],
  );

  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.GetProjectNodes, searchKey, tab],
        queryFn: async () => {
          let nodes = await client.projectNavigation.projectNavigationGetProjectNode({
            searchKey,
          });

          if (tab === 'favourites') {
            nodes = filter(nodes, (n) => !!n.isFavourite);
          }

          return map(nodes, mapProjectNodeToTreeNode);
        },
      },
      ...extraTypeQueries,
      ...directivesFolderAndProjectExtraQueries,
      ...phasesQueries,
      ...nonProdDirectiveTypeQueries,
      ...nonProdDirectiveQueries,
      ...prodDirectiveQueries,
      ...billQueries,
    ],
  });

  let nodes = flatMap(queries, (query) => query.data || []);
  nodes = filter(nodes, (n) => (!isEmpty(teamIds) && n.exData?.teamId ? includes(teamIds, n.exData.teamId) : true));

  const isLoading = some(queries, (query) => query.isLoading);
  const isError = some(queries, (query) => query.isError);

  return { data: nodes, isLoading, isError };
};
