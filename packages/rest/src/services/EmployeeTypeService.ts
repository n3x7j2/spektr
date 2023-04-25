/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeTypeCreateDto } from '../models/EmployeeTypeCreateDto';
import type { EmployeeTypeDto } from '../models/EmployeeTypeDto';
import type { EmployeeTypeUpdateDto } from '../models/EmployeeTypeUpdateDto';
import type { EmployeeTypeUpsertDto } from '../models/EmployeeTypeUpsertDto';
import type { PagedResultDtoOfEmployeeTypeDto } from '../models/PagedResultDtoOfEmployeeTypeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmployeeTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.EmployeeTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns EmployeeTypeDto Success
   * @throws ApiError
   */
  public employeeTypeGet({
id,
}: {
id: string,
}): CancelablePromise<EmployeeTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/employee-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.EmployeeTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns EmployeeTypeDto Success
   * @throws ApiError
   */
  public employeeTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: EmployeeTypeUpdateDto,
}): CancelablePromise<EmployeeTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/employee-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.EmployeeTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public employeeTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/employee-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.EmployeeTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEmployeeTypeDto Success
   * @throws ApiError
   */
  public employeeTypeGetList({
type,
sorting,
skipCount,
maxResultCount,
}: {
type?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEmployeeTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/employee-types',
      query: {
        'Type': type,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.EmployeeTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns EmployeeTypeDto Success
   * @throws ApiError
   */
  public employeeTypeCreate({
requestBody,
}: {
requestBody?: EmployeeTypeCreateDto,
}): CancelablePromise<EmployeeTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/employee-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.EmployeeTypeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns EmployeeTypeDto Success
   * @throws ApiError
   */
  public employeeTypeUpsert({
requestBody,
}: {
requestBody?: Array<EmployeeTypeUpsertDto>,
}): CancelablePromise<Array<EmployeeTypeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/employee-types/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
