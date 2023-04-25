/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProductionDirectiveTaskDto } from '../models/PagedResultDtoOfProductionDirectiveTaskDto';
import type { ProductionDirectiveTaskUpdateFullDto } from '../models/ProductionDirectiveTaskUpdateFullDto';
import type { ProjectSystemComponentDto } from '../models/ProjectSystemComponentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductionDirectiveTaskService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.ProductionDirectiveTaskController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductionDirectiveTaskDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskGetList({
productionDirectiveId,
parentTaskId,
taskTypeId,
completionDate,
projectSystemComponentId,
partTypeCodeId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
productionDirectiveId?: string,
parentTaskId?: string,
taskTypeId?: string,
completionDate?: string,
projectSystemComponentId?: string,
partTypeCodeId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductionDirectiveTaskDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives/production-directive-tasks',
      query: {
        'ProductionDirectiveId': productionDirectiveId,
        'ParentTaskId': parentTaskId,
        'TaskTypeId': taskTypeId,
        'CompletionDate': completionDate,
        'ProjectSystemComponentId': projectSystemComponentId,
        'PartTypeCodeId': partTypeCodeId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductionDirectiveTaskController.UpdateAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionDirectiveTaskUpdate({
productionDirectiveId,
requestBody,
}: {
productionDirectiveId: string,
requestBody?: ProductionDirectiveTaskUpdateFullDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directives/production-directive-tasks/{productionDirectiveId}',
      path: {
        'productionDirectiveId': productionDirectiveId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductionDirectiveTaskController.GetListAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemComponentDto Success
   * @throws ApiError
   */
  public productionDirectiveTaskGetList1({
productionDirectiveId,
}: {
productionDirectiveId: string,
}): CancelablePromise<Array<ProjectSystemComponentDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/project-materials/{productionDirectiveId}',
      path: {
        'productionDirectiveId': productionDirectiveId,
      },
    });
  }

}
