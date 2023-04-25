/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectEstimateDto } from '../models/PagedResultDtoOfProjectEstimateDto';
import type { ProjectEstimateCreateDto } from '../models/ProjectEstimateCreateDto';
import type { ProjectEstimateDto } from '../models/ProjectEstimateDto';
import type { ProjectEstimateSummaryDto } from '../models/ProjectEstimateSummaryDto';
import type { ProjectEstimateUpdateDto } from '../models/ProjectEstimateUpdateDto';
import type { ProjectEstimateUpsertDto } from '../models/ProjectEstimateUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectEstimateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectEstimateController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectEstimateDto Success
   * @throws ApiError
   */
  public projectEstimateGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectEstimateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-estimates/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectEstimateController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectEstimateDto Success
   * @throws ApiError
   */
  public projectEstimateUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectEstimateUpdateDto,
}): CancelablePromise<ProjectEstimateDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-estimates/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectEstimateController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectEstimateDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-estimates/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectEstimateController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectEstimateDto Success
   * @throws ApiError
   */
  public projectEstimateGetList({
projectId,
partTypeCodeId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
partTypeCodeId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectEstimateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-estimates',
      query: {
        'ProjectId': projectId,
        'PartTypeCodeId': partTypeCodeId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectEstimateController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectEstimateDto Success
   * @throws ApiError
   */
  public projectEstimateCreate({
requestBody,
}: {
requestBody?: ProjectEstimateCreateDto,
}): CancelablePromise<ProjectEstimateDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-estimates',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Summary
   * SpektrERP.Controllers.ProjectEstimateController.GetListSummaryAsync (SpektrERP.HttpApi)
   * @returns ProjectEstimateSummaryDto Success
   * @throws ApiError
   */
  public projectEstimateGetListSummary({
projectId,
}: {
projectId?: string,
}): CancelablePromise<Array<ProjectEstimateSummaryDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-estimates/summaries',
      query: {
        'ProjectId': projectId,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectEstimateController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectEstimateDto Success
   * @throws ApiError
   */
  public projectEstimateUpsert({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: Array<ProjectEstimateUpsertDto>,
}): CancelablePromise<Array<ProjectEstimateDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-estimates/upserts/{projectId}',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
