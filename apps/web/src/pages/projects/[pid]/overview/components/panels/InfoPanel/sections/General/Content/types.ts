export type FormValues = {
  id: string;
  projectName: string;
  projectNumber: string;
  projectManagerId: string | null;
  projectTeamId: string | null;
  projectEstimatorId: string | null;
  estimateNumber: string;
  engineeringCalcsProject: boolean;
  leedProject: boolean;
  projectTypeId: string | null;
  projectAddress: string;
  projectScope: number;
  additionalNotes: string;
  projectStageId: string | null;
  projectCreationDateTime: Date | null;
  projectCompletionDateTime: Date | null;
  projectStatus: number;
};

export type FormKeys = keyof FormValues;
