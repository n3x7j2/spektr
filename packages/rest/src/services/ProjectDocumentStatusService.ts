/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectDocumentStatusDto } from '../models/PagedResultDtoOfProjectDocumentStatusDto';
import type { ProjectDocumentStatusCreateDto } from '../models/ProjectDocumentStatusCreateDto';
import type { ProjectDocumentStatusDto } from '../models/ProjectDocumentStatusDto';
import type { ProjectDocumentStatusUpdateDto } from '../models/ProjectDocumentStatusUpdateDto';
import type { ProjectDocumentStatusUpsertDto } from '../models/ProjectDocumentStatusUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectDocumentStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectDocumentStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentStatusDto Success
   * @throws ApiError
   */
  public projectDocumentStatusGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectDocumentStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectDocumentStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentStatusDto Success
   * @throws ApiError
   */
  public projectDocumentStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectDocumentStatusUpdateDto,
}): CancelablePromise<ProjectDocumentStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-document-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectDocumentStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectDocumentStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-document-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectDocumentStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectDocumentStatusDto Success
   * @throws ApiError
   */
  public projectDocumentStatusGetList({
disablePagination,
status,
isDefault,
isCompleted,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
status?: string,
isDefault?: boolean,
isCompleted?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectDocumentStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-statuses',
      query: {
        'DisablePagination': disablePagination,
        'Status': status,
        'IsDefault': isDefault,
        'IsCompleted': isCompleted,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectDocumentStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentStatusDto Success
   * @throws ApiError
   */
  public projectDocumentStatusCreate({
requestBody,
}: {
requestBody?: ProjectDocumentStatusCreateDto,
}): CancelablePromise<ProjectDocumentStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-document-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectDocumentStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentStatusDto Success
   * @throws ApiError
   */
  public projectDocumentStatusUpsert({
requestBody,
}: {
requestBody?: Array<ProjectDocumentStatusUpsertDto>,
}): CancelablePromise<Array<ProjectDocumentStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-document-statuses/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
