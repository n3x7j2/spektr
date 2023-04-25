/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectStatusUpdateMaterialAquisitionLeadTimeDto } from '../models/PagedResultDtoOfProjectStatusUpdateMaterialAquisitionLeadTimeDto';
import type { ProjectStatusUpdateMaterialAquisitionLeadTimeCreateDto } from '../models/ProjectStatusUpdateMaterialAquisitionLeadTimeCreateDto';
import type { ProjectStatusUpdateMaterialAquisitionLeadTimeDto } from '../models/ProjectStatusUpdateMaterialAquisitionLeadTimeDto';
import type { ProjectStatusUpdateMaterialAquisitionLeadTimeUpdateDto } from '../models/ProjectStatusUpdateMaterialAquisitionLeadTimeUpdateDto';
import type { ProjectStatusUpdateMaterialAquisitionLeadTimeUpsertDto } from '../models/ProjectStatusUpdateMaterialAquisitionLeadTimeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectStatusUpdateMaterialAquisitionLeadTimeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialAquisitionLeadTimeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialAquisitionLeadTimeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectStatusUpdateMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update-material-aquisition-lead-times/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialAquisitionLeadTimeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialAquisitionLeadTimeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectStatusUpdateMaterialAquisitionLeadTimeUpdateDto,
}): CancelablePromise<ProjectStatusUpdateMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-status-update-material-aquisition-lead-times/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialAquisitionLeadTimeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialAquisitionLeadTimeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-status-update-material-aquisition-lead-times/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialAquisitionLeadTimeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectStatusUpdateMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialAquisitionLeadTimeGetList({
projectStatusUpdateId,
sorting,
skipCount,
maxResultCount,
}: {
projectStatusUpdateId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectStatusUpdateMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-status-update-material-aquisition-lead-times',
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
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialAquisitionLeadTimeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialAquisitionLeadTimeCreate({
requestBody,
}: {
requestBody?: ProjectStatusUpdateMaterialAquisitionLeadTimeCreateDto,
}): CancelablePromise<ProjectStatusUpdateMaterialAquisitionLeadTimeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update-material-aquisition-lead-times',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.ProjectStatusUpdateMaterialAquisitionLeadTimeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns ProjectStatusUpdateMaterialAquisitionLeadTimeDto Success
   * @throws ApiError
   */
  public projectStatusUpdateMaterialAquisitionLeadTimeUpsert({
projectStatusUpdateId,
requestBody,
}: {
projectStatusUpdateId: string,
requestBody?: Array<ProjectStatusUpdateMaterialAquisitionLeadTimeUpsertDto>,
}): CancelablePromise<Array<ProjectStatusUpdateMaterialAquisitionLeadTimeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-status-update-material-aquisition-lead-times/upserts/{projectStatusUpdateId}',
      path: {
        'projectStatusUpdateId': projectStatusUpdateId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
