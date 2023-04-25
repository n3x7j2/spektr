/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfServiceTaskDto } from '../models/PagedResultDtoOfServiceTaskDto';
import type { ServiceTaskCreateDto } from '../models/ServiceTaskCreateDto';
import type { ServiceTaskDto } from '../models/ServiceTaskDto';
import type { ServiceTaskUpdateDto } from '../models/ServiceTaskUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceTaskService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ServiceTaskController.GetAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskDto Success
   * @throws ApiError
   */
  public serviceTaskGet({
id,
}: {
id: string,
}): CancelablePromise<ServiceTaskDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-tasks/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ServiceTaskController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskDto Success
   * @throws ApiError
   */
  public serviceTaskUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ServiceTaskUpdateDto,
}): CancelablePromise<ServiceTaskDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/service-tasks/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ServiceTaskController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public serviceTaskDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/service-tasks/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ServiceTaskController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfServiceTaskDto Success
   * @throws ApiError
   */
  public serviceTaskGetList({
projectId,
supplierId,
supplierLocationId,
serviceTaskStatusId,
inventoryItemGroupBatchId,
serviceDate,
estQty,
estQtyUnitId,
estNumberOfPieces,
purchaseOrderId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
supplierId?: string,
supplierLocationId?: string,
serviceTaskStatusId?: string,
inventoryItemGroupBatchId?: string,
serviceDate?: string,
estQty?: number,
estQtyUnitId?: string,
estNumberOfPieces?: number,
purchaseOrderId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfServiceTaskDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/service-tasks',
      query: {
        'ProjectId': projectId,
        'SupplierId': supplierId,
        'SupplierLocationId': supplierLocationId,
        'ServiceTaskStatusId': serviceTaskStatusId,
        'InventoryItemGroupBatchId': inventoryItemGroupBatchId,
        'ServiceDate': serviceDate,
        'EstQty': estQty,
        'EstQtyUnitId': estQtyUnitId,
        'EstNumberOfPieces': estNumberOfPieces,
        'PurchaseOrderId': purchaseOrderId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ServiceTaskController.CreateAsync (SpektrERP.HttpApi)
   * @returns ServiceTaskDto Success
   * @throws ApiError
   */
  public serviceTaskCreate({
requestBody,
}: {
requestBody?: ServiceTaskCreateDto,
}): CancelablePromise<ServiceTaskDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/service-tasks',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
