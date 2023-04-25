/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfPurchaseOrderTermDto } from '../models/PagedResultDtoOfPurchaseOrderTermDto';
import type { PurchaseOrderTermCreateDto } from '../models/PurchaseOrderTermCreateDto';
import type { PurchaseOrderTermDto } from '../models/PurchaseOrderTermDto';
import type { PurchaseOrderTermUpdateDto } from '../models/PurchaseOrderTermUpdateDto';
import type { PurchaseOrderTermUpsertDto } from '../models/PurchaseOrderTermUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseOrderTermService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseOrderTermController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTermDto Success
   * @throws ApiError
   */
  public purchaseOrderTermGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseOrderTermDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchas-order-terms/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseOrderTermController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTermDto Success
   * @throws ApiError
   */
  public purchaseOrderTermUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseOrderTermUpdateDto,
}): CancelablePromise<PurchaseOrderTermDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchas-order-terms/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseOrderTermController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderTermDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchas-order-terms/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseOrderTermController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseOrderTermDto Success
   * @throws ApiError
   */
  public purchaseOrderTermGetList({
term,
sorting,
skipCount,
maxResultCount,
}: {
term?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseOrderTermDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchas-order-terms',
      query: {
        'Term': term,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseOrderTermController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTermDto Success
   * @throws ApiError
   */
  public purchaseOrderTermCreate({
requestBody,
}: {
requestBody?: PurchaseOrderTermCreateDto,
}): CancelablePromise<PurchaseOrderTermDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchas-order-terms',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.PurchaseOrderTermController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public purchaseOrderTermGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchas-order-terms/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseOrderTermController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderTermDto Success
   * @throws ApiError
   */
  public purchaseOrderTermUpsert({
requestBody,
}: {
requestBody?: Array<PurchaseOrderTermUpsertDto>,
}): CancelablePromise<Array<PurchaseOrderTermDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchas-order-terms/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
