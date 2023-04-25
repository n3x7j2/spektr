/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectStatusDto } from '../models/PagedResultDtoOfProjectStatusDto';
import type { ProjectStatusCreateDto } from '../models/ProjectStatusCreateDto';
import type { ProjectStatusDto } from '../models/ProjectStatusDto';
import type { ProjectStatusUpdateInputDto } from '../models/ProjectStatusUpdateInputDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusDto Success
   * @throws ApiError
   */
  public projectStatusGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusDto Success
   * @throws ApiError
   */
  public projectStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectStatusUpdateInputDto,
}): CancelablePromise<ProjectStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectStatusDto Success
   * @throws ApiError
   */
  public projectStatusGetList({
disablePagination,
isDraft,
isCompleted,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
isDraft?: boolean,
isCompleted?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-statuses',
      query: {
        'DisablePagination': disablePagination,
        'IsDraft': isDraft,
        'IsCompleted': isCompleted,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusDto Success
   * @throws ApiError
   */
  public projectStatusCreate({
requestBody,
}: {
requestBody?: ProjectStatusCreateDto,
}): CancelablePromise<ProjectStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
