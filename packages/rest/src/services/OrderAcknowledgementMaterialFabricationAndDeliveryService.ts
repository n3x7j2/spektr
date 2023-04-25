/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderAcknowledgementMaterialFabricationAndDeliveryCreateDto } from '../models/OrderAcknowledgementMaterialFabricationAndDeliveryCreateDto';
import type { OrderAcknowledgementMaterialFabricationAndDeliveryDto } from '../models/OrderAcknowledgementMaterialFabricationAndDeliveryDto';
import type { OrderAcknowledgementMaterialFabricationAndDeliveryUpdateDto } from '../models/OrderAcknowledgementMaterialFabricationAndDeliveryUpdateDto';
import type { OrderAcknowledgementMaterialFabricationAndDeliveryUpsertDto } from '../models/OrderAcknowledgementMaterialFabricationAndDeliveryUpsertDto';
import type { PagedResultDtoOfOrderAcknowledgementMaterialFabricationAndDeliveryDto } from '../models/PagedResultDtoOfOrderAcknowledgementMaterialFabricationAndDeliveryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderAcknowledgementMaterialFabricationAndDeliveryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.OrderAcknowledgementMaterialFabricationAndDeliveryController.GetAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialFabricationAndDeliveryGet({
id,
}: {
id: string,
}): CancelablePromise<OrderAcknowledgementMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgement-material-fabrication-and-delivery/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.OrderAcknowledgementMaterialFabricationAndDeliveryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialFabricationAndDeliveryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: OrderAcknowledgementMaterialFabricationAndDeliveryUpdateDto,
}): CancelablePromise<OrderAcknowledgementMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/order-acknowledgement-material-fabrication-and-delivery/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.OrderAcknowledgementMaterialFabricationAndDeliveryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialFabricationAndDeliveryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/order-acknowledgement-material-fabrication-and-delivery/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.OrderAcknowledgementMaterialFabricationAndDeliveryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfOrderAcknowledgementMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialFabricationAndDeliveryGetList({
orderAcknowledgementId,
sorting,
skipCount,
maxResultCount,
}: {
orderAcknowledgementId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfOrderAcknowledgementMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgement-material-fabrication-and-delivery',
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
   * SpektrERP.Controllers.OrderAcknowledgementMaterialFabricationAndDeliveryController.CreateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialFabricationAndDeliveryCreate({
requestBody,
}: {
requestBody?: OrderAcknowledgementMaterialFabricationAndDeliveryCreateDto,
}): CancelablePromise<OrderAcknowledgementMaterialFabricationAndDeliveryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgement-material-fabrication-and-delivery',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.OrderAcknowledgementMaterialFabricationAndDeliveryController.UpsertAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialFabricationAndDeliveryDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialFabricationAndDeliveryUpsert({
orderAcknowledgementId,
requestBody,
}: {
orderAcknowledgementId: string,
requestBody?: Array<OrderAcknowledgementMaterialFabricationAndDeliveryUpsertDto>,
}): CancelablePromise<Array<OrderAcknowledgementMaterialFabricationAndDeliveryDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgement-material-fabrication-and-delivery/upserts/{orderAcknowledgementId}',
      path: {
        'orderAcknowledgementId': orderAcknowledgementId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
