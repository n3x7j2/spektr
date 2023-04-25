/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderAcknowledgementCreateDto } from '../models/OrderAcknowledgementCreateDto';
import type { OrderAcknowledgementDto } from '../models/OrderAcknowledgementDto';
import type { OrderAcknowledgementUpdateDto } from '../models/OrderAcknowledgementUpdateDto';
import type { PagedResultDtoOfOrderAcknowledgementDto } from '../models/PagedResultDtoOfOrderAcknowledgementDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderAcknowledgementService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.OrderAcknowledgementController.GetAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDto Success
   * @throws ApiError
   */
  public orderAcknowledgementGet({
id,
}: {
id: string,
}): CancelablePromise<OrderAcknowledgementDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgements/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.OrderAcknowledgementController.UpdateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDto Success
   * @throws ApiError
   */
  public orderAcknowledgementUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: OrderAcknowledgementUpdateDto,
}): CancelablePromise<OrderAcknowledgementDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/order-acknowledgements/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.OrderAcknowledgementController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public orderAcknowledgementDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/order-acknowledgements/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.OrderAcknowledgementController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfOrderAcknowledgementDto Success
   * @throws ApiError
   */
  public orderAcknowledgementGetList({
projectId,
customerId,
projectDocumentTypeId,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
customerId?: string,
projectDocumentTypeId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfOrderAcknowledgementDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgements',
      query: {
        'ProjectId': projectId,
        'CustomerId': customerId,
        'ProjectDocumentTypeId': projectDocumentTypeId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.OrderAcknowledgementController.CreateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDto Success
   * @throws ApiError
   */
  public orderAcknowledgementCreate({
requestBody,
}: {
requestBody?: OrderAcknowledgementCreateDto,
}): CancelablePromise<OrderAcknowledgementDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgements',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
