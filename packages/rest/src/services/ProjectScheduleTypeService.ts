/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectScheduleTypeDto } from '../models/PagedResultDtoOfProjectScheduleTypeDto';
import type { ProjectScheduleTypeCalculation } from '../models/ProjectScheduleTypeCalculation';
import type { ProjectScheduleTypeCreateDto } from '../models/ProjectScheduleTypeCreateDto';
import type { ProjectScheduleTypeDto } from '../models/ProjectScheduleTypeDto';
import type { ProjectScheduleTypeUpdateDto } from '../models/ProjectScheduleTypeUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectScheduleTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectScheduleTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleTypeDto Success
   * @throws ApiError
   */
  public projectScheduleTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectScheduleTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-schedule-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectScheduleTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleTypeDto Success
   * @throws ApiError
   */
  public projectScheduleTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectScheduleTypeUpdateDto,
}): CancelablePromise<ProjectScheduleTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-schedule-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectScheduleTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectScheduleTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-schedule-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectScheduleTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectScheduleTypeDto Success
   * @throws ApiError
   */
  public projectScheduleTypeGetList({
eventType,
calculation,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
eventType?: string,
calculation?: ProjectScheduleTypeCalculation,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectScheduleTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-schedule-types',
      query: {
        'EventType': eventType,
        'Calculation': calculation,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectScheduleTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleTypeDto Success
   * @throws ApiError
   */
  public projectScheduleTypeCreate({
requestBody,
}: {
requestBody?: ProjectScheduleTypeCreateDto,
}): CancelablePromise<ProjectScheduleTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-schedule-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
