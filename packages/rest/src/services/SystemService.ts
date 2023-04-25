/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSystemDto } from '../models/PagedResultDtoOfSystemDto';
import type { SystemCreateDto } from '../models/SystemCreateDto';
import type { SystemDto } from '../models/SystemDto';
import type { SystemUpdateDto } from '../models/SystemUpdateDto';
import type { SystemUpsertDto } from '../models/SystemUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SystemService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.SystemController.CreateAsync (SpektrERP.HttpApi)
   * @returns SystemDto Success
   * @throws ApiError
   */
  public systemCreate({
requestBody,
}: {
requestBody?: SystemCreateDto,
}): CancelablePromise<SystemDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/systems',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SystemController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSystemDto Success
   * @throws ApiError
   */
  public systemGetList({
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
}): CancelablePromise<PagedResultDtoOfSystemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/systems',
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
   * Delete
   * SpektrERP.Controllers.SystemController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public systemDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/systems/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SystemController.GetAsync (SpektrERP.HttpApi)
   * @returns SystemDto Success
   * @throws ApiError
   */
  public systemGet({
id,
}: {
id: string,
}): CancelablePromise<SystemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/systems/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SystemController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SystemDto Success
   * @throws ApiError
   */
  public systemUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SystemUpdateDto,
}): CancelablePromise<SystemDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/systems/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.SystemController.UpsertAsync (SpektrERP.HttpApi)
   * @returns SystemDto Success
   * @throws ApiError
   */
  public systemUpsert({
requestBody,
}: {
requestBody?: Array<SystemUpsertDto>,
}): CancelablePromise<Array<SystemDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/systems/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
