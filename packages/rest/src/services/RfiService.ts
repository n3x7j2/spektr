/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfRFIDto } from '../models/PagedResultDtoOfRFIDto';
import type { RFICreateDto } from '../models/RFICreateDto';
import type { RFIDto } from '../models/RFIDto';
import type { RFIUpdateDto } from '../models/RFIUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RfiService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.RFIController.GetAsync (SpektrERP.HttpApi)
   * @returns RFIDto Success
   * @throws ApiError
   */
  public rfiGet({
id,
}: {
id: string,
}): CancelablePromise<RFIDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/rfi/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.RFIController.UpdateAsync (SpektrERP.HttpApi)
   * @returns RFIDto Success
   * @throws ApiError
   */
  public rfiUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: RFIUpdateDto,
}): CancelablePromise<RFIDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/rfi/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.RFIController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public rfiDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/rfi/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.RFIController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfRFIDto Success
   * @throws ApiError
   */
  public rfiGetList({
projectId,
customerId,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
customerId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfRFIDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/rfi',
      query: {
        'ProjectId': projectId,
        'CustomerId': customerId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.RFIController.CreateAsync (SpektrERP.HttpApi)
   * @returns RFIDto Success
   * @throws ApiError
   */
  public rfiCreate({
requestBody,
}: {
requestBody?: RFICreateDto,
}): CancelablePromise<RFIDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/rfi',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
