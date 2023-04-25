/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectContactDto } from '../models/PagedResultDtoOfProjectContactDto';
import type { PagedResultDtoOfProjectPartialDto } from '../models/PagedResultDtoOfProjectPartialDto';
import type { ProjectContactCreateDto } from '../models/ProjectContactCreateDto';
import type { ProjectContactDto } from '../models/ProjectContactDto';
import type { ProjectContactUpdateDto } from '../models/ProjectContactUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectContactService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.ProjectContactController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectContactDto Success
   * @throws ApiError
   */
  public projectContactGetList({
projectId,
companyBranchContactId,
projectContactPriorityId,
projectContactTypeId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId: string,
companyBranchContactId?: string,
projectContactPriorityId?: string,
projectContactTypeId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectContactDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/{projectId}/contacts',
      path: {
        'projectId': projectId,
      },
      query: {
        'CompanyBranchContactId': companyBranchContactId,
        'ProjectContactPriorityId': projectContactPriorityId,
        'ProjectContactTypeId': projectContactTypeId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectContactController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectContactDto Success
   * @throws ApiError
   */
  public projectContactCreate({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: ProjectContactCreateDto,
}): CancelablePromise<ProjectContactDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/{projectId}/contacts',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectContactController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectContactDto Success
   * @throws ApiError
   */
  public projectContactGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectContactDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/contacts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectContactController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectContactDto Success
   * @throws ApiError
   */
  public projectContactUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectContactUpdateDto,
}): CancelablePromise<ProjectContactDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/contacts/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectContactController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectContactDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/projects/contacts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectContactController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectPartialDto Success
   * @throws ApiError
   */
  public projectContactGetList1({
contactId,
sorting,
skipCount,
maxResultCount,
disablePagination,
}: {
contactId: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
disablePagination?: boolean,
}): CancelablePromise<PagedResultDtoOfProjectPartialDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/project-partial/by-contacts/{contactId}',
      path: {
        'contactId': contactId,
      },
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
        'disablePagination': disablePagination,
      },
    });
  }

}
