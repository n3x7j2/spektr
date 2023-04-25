/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSystemRichContentDataDto } from '../models/PagedResultDtoOfSystemRichContentDataDto';
import type { SystemRichContentDataCreateDto } from '../models/SystemRichContentDataCreateDto';
import type { SystemRichContentDataDto } from '../models/SystemRichContentDataDto';
import type { SystemRichContentDataUpdateDto } from '../models/SystemRichContentDataUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SystemRichContentDataService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.SystemRichContentDataController.CreateAsync (SpektrERP.HttpApi)
   * @returns SystemRichContentDataDto Success
   * @throws ApiError
   */
  public systemRichContentDataCreate({
requestBody,
}: {
requestBody?: SystemRichContentDataCreateDto,
}): CancelablePromise<SystemRichContentDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/system-rich-content-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SystemRichContentDataController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSystemRichContentDataDto Success
   * @throws ApiError
   */
  public systemRichContentDataGetList({
fileName,
systemId,
sorting,
skipCount,
maxResultCount,
}: {
fileName?: string,
systemId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSystemRichContentDataDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/system-rich-content-data',
      query: {
        'FileName': fileName,
        'SystemId': systemId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SystemRichContentDataController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public systemRichContentDataDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/system-rich-content-data/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SystemRichContentDataController.GetAsync (SpektrERP.HttpApi)
   * @returns SystemRichContentDataDto Success
   * @throws ApiError
   */
  public systemRichContentDataGet({
id,
}: {
id: string,
}): CancelablePromise<SystemRichContentDataDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/system-rich-content-data/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SystemRichContentDataController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SystemRichContentDataDto Success
   * @throws ApiError
   */
  public systemRichContentDataUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SystemRichContentDataUpdateDto,
}): CancelablePromise<SystemRichContentDataDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/system-rich-content-data/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
