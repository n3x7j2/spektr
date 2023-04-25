/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSubmittalTypeDto } from '../models/PagedResultDtoOfSubmittalTypeDto';
import type { SubmittalTypeCreateDto } from '../models/SubmittalTypeCreateDto';
import type { SubmittalTypeDto } from '../models/SubmittalTypeDto';
import type { SubmittalTypeUpdateDto } from '../models/SubmittalTypeUpdateDto';
import type { SubmittalTypeUpsertDto } from '../models/SubmittalTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubmittalTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.SubmittalTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns SubmittalTypeDto Success
   * @throws ApiError
   */
  public submittalTypeGet({
id,
}: {
id: string,
}): CancelablePromise<SubmittalTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittal-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SubmittalTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SubmittalTypeDto Success
   * @throws ApiError
   */
  public submittalTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SubmittalTypeUpdateDto,
}): CancelablePromise<SubmittalTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/submittal-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SubmittalTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public submittalTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/submittal-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SubmittalTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSubmittalTypeDto Success
   * @throws ApiError
   */
  public submittalTypeGetList({
type,
sorting,
skipCount,
maxResultCount,
}: {
type?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSubmittalTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittal-types',
      query: {
        'Type': type,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.SubmittalTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns SubmittalTypeDto Success
   * @throws ApiError
   */
  public submittalTypeCreate({
requestBody,
}: {
requestBody?: SubmittalTypeCreateDto,
}): CancelablePromise<SubmittalTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittal-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.SubmittalTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns SubmittalTypeDto Success
   * @throws ApiError
   */
  public submittalTypeUpsert({
requestBody,
}: {
requestBody?: Array<SubmittalTypeUpsertDto>,
}): CancelablePromise<Array<SubmittalTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittal-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
