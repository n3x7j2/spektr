/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectExtraStatusDto } from '../models/PagedResultDtoOfProjectExtraStatusDto';
import type { ProjectExtraStatusCreateDto } from '../models/ProjectExtraStatusCreateDto';
import type { ProjectExtraStatusDto } from '../models/ProjectExtraStatusDto';
import type { ProjectExtraStatusUpdateDto } from '../models/ProjectExtraStatusUpdateDto';
import type { ProjectExtraStatusUpsertDto } from '../models/ProjectExtraStatusUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectExtraStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectExtraStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraStatusDto Success
   * @throws ApiError
   */
  public projectExtraStatusGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectExtraStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-extra-status/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectExtraStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraStatusDto Success
   * @throws ApiError
   */
  public projectExtraStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectExtraStatusUpdateDto,
}): CancelablePromise<ProjectExtraStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-extra-status/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectExtraStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectExtraStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-extra-status/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectExtraStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectExtraStatusDto Success
   * @throws ApiError
   */
  public projectExtraStatusGetList({
status,
isMainScope,
sorting,
skipCount,
maxResultCount,
}: {
status?: string,
isMainScope?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectExtraStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-extra-status',
      query: {
        'Status': status,
        'IsMainScope': isMainScope,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectExtraStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraStatusDto Success
   * @throws ApiError
   */
  public projectExtraStatusCreate({
requestBody,
}: {
requestBody?: ProjectExtraStatusCreateDto,
}): CancelablePromise<ProjectExtraStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-extra-status',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectExtraStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraStatusDto Success
   * @throws ApiError
   */
  public projectExtraStatusUpsert({
requestBody,
}: {
requestBody?: Array<ProjectExtraStatusUpsertDto>,
}): CancelablePromise<Array<ProjectExtraStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-extra-status/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
