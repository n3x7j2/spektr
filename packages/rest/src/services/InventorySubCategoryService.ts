/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventorySubCategoryCreateDto } from '../models/InventorySubCategoryCreateDto';
import type { InventorySubCategoryDropDownItem } from '../models/InventorySubCategoryDropDownItem';
import type { InventorySubCategoryDto } from '../models/InventorySubCategoryDto';
import type { InventorySubCategoryUpdateDto } from '../models/InventorySubCategoryUpdateDto';
import type { InventorySubCategoryUpsertDto } from '../models/InventorySubCategoryUpsertDto';
import type { PagedResultDtoOfInventorySubCategoryDto } from '../models/PagedResultDtoOfInventorySubCategoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventorySubCategoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventorySubCategoryController.GetAsync (SpektrERP.HttpApi)
   * @returns InventorySubCategoryDto Success
   * @throws ApiError
   */
  public inventorySubCategoryGet({
id,
}: {
id: string,
}): CancelablePromise<InventorySubCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-sub-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventorySubCategoryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventorySubCategoryDto Success
   * @throws ApiError
   */
  public inventorySubCategoryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventorySubCategoryUpdateDto,
}): CancelablePromise<InventorySubCategoryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-sub-categories/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventorySubCategoryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventorySubCategoryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-sub-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventorySubCategoryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventorySubCategoryDto Success
   * @throws ApiError
   */
  public inventorySubCategoryGetList({
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventorySubCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-sub-categories',
      query: {
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventorySubCategoryController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventorySubCategoryDto Success
   * @throws ApiError
   */
  public inventorySubCategoryCreate({
requestBody,
}: {
requestBody?: InventorySubCategoryCreateDto,
}): CancelablePromise<InventorySubCategoryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-sub-categories',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Re Generate Inventory Data by Rule
   * SpektrERP.Controllers.InventorySubCategoryController.ReGenerateInventoryDataByRule (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventorySubCategoryReGenerateInventoryDataByRule({
id,
isSkipException,
}: {
id: string,
isSkipException?: boolean,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-sub-categories/{id}/re-generate-inventory-data',
      path: {
        'id': id,
      },
      query: {
        'isSkipException': isSkipException,
      },
    });
  }

  /**
   * Get List Drop Down Inventory Sub Category
   * SpektrERP.Controllers.InventorySubCategoryController.GetListDropDownInventorySubCategoryAsync (SpektrERP.HttpApi)
   * @returns InventorySubCategoryDropDownItem Success
   * @throws ApiError
   */
  public inventorySubCategoryGetListDropDownInventorySubCategory({
categoryId,
searchKey,
}: {
categoryId?: string,
searchKey?: string,
}): CancelablePromise<Array<InventorySubCategoryDropDownItem>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/inventory-sub-categories',
      query: {
        'CategoryId': categoryId,
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventorySubCategoryController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventorySubCategoryDto Success
   * @throws ApiError
   */
  public inventorySubCategoryUpsert({
requestBody,
}: {
requestBody?: Array<InventorySubCategoryUpsertDto>,
}): CancelablePromise<Array<InventorySubCategoryDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-sub-categories/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
