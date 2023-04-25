/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSystemAttributeDto } from '../models/PagedResultDtoOfSystemAttributeDto';
import type { SystemAttributeCreateDto } from '../models/SystemAttributeCreateDto';
import type { SystemAttributeDto } from '../models/SystemAttributeDto';
import type { SystemAttributeUpdateDto } from '../models/SystemAttributeUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SystemAttributeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.SystemAttributeController.CreateAsync (SpektrERP.HttpApi)
   * @returns SystemAttributeDto Success
   * @throws ApiError
   */
  public systemAttributeCreate({
requestBody,
}: {
requestBody?: SystemAttributeCreateDto,
}): CancelablePromise<SystemAttributeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/system-attributes',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SystemAttributeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSystemAttributeDto Success
   * @throws ApiError
   */
  public systemAttributeGetList({
attributeName,
systemId,
sorting,
skipCount,
maxResultCount,
}: {
attributeName?: string,
systemId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSystemAttributeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/system-attributes',
      query: {
        'AttributeName': attributeName,
        'SystemId': systemId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SystemAttributeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public systemAttributeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/system-attributes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SystemAttributeController.GetAsync (SpektrERP.HttpApi)
   * @returns SystemAttributeDto Success
   * @throws ApiError
   */
  public systemAttributeGet({
id,
}: {
id: string,
}): CancelablePromise<SystemAttributeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/system-attributes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SystemAttributeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SystemAttributeDto Success
   * @throws ApiError
   */
  public systemAttributeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SystemAttributeUpdateDto,
}): CancelablePromise<SystemAttributeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/system-attributes/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
