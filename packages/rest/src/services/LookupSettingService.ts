/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LookupSettingCreateDto } from '../models/LookupSettingCreateDto';
import type { LookupSettingDto } from '../models/LookupSettingDto';
import type { LookupSettingUpdateDto } from '../models/LookupSettingUpdateDto';
import type { PagedResultDtoOfLookupSettingDto } from '../models/PagedResultDtoOfLookupSettingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LookupSettingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.LookupSettingController.GetAsync (SpektrERP.HttpApi)
   * @returns LookupSettingDto Success
   * @throws ApiError
   */
  public lookupSettingGet({
id,
}: {
id: string,
}): CancelablePromise<LookupSettingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup-settings/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.LookupSettingController.UpdateAsync (SpektrERP.HttpApi)
   * @returns LookupSettingDto Success
   * @throws ApiError
   */
  public lookupSettingUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: LookupSettingUpdateDto,
}): CancelablePromise<LookupSettingDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/lookup-settings/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.LookupSettingController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public lookupSettingDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/lookup-settings/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.LookupSettingController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfLookupSettingDto Success
   * @throws ApiError
   */
  public lookupSettingGetList({
moduleName,
subModuleName,
lookupName,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
moduleName?: string,
subModuleName?: string,
lookupName?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfLookupSettingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup-settings',
      query: {
        'ModuleName': moduleName,
        'SubModuleName': subModuleName,
        'LookupName': lookupName,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.LookupSettingController.CreateAsync (SpektrERP.HttpApi)
   * @returns LookupSettingDto Success
   * @throws ApiError
   */
  public lookupSettingCreate({
requestBody,
}: {
requestBody?: LookupSettingCreateDto,
}): CancelablePromise<LookupSettingDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/lookup-settings',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
