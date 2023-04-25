/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectWallTypeInformationDto } from '../models/PagedResultDtoOfProjectWallTypeInformationDto';
import type { ProjectWallTypeInformationCreateDto } from '../models/ProjectWallTypeInformationCreateDto';
import type { ProjectWallTypeInformationDto } from '../models/ProjectWallTypeInformationDto';
import type { ProjectWallTypeInformationUpdateDto } from '../models/ProjectWallTypeInformationUpdateDto';
import type { ProjectWallTypeInformationUpsertDto } from '../models/ProjectWallTypeInformationUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectWallTypeInformationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectWallTypeInformationController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeInformationDto Success
   * @throws ApiError
   */
  public projectWallTypeInformationGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectWallTypeInformationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-wall-type-information/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectWallTypeInformationController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeInformationDto Success
   * @throws ApiError
   */
  public projectWallTypeInformationUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectWallTypeInformationUpdateDto,
}): CancelablePromise<ProjectWallTypeInformationDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-wall-type-information/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectWallTypeInformationController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectWallTypeInformationDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-wall-type-information/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectWallTypeInformationController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectWallTypeInformationDto Success
   * @throws ApiError
   */
  public projectWallTypeInformationGetList({
projectId,
projectWallTypeCategoryTypeId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
projectWallTypeCategoryTypeId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectWallTypeInformationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-wall-type-information',
      query: {
        'ProjectId': projectId,
        'ProjectWallTypeCategoryTypeId': projectWallTypeCategoryTypeId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectWallTypeInformationController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeInformationDto Success
   * @throws ApiError
   */
  public projectWallTypeInformationCreate({
requestBody,
}: {
requestBody?: ProjectWallTypeInformationCreateDto,
}): CancelablePromise<ProjectWallTypeInformationDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-wall-type-information',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectWallTypeInformationController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeInformationDto Success
   * @throws ApiError
   */
  public projectWallTypeInformationUpsert({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<ProjectWallTypeInformationUpsertDto>,
}): CancelablePromise<Array<ProjectWallTypeInformationDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-wall-type-information/upserts/{projectId}',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
