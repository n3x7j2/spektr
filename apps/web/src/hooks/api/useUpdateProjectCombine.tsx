import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { ProjectUpdateCombineDto } from '@spektr/rest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useUpdateProjectCombine = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (formData: { id: string; body: ProjectUpdateCombineDto }) => {
      return await client.project.projectUpdateCombine({
        id: formData.id,
        requestBody: formData.body,
      });
    },
    onSuccess: async (_data, { id, body }) => {
      if (body.updateProject) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProject, id] });
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjects] });
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjectNodes] });
      }

      if (body.upsertProjectSchedules) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetSchedules, id] });
      }

      if (body.upsertProjectEstimates) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetEstimates, id] });
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetEstimateAllProducts, id] });
      }

      if (body.upsertProjectWallTypeInformations) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetWallTypes, id] });
      }

      if (body.upsertProjectAllowances) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.GetAllowances, id] });
      }

      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The project updated successfully',
      });
    },
  });
};
