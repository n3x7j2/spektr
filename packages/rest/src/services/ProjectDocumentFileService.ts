/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectDocumentFileDto } from '../models/PagedResultDtoOfProjectDocumentFileDto';
import type { ProjectDocumentFileCreateDto } from '../models/ProjectDocumentFileCreateDto';
import type { ProjectDocumentFileDto } from '../models/ProjectDocumentFileDto';
import type { ProjectDocumentFileUpdateDto } from '../models/ProjectDocumentFileUpdateDto';
import type { ProjectDocumentFileUpsertDto } from '../models/ProjectDocumentFileUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectDocumentFileService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectDocumentFileController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentFileDto Success
   * @throws ApiError
   */
  public projectDocumentFileGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectDocumentFileDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-files/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectDocumentFileController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentFileDto Success
   * @throws ApiError
   */
  public projectDocumentFileUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectDocumentFileUpdateDto,
}): CancelablePromise<ProjectDocumentFileDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-document-files/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectDocumentFileController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectDocumentFileDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-document-files/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectDocumentFileController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectDocumentFileDto Success
   * @throws ApiError
   */
  public projectDocumentFileGetList({
documentFileTitle,
documentTypeId,
documentId,
sorting,
skipCount,
maxResultCount,
}: {
documentFileTitle?: string,
documentTypeId?: string,
documentId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectDocumentFileDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-document-files',
      query: {
        'DocumentFileTitle': documentFileTitle,
        'DocumentTypeId': documentTypeId,
        'DocumentId': documentId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectDocumentFileController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentFileDto Success
   * @throws ApiError
   */
  public projectDocumentFileCreate({
requestBody,
}: {
requestBody?: ProjectDocumentFileCreateDto,
}): CancelablePromise<ProjectDocumentFileDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-document-files',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectDocumentFileController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectDocumentFileDto Success
   * @throws ApiError
   */
  public projectDocumentFileUpsert({
documentId,
requestBody,
}: {
documentId: string,
requestBody?: Array<ProjectDocumentFileUpsertDto>,
}): CancelablePromise<Array<ProjectDocumentFileDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-document-files/upserts/{documentId}',
      path: {
        'documentId': documentId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
