import { Box, Stack } from '@mui/material';
import { NodeTypes, Segments } from '@spektr/common';
import { TreeNode, TreeView } from '@spektr/treeview';
import { filter, includes, replace, some } from 'lodash';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'react-use';

import { useQueryParams } from '~/hooks/useQueryParams';

import TreeNodeAllProjects from './components/TreeNodeAllProjects';
import TreeNodeLabel from './components/TreeNodeLabel';
import TreeNodeSearch from './components/TreeNodeSearch';
import TreeNodeTeams from './components/TreeNodeTeams';
import { useGetProjectNodes, useProjectNodeExpanded, useProjectNodeParams, useTreeRef } from './hooks';

interface ProjectTreeProps {
  tab: 'projects' | 'favourites';
}

const ProjectTree = ({ tab }: ProjectTreeProps) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [, setTreeRef] = useTreeRef();
  const [loading, setLoading] = useState<string[]>([]);
  const [expanded, setExpanded] = useProjectNodeExpanded();
  const [selected, setSelected] = useState<string | undefined>();
  const [projectNodeParams, setProjectNodeParams] = useProjectNodeParams();
  const { pid: projectId } = useQueryParams('pid');
  const { pathname } = useRouter();

  const treeRef = useRef();

  let { data: projectNodes, isLoading: isLoadingNodes } = useGetProjectNodes(tab);

  useDebounce(
    () => {
      setProjectNodeParams({
        ...projectNodeParams,
        searchKey,
      });
    },
    300,
    [searchKey],
  );

  const changeProjectNodeParams = (node: TreeNode) => {
    switch (node.nodeType) {
      case NodeTypes.Project: {
        const currentProjectIds = projectNodeParams.projectIds || [];
        if (!includes(currentProjectIds, node.id)) {
          setProjectNodeParams({
            ...projectNodeParams,
            projectIds: [...currentProjectIds, node.id],
          });
        }
        break;
      }
      case NodeTypes.MainScope:
      case NodeTypes.ExtraType: {
        const currentExtraTypes = projectNodeParams.extraTypes || [];
        const isExisted = some(
          currentExtraTypes,
          (e) => e.extraTypeId === node.id && e.projectId === node.parentNodeId!,
        );
        if (!isExisted) {
          setProjectNodeParams({
            ...projectNodeParams,
            extraTypes: [
              ...currentExtraTypes,
              {
                isMainScope: node.nodeType === NodeTypes.MainScope,
                projectId: node.parentNodeId!,
                extraTypeId: node.id,
              },
            ],
          });
        }

        break;
      }
      case NodeTypes.ExtraScope: {
        const currentExtraIds = projectNodeParams.extraIds || [];
        if (!includes(currentExtraIds, node.id)) {
          setProjectNodeParams({
            ...projectNodeParams,
            extraIds: [...currentExtraIds, node.id],
          });
        }
        break;
      }
      case NodeTypes.DirectivesFolder: {
        const currentPhaseIds = projectNodeParams.npPhaseIds || [];
        if (!includes(currentPhaseIds, node.id)) {
          setProjectNodeParams({
            ...projectNodeParams,
            npPhaseIds: [...currentPhaseIds, node.id],
          });
        }
        break;
      }
      case NodeTypes.NonProductionDirectiveFolder: {
        const currentDirectiveTypes = projectNodeParams.directiveTypes || [];
        const isExisted = some(
          currentDirectiveTypes,
          (e) => e.phaseId === node.parentNodeId! && e.directiveTypeId === node.id,
        );
        if (!isExisted) {
          setProjectNodeParams({
            ...projectNodeParams,
            directiveTypes: [
              ...currentDirectiveTypes,
              {
                phaseId: node.parentNodeId!,
                directiveTypeId: node.id,
              },
            ],
          });
        }
        break;
      }
      case NodeTypes.Phase: {
        const currentPhaseIds = projectNodeParams.pPhaseIds || [];
        if (!includes(currentPhaseIds, node.id)) {
          setProjectNodeParams({
            ...projectNodeParams,
            pPhaseIds: [...currentPhaseIds, node.id],
          });
        }
        break;
      }
      case NodeTypes.ProductionDirectiveDetail: {
        const currentDirectiveIds = projectNodeParams.directiveIds || [];
        const isExisted = some(currentDirectiveIds, (e) => e.directiveId === node.id);
        if (!isExisted) {
          setProjectNodeParams({
            ...projectNodeParams,
            directiveIds: [...currentDirectiveIds, { directiveId: node.id, nodeId: node.nodeId }],
          });
        }
        break;
      }
    }
  };

  const handleToggle = (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => {
    event.stopPropagation();
    if (node.hasChildren) {
      let newExpanded: string[];
      changeProjectNodeParams(node);
      if (includes(expanded, node.nodeId)) {
        newExpanded = filter(expanded, (nid) => nid !== node.nodeId);
      } else {
        newExpanded = [...expanded, node.nodeId];
        setLoading([...loading, node.nodeId]);
      }
      setExpanded(newExpanded);
    }
  };

  const handleSelect = (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => {
    event.stopPropagation();
    if (node.nodeType === NodeTypes.Project) {
      Router.push(replace(pathname, '[pid]', node.nodeId));
    }
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchKey(e.target.value);
  }, []);

  useEffect(() => {
    return () => {
      setLoading([]);
    };
  }, []);

  useEffect(() => {
    if (!isLoadingNodes) {
      setLoading([]);
    }
  }, [isLoadingNodes, expanded]);

  useEffect(() => {
    if (projectId !== Segments.All) {
      setSelected(projectId);
    } else {
      setSelected(undefined);
    }
  }, [projectId]);

  useEffect(() => {
    if (treeRef.current) {
      setTreeRef(treeRef);
    }
  }, [setTreeRef]);

  return (
    <Stack sx={{ height: 'calc(100vh - 202px)' }}>
      <Box sx={{ pl: 2, pr: 3, py: 1, borderBottom: '1px solid #e3e5e5' }}>
        <TreeNodeSearch fullWidth value={searchKey} onChange={handleChange} />
      </Box>
      <Box sx={{ pl: 1, pr: 2, borderBottom: '1px solid #e3e5e5' }}>
        <TreeNodeTeams />
      </Box>
      <Box sx={{ pl: 1, pr: 2, borderBottom: '1px solid #e3e5e5' }}>
        <TreeNodeAllProjects />
      </Box>
      <TreeView
        ref={treeRef}
        nodes={projectNodes}
        wrapperStyles={{ height: '100%' }}
        loading={loading}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        TreeItemProps={{
          label: TreeNodeLabel,
        }}
      />
    </Stack>
  );
};

export default ProjectTree;
