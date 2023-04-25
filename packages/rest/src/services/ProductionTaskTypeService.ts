/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProductionTaskTypeDto } from '../models/PagedResultDtoOfProductionTaskTypeDto';
import type { ProductionTaskTypeCreateDto } from '../models/ProductionTaskTypeCreateDto';
import type { ProductionTaskTypeDto } from '../models/ProductionTaskTypeDto';
import type { ProductionTaskTypeUpdateDto } from '../models/ProductionTaskTypeUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductionTaskTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProductionTaskTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProductionTaskTypeDto Success
   * @throws ApiError
   */
  public productionTaskTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProductionTaskTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-task-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductionTaskTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProductionTaskTypeDto Success
   * @throws ApiError
   */
  public productionTaskTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProductionTaskTypeUpdateDto,
}): CancelablePromise<ProductionTaskTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/production-task-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProductionTaskTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionTaskTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/production-task-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductionTaskTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductionTaskTypeDto Success
   * @throws ApiError
   */
  public productionTaskTypeGetList({
taskType,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
taskType?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductionTaskTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-task-types',
      query: {
        'TaskType': taskType,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProductionTaskTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProductionTaskTypeDto Success
   * @throws ApiError
   */
  public productionTaskTypeCreate({
requestBody,
}: {
requestBody?: ProductionTaskTypeCreateDto,
}): CancelablePromise<ProductionTaskTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/production-task-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
