/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectPhaseDto } from '../models/PagedResultDtoOfProjectPhaseDto';
import type { ProjectPhaseCreateDto } from '../models/ProjectPhaseCreateDto';
import type { ProjectPhaseDto } from '../models/ProjectPhaseDto';
import type { ProjectPhaseLookUpDto } from '../models/ProjectPhaseLookUpDto';
import type { ProjectPhaseUpdateDto } from '../models/ProjectPhaseUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectPhaseService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.ProjectPhaseController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectPhaseDto Success
   * @throws ApiError
   */
  public projectPhaseGetList({
projectId,
projectExtraNumber,
projectPhase,
isProjectPhaseSearchEqualCondition,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
projectExtraNumber?: number,
projectPhase?: string,
isProjectPhaseSearchEqualCondition?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectPhaseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/extras/phases',
      query: {
        'ProjectId': projectId,
        'ProjectExtraNumber': projectExtraNumber,
        'ProjectPhase': projectPhase,
        'IsProjectPhaseSearchEqualCondition': isProjectPhaseSearchEqualCondition,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectPhaseController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectPhaseDto Success
   * @throws ApiError
   */
  public projectPhaseCreate({
projectExtraId,
requestBody,
}: {
projectExtraId: string,
requestBody?: ProjectPhaseCreateDto,
}): CancelablePromise<ProjectPhaseDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/extras/{projectExtraId}/phases',
      path: {
        'projectExtraId': projectExtraId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectPhaseController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectPhaseDto Success
   * @throws ApiError
   */
  public projectPhaseGet({
projectPhaseId,
}: {
projectPhaseId: string,
}): CancelablePromise<ProjectPhaseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/extras/phases/{projectPhaseId}',
      path: {
        'projectPhaseId': projectPhaseId,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectPhaseController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectPhaseDto Success
   * @throws ApiError
   */
  public projectPhaseUpdate({
projectPhaseId,
requestBody,
}: {
projectPhaseId: string,
requestBody?: ProjectPhaseUpdateDto,
}): CancelablePromise<ProjectPhaseDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/extras/phases/{projectPhaseId}',
      path: {
        'projectPhaseId': projectPhaseId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectPhaseController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectPhaseDelete({
projectPhaseId,
}: {
projectPhaseId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/projects/extras/phases/{projectPhaseId}',
      path: {
        'projectPhaseId': projectPhaseId,
      },
    });
  }

  /**
   * Get Project Phase Look up
   * SpektrERP.Controllers.ProjectPhaseController.GetProjectPhaseLookUpAsync (SpektrERP.HttpApi)
   * @returns ProjectPhaseLookUpDto Success
   * @throws ApiError
   */
  public projectPhaseGetProjectPhaseLookUp({
projectExtraId,
}: {
projectExtraId: string,
}): CancelablePromise<Array<ProjectPhaseLookUpDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/extras/phases/lookup/{projectExtraId}',
      path: {
        'projectExtraId': projectExtraId,
      },
    });
  }

}
