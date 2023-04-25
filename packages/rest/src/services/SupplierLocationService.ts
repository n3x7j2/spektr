/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSupplierLocationDto } from '../models/PagedResultDtoOfSupplierLocationDto';
import type { SupplierLocationCreateDto } from '../models/SupplierLocationCreateDto';
import type { SupplierLocationDto } from '../models/SupplierLocationDto';
import type { SupplierLocationUpdateDto } from '../models/SupplierLocationUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SupplierLocationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.SupplierLocationController.GetAsync (SpektrERP.HttpApi)
   * @returns SupplierLocationDto Success
   * @throws ApiError
   */
  public supplierLocationGet({
id,
}: {
id: string,
}): CancelablePromise<SupplierLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/supplier-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SupplierLocationController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SupplierLocationDto Success
   * @throws ApiError
   */
  public supplierLocationUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SupplierLocationUpdateDto,
}): CancelablePromise<SupplierLocationDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/supplier-locations/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SupplierLocationController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public supplierLocationDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/supplier-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SupplierLocationController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSupplierLocationDto Success
   * @throws ApiError
   */
  public supplierLocationGetList({
supplierId,
postalCode,
provinceStateId,
countryId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
supplierId?: string,
postalCode?: string,
provinceStateId?: string,
countryId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSupplierLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/supplier-locations',
      query: {
        'SupplierId': supplierId,
        'PostalCode': postalCode,
        'ProvinceStateId': provinceStateId,
        'CountryId': countryId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.SupplierLocationController.CreateAsync (SpektrERP.HttpApi)
   * @returns SupplierLocationDto Success
   * @throws ApiError
   */
  public supplierLocationCreate({
requestBody,
}: {
requestBody?: SupplierLocationCreateDto,
}): CancelablePromise<SupplierLocationDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/supplier-locations',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
