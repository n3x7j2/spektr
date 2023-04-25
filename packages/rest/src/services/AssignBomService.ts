/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignDetailImportedToBOMResultDto } from '../models/AssignDetailImportedToBOMResultDto';
import type { AssignExtrusionImportedToBOMResultDto } from '../models/AssignExtrusionImportedToBOMResultDto';
import type { AssignInventoryItemImportedToBOMResultDto } from '../models/AssignInventoryItemImportedToBOMResultDto';
import type { AssignProductImportedToBOMResultDto } from '../models/AssignProductImportedToBOMResultDto';
import type { BOMDataImportStagingProductDto } from '../models/BOMDataImportStagingProductDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssignBomService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Un Assigned Products
   * SpektrERP.Controllers.AssignBOMController.GetUnAssignedProducts (SpektrERP.HttpApi)
   * @returns BOMDataImportStagingProductDto Success
   * @throws ApiError
   */
  public assignBomGetUnAssignedProducts({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<BOMDataImportStagingProductDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/assign-boms/{projectId}/un-assign-products',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Assign Product Imported to Bom
   * SpektrERP.Controllers.AssignBOMController.AssignProductImportedToBOM (SpektrERP.HttpApi)
   * @returns AssignProductImportedToBOMResultDto Success
   * @throws ApiError
   */
  public assignBomAssignProductImportedToBom({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<string>,
}): CancelablePromise<AssignProductImportedToBOMResultDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/assign-boms/{projectId}/assign-products',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Assign Detail Imported to Bom
   * SpektrERP.Controllers.AssignBOMController.AssignDetailImportedToBOM (SpektrERP.HttpApi)
   * @returns AssignDetailImportedToBOMResultDto Success
   * @throws ApiError
   */
  public assignBomAssignDetailImportedToBom({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<string>,
}): CancelablePromise<AssignDetailImportedToBOMResultDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/assign-boms/{projectId}/assign-details',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Assign Extrusion Imported to Bom
   * SpektrERP.Controllers.AssignBOMController.AssignExtrusionImportedToBOM (SpektrERP.HttpApi)
   * @returns AssignExtrusionImportedToBOMResultDto Success
   * @throws ApiError
   */
  public assignBomAssignExtrusionImportedToBom({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<string>,
}): CancelablePromise<AssignExtrusionImportedToBOMResultDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/assign-boms/{projectId}/assign-extrusions',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Assign Inventory Item Imported to Bom
   * SpektrERP.Controllers.AssignBOMController.AssignInventoryItemImportedToBOM (SpektrERP.HttpApi)
   * @returns AssignInventoryItemImportedToBOMResultDto Success
   * @throws ApiError
   */
  public assignBomAssignInventoryItemImportedToBom({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<string>,
}): CancelablePromise<AssignInventoryItemImportedToBOMResultDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/assign-boms/{projectId}/assign-inventory-items',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
