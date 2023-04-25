/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfShippingCarrierDto } from '../models/PagedResultDtoOfShippingCarrierDto';
import type { ShippingCarrierCreateDto } from '../models/ShippingCarrierCreateDto';
import type { ShippingCarrierDto } from '../models/ShippingCarrierDto';
import type { ShippingCarrierUpdateDto } from '../models/ShippingCarrierUpdateDto';
import type { ShippingCarrierUpsertDto } from '../models/ShippingCarrierUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ShippingCarrierService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.ShippingCarrierController.CreateAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierDto Success
   * @throws ApiError
   */
  public shippingCarrierCreate({
requestBody,
}: {
requestBody?: ShippingCarrierCreateDto,
}): CancelablePromise<ShippingCarrierDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/shipping-carriers',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ShippingCarrierController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfShippingCarrierDto Success
   * @throws ApiError
   */
  public shippingCarrierGetList({
carrierName,
carrierTypeId,
sorting,
skipCount,
maxResultCount,
}: {
carrierName?: string,
carrierTypeId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfShippingCarrierDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/shipping-carriers',
      query: {
        'CarrierName': carrierName,
        'CarrierTypeId': carrierTypeId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ShippingCarrierController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public shippingCarrierDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/shipping-carriers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ShippingCarrierController.GetAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierDto Success
   * @throws ApiError
   */
  public shippingCarrierGet({
id,
}: {
id: string,
}): CancelablePromise<ShippingCarrierDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/shipping-carriers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ShippingCarrierController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierDto Success
   * @throws ApiError
   */
  public shippingCarrierUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ShippingCarrierUpdateDto,
}): CancelablePromise<ShippingCarrierDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/shipping-carriers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.ShippingCarrierController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public shippingCarrierGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/shipping-carriers/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ShippingCarrierController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ShippingCarrierDto Success
   * @throws ApiError
   */
  public shippingCarrierUpsert({
requestBody,
}: {
requestBody?: Array<ShippingCarrierUpsertDto>,
}): CancelablePromise<Array<ShippingCarrierDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/shipping-carriers/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
