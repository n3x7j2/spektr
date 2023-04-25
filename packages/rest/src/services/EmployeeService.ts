/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { EmployeeCreateDto } from '../models/EmployeeCreateDto';
import type { EmployeeDto } from '../models/EmployeeDto';
import type { EmployeeUpdateDto } from '../models/EmployeeUpdateDto';
import type { PagedResultDtoOfEmployeeDto } from '../models/PagedResultDtoOfEmployeeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmployeeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.EmployeeController.CreateAsync (SpektrERP.HttpApi)
   * @returns EmployeeDto Success
   * @throws ApiError
   */
  public employeeCreate({
requestBody,
}: {
requestBody?: EmployeeCreateDto,
}): CancelablePromise<EmployeeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/employees',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.EmployeeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEmployeeDto Success
   * @throws ApiError
   */
  public employeeGetList({
employeeCode,
sorting,
skipCount,
maxResultCount,
}: {
employeeCode?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEmployeeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/employees',
      query: {
        'EmployeeCode': employeeCode,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.EmployeeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public employeeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/employees/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.EmployeeController.GetAsync (SpektrERP.HttpApi)
   * @returns EmployeeDto Success
   * @throws ApiError
   */
  public employeeGet({
id,
}: {
id: string,
}): CancelablePromise<EmployeeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/employees/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.EmployeeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns EmployeeDto Success
   * @throws ApiError
   */
  public employeeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: EmployeeUpdateDto,
}): CancelablePromise<EmployeeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/employees/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Employee
   * SpektrERP.Controllers.EmployeeController.GetListDropDownEmployeeAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public employeeGetListDropDownEmployee({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/employees',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
