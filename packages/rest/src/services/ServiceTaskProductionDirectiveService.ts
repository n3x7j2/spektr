/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfServiceTaskProductionDirectiveDto } from '../models/PagedResultDtoOfServiceTaskProductionDirectiveDto';
import type { ServiceTaskProductionDirectiveCreateDto } from '../models/ServiceTaskProductionDirectiveCreateDto';
import type { ServiceTaskProductionDirectiveDto } from '../models/ServiceTaskProductionDirectiveDto';
import type { ServiceTaskProductionDirectiveUpdateDto } from '../models/ServiceTaskProductionDirectiveUpdateDto';
import type { ServiceTaskProductionDirectiveUpsertDto } from '../models/ServiceTaskProductionDirectiveUpsertDto';
import type { ServiceTaskProductionDirectiveUpsertResultDto } from '../models/ServiceTaskProductionDirectiveUpsertResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceTaskProductionDirectiveService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ServiceTaskProductionDirectiveController.GetAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskProductionDirectiveDto Success
   * @throws ApiError
   */
  public serviceTaskProductionDirectiveGet({
id,
}: {
id: string,
}): CancelablePromise<ServiceTaskProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-task-production-directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ServiceTaskProductionDirectiveController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskProductionDirectiveDto Success
   * @throws ApiError
   */
  public serviceTaskProductionDirectiveUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ServiceTaskProductionDirectiveUpdateDto,
}): CancelablePromise<ServiceTaskProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/service-task-production-directives/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ServiceTaskProductionDirectiveController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public serviceTaskProductionDirectiveDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/service-task-production-directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ServiceTaskProductionDirectiveController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfServiceTaskProductionDirectiveDto Success
   * @throws ApiError
   */
  public serviceTaskProductionDirectiveGetList({
disablePagination,
serviceTaskId,
productionDirectiveId,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
serviceTaskId?: string,
productionDirectiveId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfServiceTaskProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-task-production-directives',
      query: {
        'DisablePagination': disablePagination,
        'ServiceTaskId': serviceTaskId,
        'ProductionDirectiveId': productionDirectiveId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ServiceTaskProductionDirectiveController.CreateAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskProductionDirectiveDto Success
   * @throws ApiError
   */
  public serviceTaskProductionDirectiveCreate({
requestBody,
}: {
requestBody?: ServiceTaskProductionDirectiveCreateDto,
}): CancelablePromise<ServiceTaskProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/service-task-production-directives',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ServiceTaskProductionDirectiveController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskProductionDirectiveUpsertResultDto Success
   * @throws ApiError
   */
  public serviceTaskProductionDirectiveUpsert({
requestBody,
}: {
requestBody?: ServiceTaskProductionDirectiveUpsertDto,
}): CancelablePromise<ServiceTaskProductionDirectiveUpsertResultDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/service-task-production-directives/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
