/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveAssigneeCreateDto } from '../models/DirectiveAssigneeCreateDto';
import type { DirectiveAssigneeDto } from '../models/DirectiveAssigneeDto';
import type { DirectiveAssigneeUpdateDto } from '../models/DirectiveAssigneeUpdateDto';
import type { PagedResultDtoOfDirectiveAssigneeDto } from '../models/PagedResultDtoOfDirectiveAssigneeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveAssigneeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveAssigneeController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveAssigneeDto Success
   * @throws ApiError
   */
  public directiveAssigneeGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveAssigneeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-assignees/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DirectiveAssigneeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DirectiveAssigneeDto Success
   * @throws ApiError
   */
  public directiveAssigneeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DirectiveAssigneeUpdateDto,
}): CancelablePromise<DirectiveAssigneeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directive-assignees/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DirectiveAssigneeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public directiveAssigneeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/directive-assignees/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveAssigneeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveAssigneeDto Success
   * @throws ApiError
   */
  public directiveAssigneeGetList({
directiveId,
assigneeId,
assigneeRoleId,
sorting,
skipCount,
maxResultCount,
}: {
directiveId?: string,
assigneeId?: string,
assigneeRoleId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveAssigneeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-assignees',
      query: {
        'DirectiveId': directiveId,
        'AssigneeId': assigneeId,
        'AssigneeRoleId': assigneeRoleId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DirectiveAssigneeController.CreateAsync (SpektrERP.HttpApi)
   * @returns DirectiveAssigneeDto Success
   * @throws ApiError
   */
  public directiveAssigneeCreate({
requestBody,
}: {
requestBody?: DirectiveAssigneeCreateDto,
}): CancelablePromise<DirectiveAssigneeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-assignees',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
