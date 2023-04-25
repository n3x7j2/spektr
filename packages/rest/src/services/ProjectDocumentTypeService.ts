/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectDocumentTypeDto } from '../models/PagedResultDtoOfProjectDocumentTypeDto';
import type { ProjectDocumentDto } from '../models/ProjectDocumentDto';
import type { ProjectDocumentTypeCreateDto } from '../models/ProjectDocumentTypeCreateDto';
import type { ProjectDocumentTypeDto } from '../models/ProjectDocumentTypeDto';
import type { ProjectDocumentTypeUpdateDto } from '../models/ProjectDocumentTypeUpdateDto';
import type { ProjectDocumentTypeUpsertDto } from '../models/ProjectDocumentTypeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectDocumentTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectDocumentTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentTypeDto Success
   * @throws ApiError
   */
  public projectDocumentTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectDocumentTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectDocumentTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentTypeDto Success
   * @throws ApiError
   */
  public projectDocumentTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectDocumentTypeUpdateDto,
}): CancelablePromise<ProjectDocumentTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-document-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectDocumentTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectDocumentTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-document-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectDocumentTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectDocumentTypeDto Success
   * @throws ApiError
   */
  public projectDocumentTypeGetList({
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectDocumentTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-types',
      query: {
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectDocumentTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentTypeDto Success
   * @throws ApiError
   */
  public projectDocumentTypeCreate({
requestBody,
}: {
requestBody?: ProjectDocumentTypeCreateDto,
}): CancelablePromise<ProjectDocumentTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-document-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get All Document
   * SpektrERP.Controllers.ProjectDocumentTypeController.GetAllDocumentAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentDto Success
   * @throws ApiError
   */
  public projectDocumentTypeGetAllDocument({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<ProjectDocumentDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-types/documents/{projectId}',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectDocumentTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentTypeDto Success
   * @throws ApiError
   */
  public projectDocumentTypeUpsert({
requestBody,
}: {
requestBody?: Array<ProjectDocumentTypeUpsertDto>,
}): CancelablePromise<Array<ProjectDocumentTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-document-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
