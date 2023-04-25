/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectWallTypeCategoryTypeDto } from '../models/PagedResultDtoOfProjectWallTypeCategoryTypeDto';
import type { ProjectWallTypeCategoryTypeCreateDto } from '../models/ProjectWallTypeCategoryTypeCreateDto';
import type { ProjectWallTypeCategoryTypeDto } from '../models/ProjectWallTypeCategoryTypeDto';
import type { ProjectWallTypeCategoryTypeUpdateDto } from '../models/ProjectWallTypeCategoryTypeUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectWallTypeCategoryTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectWallTypeCategoryTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeCategoryTypeDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectWallTypeCategoryTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-wall-type-category-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectWallTypeCategoryTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeCategoryTypeDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectWallTypeCategoryTypeUpdateDto,
}): CancelablePromise<ProjectWallTypeCategoryTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-wall-type-category-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectWallTypeCategoryTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectWallTypeCategoryTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-wall-type-category-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectWallTypeCategoryTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectWallTypeCategoryTypeDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryTypeGetList({
projectWallTypeCategoryId,
type,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectWallTypeCategoryId?: string,
type?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectWallTypeCategoryTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-wall-type-category-types',
      query: {
        'ProjectWallTypeCategoryId': projectWallTypeCategoryId,
        'Type': type,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectWallTypeCategoryTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeCategoryTypeDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryTypeCreate({
requestBody,
}: {
requestBody?: ProjectWallTypeCategoryTypeCreateDto,
}): CancelablePromise<ProjectWallTypeCategoryTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-wall-type-category-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
