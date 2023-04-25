/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfProductionDirectiveTaskTypeDto } from '../models/PagedResultDtoOfProductionDirectiveTaskTypeDto';
import type { ProductionDirectiveTaskTypeCreateDto } from '../models/ProductionDirectiveTaskTypeCreateDto';
import type { ProductionDirectiveTaskTypeDto } from '../models/ProductionDirectiveTaskTypeDto';
import type { ProductionDirectiveTaskTypeUpdateDto } from '../models/ProductionDirectiveTaskTypeUpdateDto';
import type { ProductionDirectiveTaskTypeUpsertDto } from '../models/ProductionDirectiveTaskTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductionDirectiveTaskTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveTaskTypeDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeCreate({
requestBody,
}: {
requestBody?: ProductionDirectiveTaskTypeCreateDto,
}): CancelablePromise<ProductionDirectiveTaskTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/production-directive-task-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductionDirectiveTaskTypeDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeGetList({
taskType,
isRequiredType,
isThirdParty,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
taskType?: string,
isRequiredType?: boolean,
isThirdParty?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductionDirectiveTaskTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-directive-task-types',
      query: {
        'TaskType': taskType,
        'IsRequiredType': isRequiredType,
        'IsThirdParty': isThirdParty,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/production-directive-task-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveTaskTypeDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProductionDirectiveTaskTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-directive-task-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveTaskTypeDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProductionDirectiveTaskTypeUpdateDto,
}): CancelablePromise<ProductionDirectiveTaskTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/production-directive-task-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Production Directive Task Type
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.GetListDropDownProductionDirectiveTaskTypeAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeGetListDropDownProductionDirectiveTaskType({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/production-directive-task-types',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProductionDirectiveTaskTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveTaskTypeDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskTypeUpsert({
requestBody,
}: {
requestBody?: Array<ProductionDirectiveTaskTypeUpsertDto>,
}): CancelablePromise<Array<ProductionDirectiveTaskTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/production-directive-task-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
