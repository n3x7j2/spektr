/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfProjectTypeDto } from '../models/PagedResultDtoOfProjectTypeDto';
import type { ProjectTypeCreateDto } from '../models/ProjectTypeCreateDto';
import type { ProjectTypeDto } from '../models/ProjectTypeDto';
import type { ProjectTypeUpdateDto } from '../models/ProjectTypeUpdateDto';
import type { ProjectTypeUpsertDto } from '../models/ProjectTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectTypeDto Success
   * @throws ApiError
   */
  public projectTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectTypeDto Success
   * @throws ApiError
   */
  public projectTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectTypeUpdateDto,
}): CancelablePromise<ProjectTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectTypeDto Success
   * @throws ApiError
   */
  public projectTypeGetList({
projectTypeName,
sorting,
skipCount,
maxResultCount,
}: {
projectTypeName?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-types',
      query: {
        'ProjectTypeName': projectTypeName,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectTypeDto Success
   * @throws ApiError
   */
  public projectTypeCreate({
requestBody,
}: {
requestBody?: ProjectTypeCreateDto,
}): CancelablePromise<ProjectTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Project Type
   * SpektrERP.Controllers.ProjectTypeController.GetListDropDownProjectTypeAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public projectTypeGetListDropDownProjectType({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/project-types',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectTypeDto Success
   * @throws ApiError
   */
  public projectTypeUpsert({
requestBody,
}: {
requestBody?: Array<ProjectTypeUpsertDto>,
}): CancelablePromise<Array<ProjectTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
