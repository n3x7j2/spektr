/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepartmentCreateDto } from '../models/DepartmentCreateDto';
import type { DepartmentDto } from '../models/DepartmentDto';
import type { DepartmentUpdateDto } from '../models/DepartmentUpdateDto';
import type { DepartmentUpsertDto } from '../models/DepartmentUpsertDto';
import type { PagedResultDtoOfDepartmentDto } from '../models/PagedResultDtoOfDepartmentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DepartmentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DepartmentController.GetAsync (SpektrERP.HttpApi)
   * @returns DepartmentDto Success
   * @throws ApiError
   */
  public departmentGet({
id,
}: {
id: string,
}): CancelablePromise<DepartmentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/departments/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DepartmentController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DepartmentDto Success
   * @throws ApiError
   */
  public departmentUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DepartmentUpdateDto,
}): CancelablePromise<DepartmentDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/departments/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DepartmentController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public departmentDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/departments/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DepartmentController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDepartmentDto Success
   * @throws ApiError
   */
  public departmentGetList({
name,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDepartmentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/departments',
      query: {
        'Name': name,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DepartmentController.CreateAsync (SpektrERP.HttpApi)
   * @returns DepartmentDto Success
   * @throws ApiError
   */
  public departmentCreate({
requestBody,
}: {
requestBody?: DepartmentCreateDto,
}): CancelablePromise<DepartmentDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/departments',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.DepartmentController.UpsertAsync (SpektrERP.HttpApi)
   * @returns DepartmentDto Success
   * @throws ApiError
   */
  public departmentUpsert({
requestBody,
}: {
requestBody?: Array<DepartmentUpsertDto>,
}): CancelablePromise<Array<DepartmentDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/departments/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
