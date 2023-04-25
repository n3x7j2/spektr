/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectExtraDto } from '../models/PagedResultDtoOfProjectExtraDto';
import type { ProjectExtraCreateDto } from '../models/ProjectExtraCreateDto';
import type { ProjectExtraDto } from '../models/ProjectExtraDto';
import type { ProjectExtraLookUpDto } from '../models/ProjectExtraLookUpDto';
import type { ProjectExtraUpdateDto } from '../models/ProjectExtraUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectExtraService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.ProjectExtraController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectExtraDto Success
   * @throws ApiError
   */
  public projectExtraGetList({
extraTypeId,
reasonCategoryId,
extraStatusId,
billable,
projectId,
sorting,
skipCount,
maxResultCount,
}: {
extraTypeId?: string,
reasonCategoryId?: string,
extraStatusId?: string,
billable?: boolean,
projectId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectExtraDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/extras',
      query: {
        'ExtraTypeID': extraTypeId,
        'ReasonCategoryID': reasonCategoryId,
        'ExtraStatusID': extraStatusId,
        'Billable': billable,
        'ProjectId': projectId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectExtraController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraDto Success
   * @throws ApiError
   */
  public projectExtraCreate({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: ProjectExtraCreateDto,
}): CancelablePromise<ProjectExtraDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/{projectId}/extras',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectExtraController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraDto Success
   * @throws ApiError
   */
  public projectExtraGet({
projectExtraId,
}: {
projectExtraId: string,
}): CancelablePromise<ProjectExtraDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/extras/{projectExtraId}',
      path: {
        'projectExtraId': projectExtraId,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectExtraController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraDto Success
   * @throws ApiError
   */
  public projectExtraUpdate({
projectExtraId,
requestBody,
}: {
projectExtraId: string,
requestBody?: ProjectExtraUpdateDto,
}): CancelablePromise<ProjectExtraDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/extras/{projectExtraId}',
      path: {
        'projectExtraId': projectExtraId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectExtraController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectExtraDelete({
projectExtraId,
}: {
projectExtraId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/projects/extras/{projectExtraId}',
      path: {
        'projectExtraId': projectExtraId,
      },
    });
  }

  /**
   * Get Project Extra Look up
   * SpektrERP.Controllers.ProjectExtraController.GetProjectExtraLookUpAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraLookUpDto Success
   * @throws ApiError
   */
  public projectExtraGetProjectExtraLookUp({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<ProjectExtraLookUpDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/extras/lookup/{projectId}',
      path: {
        'projectId': projectId,
      },
    });
  }

}
