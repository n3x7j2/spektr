/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectStatusUpdateDto } from '../models/PagedResultDtoOfProjectStatusUpdateDto';
import type { ProjectStatusUpdateCreateDto } from '../models/ProjectStatusUpdateCreateDto';
import type { ProjectStatusUpdateDto } from '../models/ProjectStatusUpdateDto';
import type { ProjectStatusUpdateUpdateDto } from '../models/ProjectStatusUpdateUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectStatusUpdateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectStatusUpdateController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDto Success
   * @throws ApiError
   */
  public projectStatusUpdateGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectStatusUpdateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectStatusUpdateController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDto Success
   * @throws ApiError
   */
  public projectStatusUpdateUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectStatusUpdateUpdateDto,
}): CancelablePromise<ProjectStatusUpdateDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-status-update/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectStatusUpdateController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectStatusUpdateDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-status-update/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectStatusUpdateController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectStatusUpdateDto Success
   * @throws ApiError
   */
  public projectStatusUpdateGetList({
projectId,
customerId,
projectDocumentTypeId,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
customerId?: string,
projectDocumentTypeId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectStatusUpdateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update',
      query: {
        'ProjectId': projectId,
        'CustomerId': customerId,
        'ProjectDocumentTypeId': projectDocumentTypeId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectStatusUpdateController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDto Success
   * @throws ApiError
   */
  public projectStatusUpdateCreate({
requestBody,
}: {
requestBody?: ProjectStatusUpdateCreateDto,
}): CancelablePromise<ProjectStatusUpdateDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
