/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfTransmittalMediumDto } from '../models/PagedResultDtoOfTransmittalMediumDto';
import type { TransmittalMediumCreateDto } from '../models/TransmittalMediumCreateDto';
import type { TransmittalMediumDto } from '../models/TransmittalMediumDto';
import type { TransmittalMediumUpdateDto } from '../models/TransmittalMediumUpdateDto';
import type { TransmittalMediumUpsertDto } from '../models/TransmittalMediumUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransmittalMediumService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.TransmittalMediumController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfTransmittalMediumDto Success
   * @throws ApiError
   */
  public transmittalMediumGetList({
medium,
description,
sorting,
skipCount,
maxResultCount,
}: {
medium?: string,
description?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfTransmittalMediumDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/transmittals/mediums',
      query: {
        'Medium': medium,
        'Description': description,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.TransmittalMediumController.CreateAsync (SpektrERP.HttpApi)
   * @returns TransmittalMediumDto Success
   * @throws ApiError
   */
  public transmittalMediumCreate({
requestBody,
}: {
requestBody?: TransmittalMediumCreateDto,
}): CancelablePromise<TransmittalMediumDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/transmittals/mediums',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.TransmittalMediumController.GetAsync (SpektrERP.HttpApi)
   * @returns TransmittalMediumDto Success
   * @throws ApiError
   */
  public transmittalMediumGet({
id,
}: {
id: string,
}): CancelablePromise<TransmittalMediumDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/transmittals/mediums/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.TransmittalMediumController.UpdateAsync (SpektrERP.HttpApi)
   * @returns TransmittalMediumDto Success
   * @throws ApiError
   */
  public transmittalMediumUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: TransmittalMediumUpdateDto,
}): CancelablePromise<TransmittalMediumDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/transmittals/mediums/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.TransmittalMediumController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public transmittalMediumDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/transmittals/mediums/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.TransmittalMediumController.UpsertAsync (SpektrERP.HttpApi)
   * @returns TransmittalMediumDto Success
   * @throws ApiError
   */
  public transmittalMediumUpsert({
requestBody,
}: {
requestBody?: Array<TransmittalMediumUpsertDto>,
}): CancelablePromise<Array<TransmittalMediumDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/transmittals/mediums/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
