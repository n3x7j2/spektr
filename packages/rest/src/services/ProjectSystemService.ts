/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneProjectSystemDto } from '../models/CloneProjectSystemDto';
import type { PagedResultDtoOfProjectSystemDto } from '../models/PagedResultDtoOfProjectSystemDto';
import type { ProjectSystemCloneDto } from '../models/ProjectSystemCloneDto';
import type { ProjectSystemCreateDto } from '../models/ProjectSystemCreateDto';
import type { ProjectSystemDto } from '../models/ProjectSystemDto';
import type { ProjectSystemUpdateDto } from '../models/ProjectSystemUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectSystemService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.ProjectSystemController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemDto Success
   * @throws ApiError
   */
  public projectSystemCreate({
requestBody,
}: {
requestBody?: ProjectSystemCreateDto,
}): CancelablePromise<ProjectSystemDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-systems',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectSystemController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectSystemDto Success
   * @throws ApiError
   */
  public projectSystemGetList({
projectId,
systemId,
systemTypeId,
description,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
systemId?: string,
systemTypeId?: string,
description?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectSystemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-systems',
      query: {
        'ProjectId': projectId,
        'SystemId': systemId,
        'SystemTypeId': systemTypeId,
        'Description': description,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectSystemController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectSystemDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-systems/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectSystemController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemDto Success
   * @throws ApiError
   */
  public projectSystemGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectSystemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-systems/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectSystemController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemDto Success
   * @throws ApiError
   */
  public projectSystemUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectSystemUpdateDto,
}): CancelablePromise<ProjectSystemDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-systems/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Clone
   * SpektrERP.Controllers.ProjectSystemController.CloneAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemCloneDto Success
   * @throws ApiError
   */
  public projectSystemClone({
id,
}: {
id: string,
}): CancelablePromise<ProjectSystemCloneDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-systems/{id}/clone',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Clone Project System
   * SpektrERP.Controllers.ProjectSystemController.CloneProjectSystem (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public projectSystemCloneProjectSystem({
requestBody,
}: {
requestBody?: CloneProjectSystemDto,
}): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-systems/clone-to-project',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
