/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveStatusCreateDto } from '../models/DirectiveStatusCreateDto';
import type { DirectiveStatusDropDownDtoOfGuid } from '../models/DirectiveStatusDropDownDtoOfGuid';
import type { DirectiveStatusDto } from '../models/DirectiveStatusDto';
import type { DirectiveStatusUpdateDto } from '../models/DirectiveStatusUpdateDto';
import type { DirectiveStatusUpsertDto } from '../models/DirectiveStatusUpsertDto';
import type { PagedResultDtoOfDirectiveStatusDto } from '../models/PagedResultDtoOfDirectiveStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveStatusDto Success
   * @throws ApiError
   */
  public directiveStatusGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DirectiveStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DirectiveStatusDto Success
   * @throws ApiError
   */
  public directiveStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DirectiveStatusUpdateDto,
}): CancelablePromise<DirectiveStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directive-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DirectiveStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public directiveStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/directive-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveStatusDto Success
   * @throws ApiError
   */
  public directiveStatusGetList({
directiveTypeId,
isDefaultStatus,
isCompletedStatus,
directiveStatusName,
sorting,
skipCount,
maxResultCount,
}: {
directiveTypeId?: string,
isDefaultStatus?: boolean,
isCompletedStatus?: boolean,
directiveStatusName?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-statuses',
      query: {
        'DirectiveTypeId': directiveTypeId,
        'IsDefaultStatus': isDefaultStatus,
        'IsCompletedStatus': isCompletedStatus,
        'DirectiveStatusName': directiveStatusName,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DirectiveStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns DirectiveStatusDto Success
   * @throws ApiError
   */
  public directiveStatusCreate({
requestBody,
}: {
requestBody?: DirectiveStatusCreateDto,
}): CancelablePromise<DirectiveStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Directive Status Look up
   * SpektrERP.Controllers.DirectiveStatusController.GetDirectiveStatusLookUpAsync (SpektrERP.HttpApi)
   * @returns DirectiveStatusDropDownDtoOfGuid Success
   * @throws ApiError
   */
  public directiveStatusGetDirectiveStatusLookUp({
directiveTypeId,
searchKey,
}: {
directiveTypeId?: string,
searchKey?: string,
}): CancelablePromise<Array<DirectiveStatusDropDownDtoOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/directive-statuses',
      query: {
        'DirectiveTypeId': directiveTypeId,
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.DirectiveStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns DirectiveStatusDto Success
   * @throws ApiError
   */
  public directiveStatusUpsert({
requestBody,
}: {
requestBody?: Array<DirectiveStatusUpsertDto>,
}): CancelablePromise<Array<DirectiveStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-statuses/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
