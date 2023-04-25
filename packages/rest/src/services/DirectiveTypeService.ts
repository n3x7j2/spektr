/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveCategory } from '../models/DirectiveCategory';
import type { DirectiveTypeCreateDto } from '../models/DirectiveTypeCreateDto';
import type { DirectiveTypeDropDownItemDto } from '../models/DirectiveTypeDropDownItemDto';
import type { DirectiveTypeDto } from '../models/DirectiveTypeDto';
import type { DirectiveTypeUpdateDto } from '../models/DirectiveTypeUpdateDto';
import type { DirectiveTypeUpsertDto } from '../models/DirectiveTypeUpsertDto';
import type { PagedResultDtoOfDirectiveTypeDto } from '../models/PagedResultDtoOfDirectiveTypeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveTypeDto Success
   * @throws ApiError
   */
  public directiveTypeGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DirectiveTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DirectiveTypeDto Success
   * @throws ApiError
   */
  public directiveTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DirectiveTypeUpdateDto,
}): CancelablePromise<DirectiveTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directive-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DirectiveTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public directiveTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/directive-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveTypeDto Success
   * @throws ApiError
   */
  public directiveTypeGetList({
directiveTypeName,
directiveCategory,
sorting,
skipCount,
maxResultCount,
}: {
directiveTypeName?: string,
directiveCategory?: DirectiveCategory,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-types',
      query: {
        'DirectiveTypeName': directiveTypeName,
        'DirectiveCategory': directiveCategory,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DirectiveTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns DirectiveTypeDto Success
   * @throws ApiError
   */
  public directiveTypeCreate({
requestBody,
}: {
requestBody?: DirectiveTypeCreateDto,
}): CancelablePromise<DirectiveTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Directive Type
   * SpektrERP.Controllers.DirectiveTypeController.GetListDropDownDirectiveType (SpektrERP.HttpApi)
   * @returns DirectiveTypeDropDownItemDto Success
   * @throws ApiError
   */
  public directiveTypeGetListDropDownDirectiveType({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DirectiveTypeDropDownItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/directive-types',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.DirectiveTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns DirectiveTypeDto Success
   * @throws ApiError
   */
  public directiveTypeUpsert({
requestBody,
}: {
requestBody?: Array<DirectiveTypeUpsertDto>,
}): CancelablePromise<Array<DirectiveTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
