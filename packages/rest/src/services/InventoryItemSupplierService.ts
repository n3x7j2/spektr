/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryItemSupplierCreateDto } from '../models/InventoryItemSupplierCreateDto';
import type { InventoryItemSupplierDto } from '../models/InventoryItemSupplierDto';
import type { InventoryItemSupplierUpdateDto } from '../models/InventoryItemSupplierUpdateDto';
import type { InventoryItemSupplierUpsertDto } from '../models/InventoryItemSupplierUpsertDto';
import type { PagedResultDtoOfInventoryItemSupplierDto } from '../models/PagedResultDtoOfInventoryItemSupplierDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemSupplierService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemSupplierController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSupplierDto Success
   * @throws ApiError
   */
  public inventoryItemSupplierCreate({
requestBody,
}: {
requestBody?: InventoryItemSupplierCreateDto,
}): CancelablePromise<InventoryItemSupplierDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-suppliers',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemSupplierController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemSupplierDto Success
   * @throws ApiError
   */
  public inventoryItemSupplierGetList({
itemSupplierCode,
itemDescription,
inventoryItemId,
supplierId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
itemSupplierCode?: string,
itemDescription?: string,
inventoryItemId?: string,
supplierId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemSupplierDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-suppliers',
      query: {
        'ItemSupplierCode': itemSupplierCode,
        'ItemDescription': itemDescription,
        'InventoryItemId': inventoryItemId,
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
   * SpektrERP.Controllers.InventoryItemSupplierController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemSupplierDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-suppliers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemSupplierController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSupplierDto Success
   * @throws ApiError
   */
  public inventoryItemSupplierGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemSupplierDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-suppliers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemSupplierController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSupplierDto Success
   * @throws ApiError
   */
  public inventoryItemSupplierUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemSupplierUpdateDto,
}): CancelablePromise<InventoryItemSupplierDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-suppliers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryItemSupplierController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryItemSupplierDto Success
   * @throws ApiError
   */
  public inventoryItemSupplierUpsert({
inventoryItemId,
requestBody,
}: {
inventoryItemId: string,
requestBody?: Array<InventoryItemSupplierUpsertDto>,
}): CancelablePromise<Array<InventoryItemSupplierDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-suppliers/upserts/{inventoryItemId}',
      path: {
        'inventoryItemId': inventoryItemId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
