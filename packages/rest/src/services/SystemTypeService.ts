/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfSystemTypeDto } from '../models/PagedResultDtoOfSystemTypeDto';
import type { SystemTypeCreateDto } from '../models/SystemTypeCreateDto';
import type { SystemTypeDto } from '../models/SystemTypeDto';
import type { SystemTypeUpdateDto } from '../models/SystemTypeUpdateDto';
import type { SystemTypeUpsertDto } from '../models/SystemTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SystemTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.SystemTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns SystemTypeDto Success
   * @throws ApiError
   */
  public systemTypeCreate({
requestBody,
}: {
requestBody?: SystemTypeCreateDto,
}): CancelablePromise<SystemTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/system-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SystemTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSystemTypeDto Success
   * @throws ApiError
   */
  public systemTypeGetList({
typeName,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
typeName?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSystemTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/system-types',
      query: {
        'TypeName': typeName,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SystemTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public systemTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/system-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SystemTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns SystemTypeDto Success
   * @throws ApiError
   */
  public systemTypeGet({
id,
}: {
id: string,
}): CancelablePromise<SystemTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/system-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SystemTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SystemTypeDto Success
   * @throws ApiError
   */
  public systemTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SystemTypeUpdateDto,
}): CancelablePromise<SystemTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/system-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down System Type
   * SpektrERP.Controllers.SystemTypeController.GetListDropDownSystemTypeAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public systemTypeGetListDropDownSystemType({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/system-types',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.SystemTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns SystemTypeDto Success
   * @throws ApiError
   */
  public systemTypeUpsert({
requestBody,
}: {
requestBody?: Array<SystemTypeUpsertDto>,
}): CancelablePromise<Array<SystemTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/system-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
