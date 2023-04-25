/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSubmittalStatusDto } from '../models/PagedResultDtoOfSubmittalStatusDto';
import type { SubmittalStatusCreateDto } from '../models/SubmittalStatusCreateDto';
import type { SubmittalStatusDto } from '../models/SubmittalStatusDto';
import type { SubmittalStatusUpdateDto } from '../models/SubmittalStatusUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubmittalStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.SubmittalStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSubmittalStatusDto Success
   * @throws ApiError
   */
  public submittalStatusGetList({
submittalStatus,
isDefaultStatus,
isCompletedStatus,
sorting,
skipCount,
maxResultCount,
}: {
submittalStatus?: string,
isDefaultStatus?: boolean,
isCompletedStatus?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSubmittalStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittals/statuses',
      query: {
        'SubmittalStatus': submittalStatus,
        'IsDefaultStatus': isDefaultStatus,
        'IsCompletedStatus': isCompletedStatus,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.SubmittalStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns SubmittalStatusDto Success
   * @throws ApiError
   */
  public submittalStatusCreate({
requestBody,
}: {
requestBody?: SubmittalStatusCreateDto,
}): CancelablePromise<SubmittalStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittals/statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SubmittalStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns SubmittalStatusDto Success
   * @throws ApiError
   */
  public submittalStatusGet({
id,
}: {
id: string,
}): CancelablePromise<SubmittalStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittals/statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SubmittalStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SubmittalStatusDto Success
   * @throws ApiError
   */
  public submittalStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SubmittalStatusUpdateDto,
}): CancelablePromise<SubmittalStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/submittals/statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SubmittalStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public submittalStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/submittals/statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

}
