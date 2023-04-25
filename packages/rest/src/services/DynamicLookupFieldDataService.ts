/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicLookupFieldDataCreateDto } from '../models/DynamicLookupFieldDataCreateDto';
import type { DynamicLookupFieldDataDropdownItemDto } from '../models/DynamicLookupFieldDataDropdownItemDto';
import type { DynamicLookupFieldDataDto } from '../models/DynamicLookupFieldDataDto';
import type { DynamicLookupFieldDataSourceDropdownItemDto } from '../models/DynamicLookupFieldDataSourceDropdownItemDto';
import type { DynamicLookupFieldDataUpdateDto } from '../models/DynamicLookupFieldDataUpdateDto';
import type { PagedResultDtoOfDynamicLookupFieldDataDto } from '../models/PagedResultDtoOfDynamicLookupFieldDataDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DynamicLookupFieldDataService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DynamicLookupFieldDataController.GetAsync (SpektrERP.HttpApi)
   * @returns DynamicLookupFieldDataDto Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataGet({
id,
}: {
id: string,
}): CancelablePromise<DynamicLookupFieldDataDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/dynamic-lookup-field/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DynamicLookupFieldDataController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DynamicLookupFieldDataDto Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DynamicLookupFieldDataUpdateDto,
}): CancelablePromise<DynamicLookupFieldDataDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/dynamic-lookup-field/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DynamicLookupFieldDataController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/dynamic-lookup-field/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DynamicLookupFieldDataController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDynamicLookupFieldDataDto Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataGetList({
fieldName,
isIncludeDraft,
sorting,
skipCount,
maxResultCount,
}: {
fieldName?: string,
isIncludeDraft?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDynamicLookupFieldDataDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/dynamic-lookup-field',
      query: {
        'FieldName': fieldName,
        'IsIncludeDraft': isIncludeDraft,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DynamicLookupFieldDataController.CreateAsync (SpektrERP.HttpApi)
   * @returns DynamicLookupFieldDataDto Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataCreate({
requestBody,
}: {
requestBody?: DynamicLookupFieldDataCreateDto,
}): CancelablePromise<DynamicLookupFieldDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dynamic-lookup-field',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Data Source List
   * SpektrERP.Controllers.DynamicLookupFieldDataController.GetDataSourceListAsync (SpektrERP.HttpApi)
   * @returns DynamicLookupFieldDataSourceDropdownItemDto Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataGetDataSourceList(): CancelablePromise<Array<DynamicLookupFieldDataSourceDropdownItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/dynamic-lookup-field/data-sources',
    });
  }

  /**
   * Get All
   * SpektrERP.Controllers.DynamicLookupFieldDataController.GetAllAsync (SpektrERP.HttpApi)
   * @returns DynamicLookupFieldDataDropdownItemDto Success
   * @throws ApiError
   */
  public dynamicLookupFieldDataGetAll({
fieldName,
isIncludeDraft,
}: {
fieldName?: string,
isIncludeDraft?: boolean,
}): CancelablePromise<Array<DynamicLookupFieldDataDropdownItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/dynamic-lookup-field/all',
      query: {
        'FieldName': fieldName,
        'IsIncludeDraft': isIncludeDraft,
      },
    });
  }

}
