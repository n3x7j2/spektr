/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfShippingCarrierTypeDto } from '../models/PagedResultDtoOfShippingCarrierTypeDto';
import type { ShippingCarrierTypeCreateDto } from '../models/ShippingCarrierTypeCreateDto';
import type { ShippingCarrierTypeDto } from '../models/ShippingCarrierTypeDto';
import type { ShippingCarrierTypeUpdateDto } from '../models/ShippingCarrierTypeUpdateDto';
import type { ShippingCarrierTypeUpsertDto } from '../models/ShippingCarrierTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ShippingCarrierTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.ShippingCarrierTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierTypeDto Success
   * @throws ApiError
   */
  public shippingCarrierTypeCreate({
requestBody,
}: {
requestBody?: ShippingCarrierTypeCreateDto,
}): CancelablePromise<ShippingCarrierTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/shipping-carrier-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ShippingCarrierTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfShippingCarrierTypeDto Success
   * @throws ApiError
   */
  public shippingCarrierTypeGetList({
carrierType,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
carrierType?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfShippingCarrierTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/shipping-carrier-types',
      query: {
        'CarrierType': carrierType,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ShippingCarrierTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public shippingCarrierTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/shipping-carrier-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ShippingCarrierTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierTypeDto Success
   * @throws ApiError
   */
  public shippingCarrierTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ShippingCarrierTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/shipping-carrier-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ShippingCarrierTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierTypeDto Success
   * @throws ApiError
   */
  public shippingCarrierTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ShippingCarrierTypeUpdateDto,
}): CancelablePromise<ShippingCarrierTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/shipping-carrier-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ShippingCarrierTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierTypeDto Success
   * @throws ApiError
   */
  public shippingCarrierTypeUpsert({
requestBody,
}: {
requestBody?: Array<ShippingCarrierTypeUpsertDto>,
}): CancelablePromise<Array<ShippingCarrierTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/shipping-carrier-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
