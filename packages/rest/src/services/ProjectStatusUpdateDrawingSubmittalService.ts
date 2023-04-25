/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectStatusUpdateDrawingSubmittalDto } from '../models/PagedResultDtoOfProjectStatusUpdateDrawingSubmittalDto';
import type { ProjectStatusUpdateDrawingSubmittalCreateDto } from '../models/ProjectStatusUpdateDrawingSubmittalCreateDto';
import type { ProjectStatusUpdateDrawingSubmittalDto } from '../models/ProjectStatusUpdateDrawingSubmittalDto';
import type { ProjectStatusUpdateDrawingSubmittalUpdateDto } from '../models/ProjectStatusUpdateDrawingSubmittalUpdateDto';
import type { ProjectStatusUpdateDrawingSubmittalUpsertDto } from '../models/ProjectStatusUpdateDrawingSubmittalUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectStatusUpdateDrawingSubmittalService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectStatusUpdateDrawingSubmittalController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDrawingSubmittalDto Success
   * @throws ApiError
   */
  public projectStatusUpdateDrawingSubmittalGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectStatusUpdateDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update-drawing-submittal/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectStatusUpdateDrawingSubmittalController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDrawingSubmittalDto Success
   * @throws ApiError
   */
  public projectStatusUpdateDrawingSubmittalUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectStatusUpdateDrawingSubmittalUpdateDto,
}): CancelablePromise<ProjectStatusUpdateDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-status-update-drawing-submittal/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectStatusUpdateDrawingSubmittalController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectStatusUpdateDrawingSubmittalDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-status-update-drawing-submittal/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectStatusUpdateDrawingSubmittalController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectStatusUpdateDrawingSubmittalDto Success
   * @throws ApiError
   */
  public projectStatusUpdateDrawingSubmittalGetList({
projectStatusUpdateId,
sorting,
skipCount,
maxResultCount,
}: {
projectStatusUpdateId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectStatusUpdateDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update-drawing-submittal',
      query: {
        'ProjectStatusUpdateId': projectStatusUpdateId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectStatusUpdateDrawingSubmittalController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDrawingSubmittalDto Success
   * @throws ApiError
   */
  public projectStatusUpdateDrawingSubmittalCreate({
requestBody,
}: {
requestBody?: ProjectStatusUpdateDrawingSubmittalCreateDto,
}): CancelablePromise<ProjectStatusUpdateDrawingSubmittalDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update-drawing-submittal',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectStatusUpdateDrawingSubmittalController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateDrawingSubmittalDto Success
   * @throws ApiError
   */
  public projectStatusUpdateDrawingSubmittalUpsert({
projectStatusUpdateId,
requestBody,
}: {
projectStatusUpdateId: string,
requestBody?: Array<ProjectStatusUpdateDrawingSubmittalUpsertDto>,
}): CancelablePromise<Array<ProjectStatusUpdateDrawingSubmittalDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update-drawing-submittal/upserts/{projectStatusUpdateId}',
      path: {
        'projectStatusUpdateId': projectStatusUpdateId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
