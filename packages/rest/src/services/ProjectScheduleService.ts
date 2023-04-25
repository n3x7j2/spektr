/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectScheduleDto } from '../models/PagedResultDtoOfProjectScheduleDto';
import type { ProjectScheduleCreateDto } from '../models/ProjectScheduleCreateDto';
import type { ProjectScheduleDto } from '../models/ProjectScheduleDto';
import type { ProjectScheduleStatus } from '../models/ProjectScheduleStatus';
import type { ProjectScheduleUpdateDto } from '../models/ProjectScheduleUpdateDto';
import type { ProjectScheduleUpsertDto } from '../models/ProjectScheduleUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectScheduleService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectScheduleController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleDto Success
   * @throws ApiError
   */
  public projectScheduleGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectScheduleDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-schedules/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectScheduleController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleDto Success
   * @throws ApiError
   */
  public projectScheduleUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectScheduleUpdateDto,
}): CancelablePromise<ProjectScheduleDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-schedules/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectScheduleController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectScheduleDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-schedules/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectScheduleController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectScheduleDto Success
   * @throws ApiError
   */
  public projectScheduleGetList({
projectId,
eventTypeId,
status,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
eventTypeId?: string,
status?: ProjectScheduleStatus,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectScheduleDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-schedules',
      query: {
        'ProjectId': projectId,
        'EventTypeId': eventTypeId,
        'Status': status,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectScheduleController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleDto Success
   * @throws ApiError
   */
  public projectScheduleCreate({
requestBody,
}: {
requestBody?: ProjectScheduleCreateDto,
}): CancelablePromise<ProjectScheduleDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-schedules',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectScheduleController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectScheduleDto Success
   * @throws ApiError
   */
  public projectScheduleUpsert({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<ProjectScheduleUpsertDto>,
}): CancelablePromise<Array<ProjectScheduleDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-schedules/upserts/{projectId}',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
