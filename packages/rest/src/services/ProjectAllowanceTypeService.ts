/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfProjectAllowanceTypeDto } from '../models/PagedResultDtoOfProjectAllowanceTypeDto';
import type { ProjectAllowanceTypeCreateDto } from '../models/ProjectAllowanceTypeCreateDto';
import type { ProjectAllowanceTypeDto } from '../models/ProjectAllowanceTypeDto';
import type { ProjectAllowanceTypeUpdateDto } from '../models/ProjectAllowanceTypeUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectAllowanceTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ProjectAllowanceTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceTypeDto Success
   * @throws ApiError
   */
  public projectAllowanceTypeGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectAllowanceTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-allowance-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectAllowanceTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceTypeDto Success
   * @throws ApiError
   */
  public projectAllowanceTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectAllowanceTypeUpdateDto,
}): CancelablePromise<ProjectAllowanceTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-allowance-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectAllowanceTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectAllowanceTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-allowance-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectAllowanceTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectAllowanceTypeDto Success
   * @throws ApiError
   */
  public projectAllowanceTypeGetList({
allowanceType,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
allowanceType?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectAllowanceTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-allowance-types',
      query: {
        'AllowanceType': allowanceType,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectAllowanceTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectAllowanceTypeDto Success
   * @throws ApiError
   */
  public projectAllowanceTypeCreate({
requestBody,
}: {
requestBody?: ProjectAllowanceTypeCreateDto,
}): CancelablePromise<ProjectAllowanceTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-allowance-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
