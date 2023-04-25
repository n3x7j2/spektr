/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProductionTaskDto } from '../models/PagedResultDtoOfProductionTaskDto';
import type { ProductionTaskCreateDto } from '../models/ProductionTaskCreateDto';
import type { ProductionTaskDto } from '../models/ProductionTaskDto';
import type { ProductionTaskUpdateDto } from '../models/ProductionTaskUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductionTaskService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProductionTaskController.GetAsync (SpektrERP.HttpApi)
   * @returns ProductionTaskDto Success
   * @throws ApiError
   */
  public productionTaskGet({
id,
}: {
id: string,
}): CancelablePromise<ProductionTaskDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-tasks/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductionTaskController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProductionTaskDto Success
   * @throws ApiError
   */
  public productionTaskUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProductionTaskUpdateDto,
}): CancelablePromise<ProductionTaskDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/production-tasks/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProductionTaskController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionTaskDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/production-tasks/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductionTaskController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductionTaskDto Success
   * @throws ApiError
   */
  public productionTaskGetList({
task,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
task?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductionTaskDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-tasks',
      query: {
        'Task': task,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProductionTaskController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProductionTaskDto Success
   * @throws ApiError
   */
  public productionTaskCreate({
requestBody,
}: {
requestBody?: ProductionTaskCreateDto,
}): CancelablePromise<ProductionTaskDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/production-tasks',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
