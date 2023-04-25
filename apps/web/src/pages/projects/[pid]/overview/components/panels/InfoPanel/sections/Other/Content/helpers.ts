import { ProjectDto } from '@spektr/rest';

import { FormValues } from './types';

export const defaultValues: FormValues = {
  id: '',
  projectFolder: '',
  specialExclusions: '',
  specialInclusions: '',
};

export const mapProjectToFormFields = (project: ProjectDto): FormValues => {
  return {
    id: project.id || '',
    projectFolder: project.projectFolder || '',
    specialExclusions: project.specialExclusions || '',
    specialInclusions: project.specialInclusions || '',
  };
};
