/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfServiceTaskStatusDto } from '../models/PagedResultDtoOfServiceTaskStatusDto';
import type { ServiceTaskStatusCreateDto } from '../models/ServiceTaskStatusCreateDto';
import type { ServiceTaskStatusDto } from '../models/ServiceTaskStatusDto';
import type { ServiceTaskStatusUpdateDto } from '../models/ServiceTaskStatusUpdateDto';
import type { ServiceTaskStatusUpsertDto } from '../models/ServiceTaskStatusUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceTaskStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ServiceTaskStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskStatusDto Success
   * @throws ApiError
   */
  public serviceTaskStatusGet({
id,
}: {
id: string,
}): CancelablePromise<ServiceTaskStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-task-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ServiceTaskStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskStatusDto Success
   * @throws ApiError
   */
  public serviceTaskStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ServiceTaskStatusUpdateDto,
}): CancelablePromise<ServiceTaskStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/service-task-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ServiceTaskStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public serviceTaskStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/service-task-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ServiceTaskStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfServiceTaskStatusDto Success
   * @throws ApiError
   */
  public serviceTaskStatusGetList({
status,
isDefault,
isCompleted,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
status?: string,
isDefault?: boolean,
isCompleted?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfServiceTaskStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-task-statuses',
      query: {
        'Status': status,
        'IsDefault': isDefault,
        'IsCompleted': isCompleted,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ServiceTaskStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskStatusDto Success
   * @throws ApiError
   */
  public serviceTaskStatusCreate({
requestBody,
}: {
requestBody?: ServiceTaskStatusCreateDto,
}): CancelablePromise<ServiceTaskStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/service-task-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ServiceTaskStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskStatusDto Success
   * @throws ApiError
   */
  public serviceTaskStatusUpsert({
requestBody,
}: {
requestBody?: Array<ServiceTaskStatusUpsertDto>,
}): CancelablePromise<Array<ServiceTaskStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/service-task-statuses/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
