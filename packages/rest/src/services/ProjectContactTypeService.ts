/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfProjectContactTypeDto } from '../models/PagedResultDtoOfProjectContactTypeDto';
import type { ProjectContactTypeCreateDto } from '../models/ProjectContactTypeCreateDto';
import type { ProjectContactTypeDto } from '../models/ProjectContactTypeDto';
import type { ProjectContactTypeUpdateDto } from '../models/ProjectContactTypeUpdateDto';
import type { ProjectContactTypeUpsertDto } from '../models/ProjectContactTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectContactTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectContactTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectContactTypeDto Success
   * @throws ApiError
   */
  public projectContactTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectContactTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/contact-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectContactTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectContactTypeDto Success
   * @throws ApiError
   */
  public projectContactTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectContactTypeUpdateDto,
}): CancelablePromise<ProjectContactTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/contact-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectContactTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectContactTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/projects/contact-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectContactTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectContactTypeDto Success
   * @throws ApiError
   */
  public projectContactTypeGetList({
contactType,
sorting,
skipCount,
maxResultCount,
}: {
contactType?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectContactTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/contact-types',
      query: {
        'ContactType': contactType,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectContactTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectContactTypeDto Success
   * @throws ApiError
   */
  public projectContactTypeCreate({
requestBody,
}: {
requestBody?: ProjectContactTypeCreateDto,
}): CancelablePromise<ProjectContactTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/contact-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Project Contact Type
   * SpektrERP.Controllers.ProjectContactTypeController.GetListDropDownProjectContactTypeAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public projectContactTypeGetListDropDownProjectContactType({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/projects/contact-types',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectContactTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectContactTypeDto Success
   * @throws ApiError
   */
  public projectContactTypeUpsert({
requestBody,
}: {
requestBody?: Array<ProjectContactTypeUpsertDto>,
}): CancelablePromise<Array<ProjectContactTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/contact-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
