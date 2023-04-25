/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryCategoryCreateDto } from '../models/InventoryCategoryCreateDto';
import type { InventoryCategoryDownItem } from '../models/InventoryCategoryDownItem';
import type { InventoryCategoryDto } from '../models/InventoryCategoryDto';
import type { InventoryCategoryUpdateDto } from '../models/InventoryCategoryUpdateDto';
import type { InventoryCategoryUpsertDto } from '../models/InventoryCategoryUpsertDto';
import type { InventoryCategoryWithDataDto } from '../models/InventoryCategoryWithDataDto';
import type { InventoryCategoryWithDataUpdateDto } from '../models/InventoryCategoryWithDataUpdateDto';
import type { PagedResultDtoOfInventoryCategoryDto } from '../models/PagedResultDtoOfInventoryCategoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryCategoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryCategoryController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryCategoryDto Success
   * @throws ApiError
   */
  public inventoryCategoryGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryCategoryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryCategoryDto Success
   * @throws ApiError
   */
  public inventoryCategoryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryCategoryUpdateDto,
}): CancelablePromise<InventoryCategoryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-categories/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryCategoryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryCategoryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryCategoryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryCategoryDto Success
   * @throws ApiError
   */
  public inventoryCategoryGetList({
categoryName,
projectId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
categoryName?: string,
projectId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-categories',
      query: {
        'CategoryName': categoryName,
        'ProjectId': projectId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryCategoryController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryCategoryDto Success
   * @throws ApiError
   */
  public inventoryCategoryCreate({
requestBody,
}: {
requestBody?: InventoryCategoryCreateDto,
}): CancelablePromise<InventoryCategoryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-categories',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Inventory Category
   * SpektrERP.Controllers.InventoryCategoryController.GetListDropDownInventoryCategoryAsync (SpektrERP.HttpApi)
   * @returns InventoryCategoryDownItem Success
   * @throws ApiError
   */
  public inventoryCategoryGetListDropDownInventoryCategory({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<InventoryCategoryDownItem>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/inventory-categories',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.InventoryCategoryController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns InventoryCategoryWithDataDto Success
   * @throws ApiError
   */
  public inventoryCategoryUpdateWithData({
requestBody,
}: {
requestBody?: InventoryCategoryWithDataUpdateDto,
}): CancelablePromise<InventoryCategoryWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-categories/inventory-category-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.InventoryCategoryController.UpsertAsync (SpektrERP.HttpApi)
   * @returns InventoryCategoryDto Success
   * @throws ApiError
   */
  public inventoryCategoryUpsert({
requestBody,
}: {
requestBody?: Array<InventoryCategoryUpsertDto>,
}): CancelablePromise<Array<InventoryCategoryDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-categories/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
