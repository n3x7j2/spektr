/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSupplierContactDto } from '../models/PagedResultDtoOfSupplierContactDto';
import type { SupplierContactCreateDto } from '../models/SupplierContactCreateDto';
import type { SupplierContactDropDownInput } from '../models/SupplierContactDropDownInput';
import type { SupplierContactDto } from '../models/SupplierContactDto';
import type { SupplierContactUpdateDto } from '../models/SupplierContactUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SupplierContactService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.SupplierContactController.CreateAsync (SpektrERP.HttpApi)
   * @returns SupplierContactDto Success
   * @throws ApiError
   */
  public supplierContactCreate({
requestBody,
}: {
requestBody?: SupplierContactCreateDto,
}): CancelablePromise<SupplierContactDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/supplier-contacts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SupplierContactController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSupplierContactDto Success
   * @throws ApiError
   */
  public supplierContactGetList({
supplierId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
supplierId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSupplierContactDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/supplier-contacts',
      query: {
        'SupplierId': supplierId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SupplierContactController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public supplierContactDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/supplier-contacts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.SupplierContactController.GetAsync (SpektrERP.HttpApi)
   * @returns SupplierContactDto Success
   * @throws ApiError
   */
  public supplierContactGet({
id,
}: {
id: string,
}): CancelablePromise<SupplierContactDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/supplier-contacts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SupplierContactController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SupplierContactDto Success
   * @throws ApiError
   */
  public supplierContactUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SupplierContactUpdateDto,
}): CancelablePromise<SupplierContactDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/supplier-contacts/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.SupplierContactController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns SupplierContactDropDownInput Success
   * @throws ApiError
   */
  public supplierContactGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<SupplierContactDropDownInput>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/supplier-contacts/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
