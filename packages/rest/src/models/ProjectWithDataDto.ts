/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DirectiveDto } from './DirectiveDto';
import type { EntityLinkDto } from './EntityLinkDto';
import type { InventoryItemGroupDto } from './InventoryItemGroupDto';
import type { NonProductionDirectiveDto } from './NonProductionDirectiveDto';
import type { OrderAcknowledgementDto } from './OrderAcknowledgementDto';
import type { ProductionDirectiveDto } from './ProductionDirectiveDto';
import type { ProjectDto } from './ProjectDto';
import type { ProjectExtraDto } from './ProjectExtraDto';
import type { ProjectPhaseDto } from './ProjectPhaseDto';
import type { ProjectShippingLocationDto } from './ProjectShippingLocationDto';
import type { ProjectStatusUpdateDto } from './ProjectStatusUpdateDto';
import type { ProjectSystemComponentDto } from './ProjectSystemComponentDto';
import type { ProjectSystemDto } from './ProjectSystemDto';
import type { PurchaseRequestDto } from './PurchaseRequestDto';
import type { RFIDto } from './RFIDto';
import type { ServiceTaskDto } from './ServiceTaskDto';
import type { ServiceTaskProductionDirectiveUpsertResultDto } from './ServiceTaskProductionDirectiveUpsertResultDto';
import type { SubmittalDto } from './SubmittalDto';
import type { TransmittalDto } from './TransmittalDto';

export type ProjectWithDataDto = {
  project?: ProjectDto;
  shippingLocations?: Array<ProjectShippingLocationDto> | null;
  extra?: ProjectExtraDto;
  phase?: ProjectPhaseDto;
  directive?: DirectiveDto;
  productionDirective?: ProductionDirectiveDto;
  nonProductionDirective?: NonProductionDirectiveDto;
  inventoryItemGroup?: InventoryItemGroupDto;
  projectSystem?: ProjectSystemDto;
  projectSystemComponent?: ProjectSystemComponentDto;
  purchaseRequest?: PurchaseRequestDto;
  projectStatusUpdate?: ProjectStatusUpdateDto;
  orderAcknowledgement?: OrderAcknowledgementDto;
  transmittal?: TransmittalDto;
  submittal?: SubmittalDto;
  rfi?: RFIDto;
  serviceTask?: ServiceTaskDto;
  entityLinks?: Array<EntityLinkDto> | null;
  serviceTaskProductionDirectiveUpsertResult?: ServiceTaskProductionDirectiveUpsertResultDto;
};
