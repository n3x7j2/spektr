/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeStatusCreateDto } from '../models/EmployeeStatusCreateDto';
import type { EmployeeStatusDto } from '../models/EmployeeStatusDto';
import type { EmployeeStatusUpdateDto } from '../models/EmployeeStatusUpdateDto';
import type { EmployeeStatusUpsertDto } from '../models/EmployeeStatusUpsertDto';
import type { PagedResultDtoOfEmployeeStatusDto } from '../models/PagedResultDtoOfEmployeeStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmployeeStatusService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.EmployeeStatusController.GetAsync (SpektrERP.HttpApi)
   * @returns EmployeeStatusDto Success
   * @throws ApiError
   */
  public employeeStatusGet({
id,
}: {
id: string,
}): CancelablePromise<EmployeeStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/employee-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.EmployeeStatusController.UpdateAsync (SpektrERP.HttpApi)
   * @returns EmployeeStatusDto Success
   * @throws ApiError
   */
  public employeeStatusUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: EmployeeStatusUpdateDto,
}): CancelablePromise<EmployeeStatusDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/employee-statuses/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.EmployeeStatusController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public employeeStatusDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/employee-statuses/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.EmployeeStatusController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEmployeeStatusDto Success
   * @throws ApiError
   */
  public employeeStatusGetList({
status,
isActive,
sorting,
skipCount,
maxResultCount,
}: {
status?: string,
isActive?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEmployeeStatusDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/employee-statuses',
      query: {
        'Status': status,
        'IsActive': isActive,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.EmployeeStatusController.CreateAsync (SpektrERP.HttpApi)
   * @returns EmployeeStatusDto Success
   * @throws ApiError
   */
  public employeeStatusCreate({
requestBody,
}: {
requestBody?: EmployeeStatusCreateDto,
}): CancelablePromise<EmployeeStatusDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/employee-statuses',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.EmployeeStatusController.UpsertAsync (SpektrERP.HttpApi)
   * @returns EmployeeStatusDto Success
   * @throws ApiError
   */
  public employeeStatusUpsert({
requestBody,
}: {
requestBody?: Array<EmployeeStatusUpsertDto>,
}): CancelablePromise<Array<EmployeeStatusDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/employee-statuses/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
