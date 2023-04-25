/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectWallTypeCategoryDto } from '../models/PagedResultDtoOfProjectWallTypeCategoryDto';
import type { ProjectWallTypeCategoryCreateDto } from '../models/ProjectWallTypeCategoryCreateDto';
import type { ProjectWallTypeCategoryDto } from '../models/ProjectWallTypeCategoryDto';
import type { ProjectWallTypeCategoryUpdateDto } from '../models/ProjectWallTypeCategoryUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectWallTypeCategoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectWallTypeCategoryController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeCategoryDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectWallTypeCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-wall-type-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectWallTypeCategoryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeCategoryDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectWallTypeCategoryUpdateDto,
}): CancelablePromise<ProjectWallTypeCategoryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-wall-type-categories/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectWallTypeCategoryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectWallTypeCategoryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-wall-type-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectWallTypeCategoryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectWallTypeCategoryDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryGetList({
category,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
category?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectWallTypeCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-wall-type-categories',
      query: {
        'Category': category,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectWallTypeCategoryController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectWallTypeCategoryDto Success
   * @throws ApiError
   */
  public projectWallTypeCategoryCreate({
requestBody,
}: {
requestBody?: ProjectWallTypeCategoryCreateDto,
}): CancelablePromise<ProjectWallTypeCategoryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-wall-type-categories',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
