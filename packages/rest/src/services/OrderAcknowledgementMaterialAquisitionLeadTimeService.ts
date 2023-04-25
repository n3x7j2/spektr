/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderAcknowledgementMaterialAquisitionLeadTimeCreateDto } from '../models/OrderAcknowledgementMaterialAquisitionLeadTimeCreateDto';
import type { OrderAcknowledgementMaterialAquisitionLeadTimeDto } from '../models/OrderAcknowledgementMaterialAquisitionLeadTimeDto';
import type { OrderAcknowledgementMaterialAquisitionLeadTimeUpdateDto } from '../models/OrderAcknowledgementMaterialAquisitionLeadTimeUpdateDto';
import type { OrderAcknowledgementMaterialAquisitionLeadTimeUpsertDto } from '../models/OrderAcknowledgementMaterialAquisitionLeadTimeUpsertDto';
import type { PagedResultDtoOfOrderAcknowledgementMaterialAquisitionLeadTimeDto } from '../models/PagedResultDtoOfOrderAcknowledgementMaterialAquisitionLeadTimeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderAcknowledgementMaterialAquisitionLeadTimeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.OrderAcknowledgementMaterialAquisitionLeadTimeController.GetAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialAquisitionLeadTimeGet({
id,
}: {
id: string,
}): CancelablePromise<OrderAcknowledgementMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgement-material-aquisition-lead-times/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.OrderAcknowledgementMaterialAquisitionLeadTimeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialAquisitionLeadTimeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: OrderAcknowledgementMaterialAquisitionLeadTimeUpdateDto,
}): CancelablePromise<OrderAcknowledgementMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/order-acknowledgement-material-aquisition-lead-times/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.OrderAcknowledgementMaterialAquisitionLeadTimeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialAquisitionLeadTimeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/order-acknowledgement-material-aquisition-lead-times/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.OrderAcknowledgementMaterialAquisitionLeadTimeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfOrderAcknowledgementMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialAquisitionLeadTimeGetList({
orderAcknowledgementId,
sorting,
skipCount,
maxResultCount,
}: {
orderAcknowledgementId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfOrderAcknowledgementMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/order-acknowledgement-material-aquisition-lead-times',
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
   * SpektrERP.Controllers.OrderAcknowledgementMaterialAquisitionLeadTimeController.CreateAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialAquisitionLeadTimeCreate({
requestBody,
}: {
requestBody?: OrderAcknowledgementMaterialAquisitionLeadTimeCreateDto,
}): CancelablePromise<OrderAcknowledgementMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgement-material-aquisition-lead-times',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.OrderAcknowledgementMaterialAquisitionLeadTimeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns OrderAcknowledgementMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public orderAcknowledgementMaterialAquisitionLeadTimeUpsert({
orderAcknowledgementId,
requestBody,
}: {
orderAcknowledgementId: string,
requestBody?: Array<OrderAcknowledgementMaterialAquisitionLeadTimeUpsertDto>,
}): CancelablePromise<Array<OrderAcknowledgementMaterialAquisitionLeadTimeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/order-acknowledgement-material-aquisition-lead-times/upserts/{orderAcknowledgementId}',
      path: {
        'orderAcknowledgementId': orderAcknowledgementId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
