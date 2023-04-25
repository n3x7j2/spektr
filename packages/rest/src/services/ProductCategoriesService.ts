/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProductCategoriesDto } from '../models/PagedResultDtoOfProductCategoriesDto';
import type { ProductCategoriesCreateDto } from '../models/ProductCategoriesCreateDto';
import type { ProductCategoriesDto } from '../models/ProductCategoriesDto';
import type { ProductCategoriesUpdateDto } from '../models/ProductCategoriesUpdateDto';
import type { ProductCategoriesUpsertDto } from '../models/ProductCategoriesUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductCategoriesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProductCategoriesController.GetAsync (SpektrERP.HttpApi)
   * @returns ProductCategoriesDto Success
   * @throws ApiError
   */
  public productCategoriesGet({
id,
}: {
id: string,
}): CancelablePromise<ProductCategoriesDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/product-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductCategoriesController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProductCategoriesDto Success
   * @throws ApiError
   */
  public productCategoriesUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProductCategoriesUpdateDto,
}): CancelablePromise<ProductCategoriesDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/product-categories/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProductCategoriesController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productCategoriesDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/product-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductCategoriesController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductCategoriesDto Success
   * @throws ApiError
   */
  public productCategoriesGetList({
productCategory,
disablePagination,
extraId,
sorting,
skipCount,
maxResultCount,
}: {
productCategory?: string,
disablePagination?: boolean,
extraId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductCategoriesDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/product-categories',
      query: {
        'ProductCategory': productCategory,
        'DisablePagination': disablePagination,
        'ExtraId': extraId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProductCategoriesController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProductCategoriesDto Success
   * @throws ApiError
   */
  public productCategoriesCreate({
requestBody,
}: {
requestBody?: ProductCategoriesCreateDto,
}): CancelablePromise<ProductCategoriesDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/product-categories',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProductCategoriesController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProductCategoriesDto Success
   * @throws ApiError
   */
  public productCategoriesUpsert({
requestBody,
}: {
requestBody?: Array<ProductCategoriesUpsertDto>,
}): CancelablePromise<Array<ProductCategoriesDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/product-categories/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
