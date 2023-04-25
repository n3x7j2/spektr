/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfServiceTypeDto } from '../models/PagedResultDtoOfServiceTypeDto';
import type { ServiceTypeCreateDto } from '../models/ServiceTypeCreateDto';
import type { ServiceTypeDto } from '../models/ServiceTypeDto';
import type { ServiceTypeUpdateDto } from '../models/ServiceTypeUpdateDto';
import type { ServiceTypeUpsertDto } from '../models/ServiceTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ServiceTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ServiceTypeDto Success
   * @throws ApiError
   */
  public serviceTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ServiceTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ServiceTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ServiceTypeDto Success
   * @throws ApiError
   */
  public serviceTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ServiceTypeUpdateDto,
}): CancelablePromise<ServiceTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/service-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ServiceTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public serviceTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/service-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ServiceTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfServiceTypeDto Success
   * @throws ApiError
   */
  public serviceTypeGetList({
name,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfServiceTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-types',
      query: {
        'Name': name,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ServiceTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ServiceTypeDto Success
   * @throws ApiError
   */
  public serviceTypeCreate({
requestBody,
}: {
requestBody?: ServiceTypeCreateDto,
}): CancelablePromise<ServiceTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/service-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ServiceTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ServiceTypeDto Success
   * @throws ApiError
   */
  public serviceTypeUpsert({
requestBody,
}: {
requestBody?: Array<ServiceTypeUpsertDto>,
}): CancelablePromise<Array<ServiceTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/service-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
