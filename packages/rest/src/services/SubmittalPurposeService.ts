/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSubmittalPurposeDto } from '../models/PagedResultDtoOfSubmittalPurposeDto';
import type { SubmittalPurposeCreateDto } from '../models/SubmittalPurposeCreateDto';
import type { SubmittalPurposeDto } from '../models/SubmittalPurposeDto';
import type { SubmittalPurposeUpdateDto } from '../models/SubmittalPurposeUpdateDto';
import type { SubmittalPurposeUpsertDto } from '../models/SubmittalPurposeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubmittalPurposeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.SubmittalPurposeController.GetAsync (SpektrERP.HttpApi)
   * @returns SubmittalPurposeDto Success
   * @throws ApiError
   */
  public submittalPurposeGet({
id,
}: {
id: string,
}): CancelablePromise<SubmittalPurposeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittal-purposes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SubmittalPurposeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SubmittalPurposeDto Success
   * @throws ApiError
   */
  public submittalPurposeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SubmittalPurposeUpdateDto,
}): CancelablePromise<SubmittalPurposeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/submittal-purposes/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SubmittalPurposeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public submittalPurposeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/submittal-purposes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SubmittalPurposeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSubmittalPurposeDto Success
   * @throws ApiError
   */
  public submittalPurposeGetList({
sorting,
skipCount,
maxResultCount,
}: {
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSubmittalPurposeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittal-purposes',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.SubmittalPurposeController.CreateAsync (SpektrERP.HttpApi)
   * @returns SubmittalPurposeDto Success
   * @throws ApiError
   */
  public submittalPurposeCreate({
requestBody,
}: {
requestBody?: SubmittalPurposeCreateDto,
}): CancelablePromise<SubmittalPurposeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittal-purposes',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.SubmittalPurposeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns SubmittalPurposeDto Success
   * @throws ApiError
   */
  public submittalPurposeUpsert({
requestBody,
}: {
requestBody?: Array<SubmittalPurposeUpsertDto>,
}): CancelablePromise<Array<SubmittalPurposeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittal-purposes/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
