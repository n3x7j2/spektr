/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfSupplierDto } from '../models/PagedResultDtoOfSupplierDto';
import type { SupplierCreateDto } from '../models/SupplierCreateDto';
import type { SupplierDto } from '../models/SupplierDto';
import type { SupplierUpdateDto } from '../models/SupplierUpdateDto';
import type { SupplierWithDataDto } from '../models/SupplierWithDataDto';
import type { SupplierWithDataUpdateDto } from '../models/SupplierWithDataUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SupplierService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.SupplierController.CreateAsync (SpektrERP.HttpApi)
   * @returns SupplierDto Success
   * @throws ApiError
   */
  public supplierCreate({
requestBody,
}: {
requestBody?: SupplierCreateDto,
}): CancelablePromise<SupplierDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/suppliers',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SupplierController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSupplierDto Success
   * @throws ApiError
   */
  public supplierGetList({
supplierName,
phoneNumber,
secondaryPhoneNumber,
faxNumber,
email,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
supplierName?: string,
phoneNumber?: string,
secondaryPhoneNumber?: string,
faxNumber?: string,
email?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSupplierDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/suppliers',
      query: {
        'SupplierName': supplierName,
        'PhoneNumber': phoneNumber,
        'SecondaryPhoneNumber': secondaryPhoneNumber,
        'FaxNumber': faxNumber,
        'Email': email,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SupplierController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public supplierDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/suppliers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SupplierController.GetAsync (SpektrERP.HttpApi)
   * @returns SupplierDto Success
   * @throws ApiError
   */
  public supplierGet({
id,
}: {
id: string,
}): CancelablePromise<SupplierDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/suppliers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SupplierController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SupplierDto Success
   * @throws ApiError
   */
  public supplierUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SupplierUpdateDto,
}): CancelablePromise<SupplierDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/suppliers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.SupplierController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public supplierGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/suppliers/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.SupplierController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns SupplierWithDataDto Success
   * @throws ApiError
   */
  public supplierUpdateWithData({
requestBody,
}: {
requestBody?: SupplierWithDataUpdateDto,
}): CancelablePromise<SupplierWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/suppliers/supplier-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
