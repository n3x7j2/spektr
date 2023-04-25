/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectStageDto } from '../models/PagedResultDtoOfProjectStageDto';
import type { ProjectStageCreateDto } from '../models/ProjectStageCreateDto';
import type { ProjectStageDto } from '../models/ProjectStageDto';
import type { ProjectStageUpdateDto } from '../models/ProjectStageUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectStageService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectStageController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectStageDto Success
   * @throws ApiError
   */
  public projectStageGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectStageDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-stages/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectStageController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectStageDto Success
   * @throws ApiError
   */
  public projectStageUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectStageUpdateDto,
}): CancelablePromise<ProjectStageDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-stages/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectStageController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectStageDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-stages/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectStageController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectStageDto Success
   * @throws ApiError
   */
  public projectStageGetList({
projectStageName,
isApproval,
isProduction,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectStageName?: string,
isApproval?: boolean,
isProduction?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectStageDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-stages',
      query: {
        'ProjectStageName': projectStageName,
        'IsApproval': isApproval,
        'IsProduction': isProduction,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectStageController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectStageDto Success
   * @throws ApiError
   */
  public projectStageCreate({
requestBody,
}: {
requestBody?: ProjectStageCreateDto,
}): CancelablePromise<ProjectStageDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-stages',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
