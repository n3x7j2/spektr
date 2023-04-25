/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfTransmittalDto } from '../models/PagedResultDtoOfTransmittalDto';
import type { TransmittalCreateDto } from '../models/TransmittalCreateDto';
import type { TransmittalDto } from '../models/TransmittalDto';
import type { TransmittalUpdateDto } from '../models/TransmittalUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransmittalService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.TransmittalController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfTransmittalDto Success
   * @throws ApiError
   */
  public transmittalGetList({
statusId,
projectId,
customerOrderReference,
transmittalToContactId,
transmittalMediumId,
remarks,
projectDocumentTypeId,
sorting,
skipCount,
maxResultCount,
}: {
statusId?: string,
projectId?: string,
customerOrderReference?: string,
transmittalToContactId?: string,
transmittalMediumId?: string,
remarks?: string,
projectDocumentTypeId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfTransmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/transmittals',
      query: {
        'StatusId': statusId,
        'ProjectId': projectId,
        'CustomerOrderReference': customerOrderReference,
        'TransmittalToContactId': transmittalToContactId,
        'TransmittalMediumId': transmittalMediumId,
        'Remarks': remarks,
        'ProjectDocumentTypeId': projectDocumentTypeId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.TransmittalController.CreateAsync (SpektrERP.HttpApi)
   * @returns TransmittalDto Success
   * @throws ApiError
   */
  public transmittalCreate({
requestBody,
}: {
requestBody?: TransmittalCreateDto,
}): CancelablePromise<TransmittalDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/transmittals',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.TransmittalController.GetAsync (SpektrERP.HttpApi)
   * @returns TransmittalDto Success
   * @throws ApiError
   */
  public transmittalGet({
id,
}: {
id: string,
}): CancelablePromise<TransmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/transmittals/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.TransmittalController.UpdateAsync (SpektrERP.HttpApi)
   * @returns TransmittalDto Success
   * @throws ApiError
   */
  public transmittalUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: TransmittalUpdateDto,
}): CancelablePromise<TransmittalDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/transmittals/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.TransmittalController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public transmittalDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/transmittals/{id}',
      path: {
        'id': id,
      },
    });
  }

}
