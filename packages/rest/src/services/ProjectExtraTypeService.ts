/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectExtraTypeDto } from '../models/PagedResultDtoOfProjectExtraTypeDto';
import type { ProjectExtraTypeCreateDto } from '../models/ProjectExtraTypeCreateDto';
import type { ProjectExtraTypeDto } from '../models/ProjectExtraTypeDto';
import type { ProjectExtraTypeUpdateDto } from '../models/ProjectExtraTypeUpdateDto';
import type { ProjectExtraTypeUpsertDto } from '../models/ProjectExtraTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectExtraTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectExtraTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraTypeDto Success
   * @throws ApiError
   */
  public projectExtraTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectExtraTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-extra-type/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectExtraTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraTypeDto Success
   * @throws ApiError
   */
  public projectExtraTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectExtraTypeUpdateDto,
}): CancelablePromise<ProjectExtraTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-extra-type/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectExtraTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectExtraTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-extra-type/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectExtraTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectExtraTypeDto Success
   * @throws ApiError
   */
  public projectExtraTypeGetList({
extraType,
isMainScope,
sorting,
skipCount,
maxResultCount,
}: {
extraType?: string,
isMainScope?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectExtraTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-extra-type',
      query: {
        'ExtraType': extraType,
        'IsMainScope': isMainScope,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectExtraTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraTypeDto Success
   * @throws ApiError
   */
  public projectExtraTypeCreate({
requestBody,
}: {
requestBody?: ProjectExtraTypeCreateDto,
}): CancelablePromise<ProjectExtraTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-extra-type',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectExtraTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraTypeDto Success
   * @throws ApiError
   */
  public projectExtraTypeUpsert({
requestBody,
}: {
requestBody?: Array<ProjectExtraTypeUpsertDto>,
}): CancelablePromise<Array<ProjectExtraTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-extra-type/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
