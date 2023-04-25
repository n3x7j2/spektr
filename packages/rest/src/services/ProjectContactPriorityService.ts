/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfProjectContactPriorityDto } from '../models/PagedResultDtoOfProjectContactPriorityDto';
import type { ProjectContactPriorityCreateDto } from '../models/ProjectContactPriorityCreateDto';
import type { ProjectContactPriorityDto } from '../models/ProjectContactPriorityDto';
import type { ProjectContactPriorityUpdateDto } from '../models/ProjectContactPriorityUpdateDto';
import type { ProjectContactPriorityUpsertDto } from '../models/ProjectContactPriorityUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectContactPriorityService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectContactPriorityController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectContactPriorityDto Success
   * @throws ApiError
   */
  public projectContactPriorityGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectContactPriorityDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/contact-priorities/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectContactPriorityController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectContactPriorityDto Success
   * @throws ApiError
   */
  public projectContactPriorityUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectContactPriorityUpdateDto,
}): CancelablePromise<ProjectContactPriorityDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/contact-priorities/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectContactPriorityController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectContactPriorityDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/projects/contact-priorities/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectContactPriorityController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectContactPriorityDto Success
   * @throws ApiError
   */
  public projectContactPriorityGetList({
priority,
sorting,
skipCount,
maxResultCount,
}: {
priority?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectContactPriorityDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/contact-priorities',
      query: {
        'Priority': priority,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectContactPriorityController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectContactPriorityDto Success
   * @throws ApiError
   */
  public projectContactPriorityCreate({
requestBody,
}: {
requestBody?: ProjectContactPriorityCreateDto,
}): CancelablePromise<ProjectContactPriorityDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/contact-priorities',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Project Contact Priority
   * SpektrERP.Controllers.ProjectContactPriorityController.GetListDropDownProjectContactPriorityAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public projectContactPriorityGetListDropDownProjectContactPriority({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/project/contact-priorities',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectContactPriorityController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectContactPriorityDto Success
   * @throws ApiError
   */
  public projectContactPriorityUpsert({
requestBody,
}: {
requestBody?: Array<ProjectContactPriorityUpsertDto>,
}): CancelablePromise<Array<ProjectContactPriorityDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/contact-priorities/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
