import { ProjectDto } from '@spektr/rest';

import { toDate } from '~/helpers';

import { FormValues } from './types';

export const defaultValues: FormValues = {
  id: '',
  projectName: '',
  projectNumber: '',
  projectManagerId: null,
  projectTeamId: null,
  projectEstimatorId: null,
  estimateNumber: '',
  engineeringCalcsProject: false,
  leedProject: false,
  projectTypeId: null,
  projectAddress: '',
  projectScope: -1,
  additionalNotes: '',
  projectStageId: null,
  projectCreationDateTime: null,
  projectCompletionDateTime: null,
  projectStatus: -1,
};

export const mapProjectToFormFields = (project: ProjectDto): FormValues => {
  return {
    id: project.id || '',
    projectName: project.projectName || '',
    projectNumber: project.projectNumber || '',
    projectManagerId: project.projectManagerId || null,
    projectTeamId: project.projectTeamId || null,
    projectEstimatorId: project.projectEstimatorId || null,
    estimateNumber: project.estimateNumber || '',
    engineeringCalcsProject: project.engineeringCalcsProject || false,
    leedProject: project.leedProject || false,
    projectTypeId: project.projectTypeId || null,
    projectAddress: project.projectAddress || '',
    projectScope: project.projectScope || 0,
    additionalNotes: project.additionalNotes || '',
    projectStageId: project.projectStageId || null,
    projectCreationDateTime: toDate(project.projectCreationDateTime),
    projectCompletionDateTime: toDate(project.projectCompletionDateTime),
    projectStatus: project.projectStatus || 0,
  };
};
