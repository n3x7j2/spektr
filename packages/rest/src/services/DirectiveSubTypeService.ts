/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveSubTypeCreateDto } from '../models/DirectiveSubTypeCreateDto';
import type { DirectiveSubTypeDto } from '../models/DirectiveSubTypeDto';
import type { DirectiveSubTypeUpdateDto } from '../models/DirectiveSubTypeUpdateDto';
import type { DirectiveSubTypeUpsertDto } from '../models/DirectiveSubTypeUpsertDto';
import type { PagedResultDtoOfDirectiveSubTypeDto } from '../models/PagedResultDtoOfDirectiveSubTypeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveSubTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveSubTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveSubTypeDto Success
   * @throws ApiError
   */
  public directiveSubTypeGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveSubTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-sub-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DirectiveSubTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DirectiveSubTypeDto Success
   * @throws ApiError
   */
  public directiveSubTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DirectiveSubTypeUpdateDto,
}): CancelablePromise<DirectiveSubTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directive-sub-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DirectiveSubTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public directiveSubTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/directive-sub-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveSubTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveSubTypeDto Success
   * @throws ApiError
   */
  public directiveSubTypeGetList({
directiveTypeId,
subTypeName,
sorting,
skipCount,
maxResultCount,
}: {
directiveTypeId?: string,
subTypeName?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveSubTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-sub-types',
      query: {
        'DirectiveTypeId': directiveTypeId,
        'SubTypeName': subTypeName,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DirectiveSubTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns DirectiveSubTypeDto Success
   * @throws ApiError
   */
  public directiveSubTypeCreate({
requestBody,
}: {
requestBody?: DirectiveSubTypeCreateDto,
}): CancelablePromise<DirectiveSubTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-sub-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.DirectiveSubTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns DirectiveSubTypeDto Success
   * @throws ApiError
   */
  public directiveSubTypeUpsert({
requestBody,
}: {
requestBody?: Array<DirectiveSubTypeUpsertDto>,
}): CancelablePromise<Array<DirectiveSubTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-sub-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
