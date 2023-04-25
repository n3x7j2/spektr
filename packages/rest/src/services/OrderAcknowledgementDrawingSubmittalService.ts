/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderAcknowledgementDrawingSubmittalCreateDto } from '../models/OrderAcknowledgementDrawingSubmittalCreateDto';
import type { OrderAcknowledgementDrawingSubmittalDto } from '../models/OrderAcknowledgementDrawingSubmittalDto';
import type { OrderAcknowledgementDrawingSubmittalUpdateDto } from '../models/OrderAcknowledgementDrawingSubmittalUpdateDto';
import type { OrderAcknowledgementDrawingSubmittalUpsertDto } from '../models/OrderAcknowledgementDrawingSubmittalUpsertDto';
import type { PagedResultDtoOfOrderAcknowledgementDrawingSubmittalDto } from '../models/PagedResultDtoOfOrderAcknowledgementDrawingSubmittalDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderAcknowledgementDrawingSubmittalService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.OrderAcknowledgementDrawingSubmittalController.GetAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDrawingSubmittalDto Success
   * @throws ApiError
   */
  public orderAcknowledgementDrawingSubmittalGet({
id,
}: {
id: string,
}): CancelablePromise<OrderAcknowledgementDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgement-drawing-submittals/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.OrderAcknowledgementDrawingSubmittalController.UpdateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDrawingSubmittalDto Success
   * @throws ApiError
   */
  public orderAcknowledgementDrawingSubmittalUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: OrderAcknowledgementDrawingSubmittalUpdateDto,
}): CancelablePromise<OrderAcknowledgementDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/order-acknowledgement-drawing-submittals/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.OrderAcknowledgementDrawingSubmittalController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public orderAcknowledgementDrawingSubmittalDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/order-acknowledgement-drawing-submittals/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.OrderAcknowledgementDrawingSubmittalController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfOrderAcknowledgementDrawingSubmittalDto Success
   * @throws ApiError
   */
  public orderAcknowledgementDrawingSubmittalGetList({
orderAcknowledgementId,
sorting,
skipCount,
maxResultCount,
}: {
orderAcknowledgementId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfOrderAcknowledgementDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgement-drawing-submittals',
      query: {
        'OrderAcknowledgementId': orderAcknowledgementId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.OrderAcknowledgementDrawingSubmittalController.CreateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDrawingSubmittalDto Success
   * @throws ApiError
   */
  public orderAcknowledgementDrawingSubmittalCreate({
requestBody,
}: {
requestBody?: OrderAcknowledgementDrawingSubmittalCreateDto,
}): CancelablePromise<OrderAcknowledgementDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgement-drawing-submittals',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.OrderAcknowledgementDrawingSubmittalController.UpsertAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementDrawingSubmittalDto Success
   * @throws ApiError
   */
  public orderAcknowledgementDrawingSubmittalUpsert({
orderAcknowledgementId,
requestBody,
}: {
orderAcknowledgementId: string,
requestBody?: Array<OrderAcknowledgementDrawingSubmittalUpsertDto>,
}): CancelablePromise<Array<OrderAcknowledgementDrawingSubmittalDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgement-drawing-submittals/upserts/{orderAcknowledgementId}',
      path: {
        'orderAcknowledgementId': orderAcknowledgementId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
