/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveCategory } from './DirectiveCategory';

export type ProductionDirectiveFullDto = {
  directiveId?: string;
  formattedDirectiveNumber?: string | null;
  phaseId?: string;
  directiveTypeId?: string;
  createdById?: string;
  directiveStatusId?: string;
  subject?: string | null;
  creationTime?: string;
  description?: string | null;
  estimatedTaskTime?: string | null;
  estimatedReviewTime?: string | null;
  directiveVersion?: number;
  dateCompleted?: string | null;
  directiveCategory?: DirectiveCategory;
  id?: string;
  productionDirectiveId?: string;
  projectSystemId?: string;
  shippingDate?: string;
  shippingLocationId?: string;
  shippingById?: string | null;
  carrierType?: string | null;
  shippingComments?: string | null;
  cratingInstructions?: string | null;
  constructionDrawingQty?: string | null;
  shippableUnits?: number;
  comments?: string | null;
  release?: string | null;
  designerCompletionDate?: string | null;
  assignedToId?: string;
  lastModificationTime?: string | null;
};
