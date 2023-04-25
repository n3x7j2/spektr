/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectStatusUpdateMaterialFabricationAndDeliveryDto } from '../models/PagedResultDtoOfProjectStatusUpdateMaterialFabricationAndDeliveryDto';
import type { ProjectStatusUpdateMaterialFabricationAndDeliveryCreateDto } from '../models/ProjectStatusUpdateMaterialFabricationAndDeliveryCreateDto';
import type { ProjectStatusUpdateMaterialFabricationAndDeliveryDto } from '../models/ProjectStatusUpdateMaterialFabricationAndDeliveryDto';
import type { ProjectStatusUpdateMaterialFabricationAndDeliveryUpdateDto } from '../models/ProjectStatusUpdateMaterialFabricationAndDeliveryUpdateDto';
import type { ProjectStatusUpdateMaterialFabricationAndDeliveryUpsertDto } from '../models/ProjectStatusUpdateMaterialFabricationAndDeliveryUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectStatusUpdateMaterialFabricationAndDeliveryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialFabricationAndDeliveryController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialFabricationAndDeliveryGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectStatusUpdateMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update-material-fabrication-and-delivery/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialFabricationAndDeliveryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialFabricationAndDeliveryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectStatusUpdateMaterialFabricationAndDeliveryUpdateDto,
}): CancelablePromise<ProjectStatusUpdateMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-status-update-material-fabrication-and-delivery/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialFabricationAndDeliveryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialFabricationAndDeliveryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-status-update-material-fabrication-and-delivery/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialFabricationAndDeliveryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectStatusUpdateMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialFabricationAndDeliveryGetList({
projectStatusUpdateId,
sorting,
skipCount,
maxResultCount,
}: {
projectStatusUpdateId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectStatusUpdateMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update-material-fabrication-and-delivery',
      query: {
        'ProjectStatusUpdateId': projectStatusUpdateId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialFabricationAndDeliveryController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialFabricationAndDeliveryCreate({
requestBody,
}: {
requestBody?: ProjectStatusUpdateMaterialFabricationAndDeliveryCreateDto,
}): CancelablePromise<ProjectStatusUpdateMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update-material-fabrication-and-delivery',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialFabricationAndDeliveryController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialFabricationAndDeliveryUpsert({
projectStatusUpdateId,
requestBody,
}: {
projectStatusUpdateId: string,
requestBody?: Array<ProjectStatusUpdateMaterialFabricationAndDeliveryUpsertDto>,
}): CancelablePromise<Array<ProjectStatusUpdateMaterialFabricationAndDeliveryDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update-material-fabrication-and-delivery/upserts/{projectStatusUpdateId}',
      path: {
        'projectStatusUpdateId': projectStatusUpdateId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
