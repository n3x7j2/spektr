/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSubmittalDto } from '../models/PagedResultDtoOfSubmittalDto';
import type { SubmittalCreateDto } from '../models/SubmittalCreateDto';
import type { SubmittalDto } from '../models/SubmittalDto';
import type { SubmittalUpdateDto } from '../models/SubmittalUpdateDto';
import type { SubmittalUpsertDto } from '../models/SubmittalUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubmittalService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.SubmittalController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSubmittalDto Success
   * @throws ApiError
   */
  public submittalGetList({
statusId,
projectId,
submittalTypeId,
transmittalId,
projectDocumentTypeId,
submittalsPurposeId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
statusId?: string,
projectId?: string,
submittalTypeId?: string,
transmittalId?: string,
projectDocumentTypeId?: string,
submittalsPurposeId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSubmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittals',
      query: {
        'StatusId': statusId,
        'ProjectId': projectId,
        'SubmittalTypeId': submittalTypeId,
        'TransmittalId': transmittalId,
        'ProjectDocumentTypeId': projectDocumentTypeId,
        'SubmittalsPurposeId': submittalsPurposeId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.SubmittalController.CreateAsync (SpektrERP.HttpApi)
   * @returns SubmittalDto Success
   * @throws ApiError
   */
  public submittalCreate({
requestBody,
}: {
requestBody?: SubmittalCreateDto,
}): CancelablePromise<SubmittalDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittals',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SubmittalController.GetAsync (SpektrERP.HttpApi)
   * @returns SubmittalDto Success
   * @throws ApiError
   */
  public submittalGet({
id,
}: {
id: string,
}): CancelablePromise<SubmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittals/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SubmittalController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SubmittalDto Success
   * @throws ApiError
   */
  public submittalUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SubmittalUpdateDto,
}): CancelablePromise<SubmittalDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/submittals/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SubmittalController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public submittalDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/submittals/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update List
   * SpektrERP.Controllers.SubmittalController.UpdateListAsync (SpektrERP.HttpApi)
   * @returns SubmittalDto Success
   * @throws ApiError
   */
  public submittalUpdateList({
transmittalId,
requestBody,
}: {
transmittalId: string,
requestBody?: Array<SubmittalUpdateDto>,
}): CancelablePromise<Array<SubmittalDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/submittals/update-list/by-transmittal/{transmittalId}',
      path: {
        'transmittalId': transmittalId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.SubmittalController.UpsertAsync (SpektrERP.HttpApi)
   * @returns SubmittalDto Success
   * @throws ApiError
   */
  public submittalUpsert({
transmittalId,
requestBody,
}: {
transmittalId: string,
requestBody?: Array<SubmittalUpsertDto>,
}): CancelablePromise<Array<SubmittalDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittals/upserts/by-transmittal/{transmittalId}',
      path: {
        'transmittalId': transmittalId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
