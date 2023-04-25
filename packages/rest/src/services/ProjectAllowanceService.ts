/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectAllowanceDto } from '../models/PagedResultDtoOfProjectAllowanceDto';
import type { ProjectAllowanceCreateDto } from '../models/ProjectAllowanceCreateDto';
import type { ProjectAllowanceDto } from '../models/ProjectAllowanceDto';
import type { ProjectAllowanceUpdateDto } from '../models/ProjectAllowanceUpdateDto';
import type { ProjectAllowanceUpsertDto } from '../models/ProjectAllowanceUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectAllowanceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectAllowanceController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceDto Success
   * @throws ApiError
   */
  public projectAllowanceGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectAllowanceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-allowances/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectAllowanceController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceDto Success
   * @throws ApiError
   */
  public projectAllowanceUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectAllowanceUpdateDto,
}): CancelablePromise<ProjectAllowanceDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-allowances/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectAllowanceController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectAllowanceDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-allowances/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectAllowanceController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectAllowanceDto Success
   * @throws ApiError
   */
  public projectAllowanceGetList({
projectId,
projectAllowanceTypeId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
projectAllowanceTypeId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectAllowanceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-allowances',
      query: {
        'ProjectId': projectId,
        'ProjectAllowanceTypeId': projectAllowanceTypeId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectAllowanceController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceDto Success
   * @throws ApiError
   */
  public projectAllowanceCreate({
requestBody,
}: {
requestBody?: ProjectAllowanceCreateDto,
}): CancelablePromise<ProjectAllowanceDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-allowances',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectAllowanceController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceDto Success
   * @throws ApiError
   */
  public projectAllowanceUpsert({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<ProjectAllowanceUpsertDto>,
}): CancelablePromise<Array<ProjectAllowanceDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-allowances/upserts/{projectId}',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
