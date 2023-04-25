/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPurchaseOrderInvoiceDto } from '../models/PagedResultDtoOfPurchaseOrderInvoiceDto';
import type { PurchaseOrderInvoiceCreateDto } from '../models/PurchaseOrderInvoiceCreateDto';
import type { PurchaseOrderInvoiceDto } from '../models/PurchaseOrderInvoiceDto';
import type { PurchaseOrderInvoiceUpdateDto } from '../models/PurchaseOrderInvoiceUpdateDto';
import type { PurchaseOrderInvoiceUpsertDto } from '../models/PurchaseOrderInvoiceUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchaseOrderInvoiceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PurchaseOrderInvoiceController.GetAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderInvoiceDto Success
   * @throws ApiError
   */
  public purchaseOrderInvoiceGet({
id,
}: {
id: string,
}): CancelablePromise<PurchaseOrderInvoiceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-invoices/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PurchaseOrderInvoiceController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderInvoiceDto Success
   * @throws ApiError
   */
  public purchaseOrderInvoiceUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PurchaseOrderInvoiceUpdateDto,
}): CancelablePromise<PurchaseOrderInvoiceDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/purchase-order-invoices/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PurchaseOrderInvoiceController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public purchaseOrderInvoiceDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/purchase-order-invoices/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PurchaseOrderInvoiceController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPurchaseOrderInvoiceDto Success
   * @throws ApiError
   */
  public purchaseOrderInvoiceGetList({
purchaseOrderId,
invoiceNr,
invoiceApproved,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
purchaseOrderId: string,
invoiceNr?: string,
invoiceApproved?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPurchaseOrderInvoiceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/purchase-order-invoices',
      query: {
        'PurchaseOrderId': purchaseOrderId,
        'InvoiceNr': invoiceNr,
        'InvoiceApproved': invoiceApproved,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PurchaseOrderInvoiceController.CreateAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderInvoiceDto Success
   * @throws ApiError
   */
  public purchaseOrderInvoiceCreate({
requestBody,
}: {
requestBody?: PurchaseOrderInvoiceCreateDto,
}): CancelablePromise<PurchaseOrderInvoiceDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-invoices',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PurchaseOrderInvoiceController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PurchaseOrderInvoiceDto Success
   * @throws ApiError
   */
  public purchaseOrderInvoiceUpsert({
id,
requestBody,
}: {
id: string,
requestBody?: Array<PurchaseOrderInvoiceUpsertDto>,
}): CancelablePromise<Array<PurchaseOrderInvoiceDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/purchase-order-invoices/{id}/upsert-items',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
