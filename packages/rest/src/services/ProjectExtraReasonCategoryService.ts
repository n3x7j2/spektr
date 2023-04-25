/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectExtraReasonCategoryDto } from '../models/PagedResultDtoOfProjectExtraReasonCategoryDto';
import type { ProjectExtraReasonCategoryCreateDto } from '../models/ProjectExtraReasonCategoryCreateDto';
import type { ProjectExtraReasonCategoryDto } from '../models/ProjectExtraReasonCategoryDto';
import type { ProjectExtraReasonCategoryUpdateDto } from '../models/ProjectExtraReasonCategoryUpdateDto';
import type { ProjectExtraReasonCategoryUpsertDto } from '../models/ProjectExtraReasonCategoryUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectExtraReasonCategoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectExtraReasonCategoryController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraReasonCategoryDto Success
   * @throws ApiError
   */
  public projectExtraReasonCategoryGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectExtraReasonCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-extra-reason-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectExtraReasonCategoryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraReasonCategoryDto Success
   * @throws ApiError
   */
  public projectExtraReasonCategoryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectExtraReasonCategoryUpdateDto,
}): CancelablePromise<ProjectExtraReasonCategoryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-extra-reason-categories/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectExtraReasonCategoryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectExtraReasonCategoryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-extra-reason-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectExtraReasonCategoryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectExtraReasonCategoryDto Success
   * @throws ApiError
   */
  public projectExtraReasonCategoryGetList({
reasonCategory,
isMainScope,
sorting,
skipCount,
maxResultCount,
}: {
reasonCategory?: string,
isMainScope?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectExtraReasonCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-extra-reason-categories',
      query: {
        'ReasonCategory': reasonCategory,
        'IsMainScope': isMainScope,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectExtraReasonCategoryController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraReasonCategoryDto Success
   * @throws ApiError
   */
  public projectExtraReasonCategoryCreate({
requestBody,
}: {
requestBody?: ProjectExtraReasonCategoryCreateDto,
}): CancelablePromise<ProjectExtraReasonCategoryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-extra-reason-categories',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectExtraReasonCategoryController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraReasonCategoryDto Success
   * @throws ApiError
   */
  public projectExtraReasonCategoryUpsert({
requestBody,
}: {
requestBody?: Array<ProjectExtraReasonCategoryUpsertDto>,
}): CancelablePromise<Array<ProjectExtraReasonCategoryDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-extra-reason-categories/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
