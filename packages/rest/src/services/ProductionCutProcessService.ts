/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProductionCutProcessDto } from '../models/PagedResultDtoOfProductionCutProcessDto';
import type { ProductionCutProcessCreateDto } from '../models/ProductionCutProcessCreateDto';
import type { ProductionCutProcessDto } from '../models/ProductionCutProcessDto';
import type { ProductionCutProcessUpdateDto } from '../models/ProductionCutProcessUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductionCutProcessService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProductionCutProcessController.GetAsync (SpektrERP.HttpApi)
   * @returns ProductionCutProcessDto Success
   * @throws ApiError
   */
  public productionCutProcessGet({
id,
}: {
id: string,
}): CancelablePromise<ProductionCutProcessDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-cut-process/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductionCutProcessController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProductionCutProcessDto Success
   * @throws ApiError
   */
  public productionCutProcessUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProductionCutProcessUpdateDto,
}): CancelablePromise<ProductionCutProcessDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/production-cut-process/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProductionCutProcessController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionCutProcessDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/production-cut-process/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductionCutProcessController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductionCutProcessDto Success
   * @throws ApiError
   */
  public productionCutProcessGetList({
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductionCutProcessDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-cut-process',
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
   * SpektrERP.Controllers.ProductionCutProcessController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProductionCutProcessDto Success
   * @throws ApiError
   */
  public productionCutProcessCreate({
requestBody,
}: {
requestBody?: ProductionCutProcessCreateDto,
}): CancelablePromise<ProductionCutProcessDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/production-cut-process',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
