/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveAssigneeRoleCreateDto } from '../models/DirectiveAssigneeRoleCreateDto';
import type { DirectiveAssigneeRoleDto } from '../models/DirectiveAssigneeRoleDto';
import type { DirectiveAssigneeRoleUpdateDto } from '../models/DirectiveAssigneeRoleUpdateDto';
import type { PagedResultDtoOfDirectiveAssigneeRoleDto } from '../models/PagedResultDtoOfDirectiveAssigneeRoleDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveAssigneeRoleService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveAssigneeRoleController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveAssigneeRoleDto Success
   * @throws ApiError
   */
  public directiveAssigneeRoleGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveAssigneeRoleDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-assignee-roles/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DirectiveAssigneeRoleController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DirectiveAssigneeRoleDto Success
   * @throws ApiError
   */
  public directiveAssigneeRoleUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DirectiveAssigneeRoleUpdateDto,
}): CancelablePromise<DirectiveAssigneeRoleDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directive-assignee-roles/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DirectiveAssigneeRoleController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public directiveAssigneeRoleDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/directive-assignee-roles/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveAssigneeRoleController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveAssigneeRoleDto Success
   * @throws ApiError
   */
  public directiveAssigneeRoleGetList({
assigneeRole,
sorting,
skipCount,
maxResultCount,
}: {
assigneeRole?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveAssigneeRoleDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-assignee-roles',
      query: {
        'AssigneeRole': assigneeRole,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DirectiveAssigneeRoleController.CreateAsync (SpektrERP.HttpApi)
   * @returns DirectiveAssigneeRoleDto Success
   * @throws ApiError
   */
  public directiveAssigneeRoleCreate({
requestBody,
}: {
requestBody?: DirectiveAssigneeRoleCreateDto,
}): CancelablePromise<DirectiveAssigneeRoleDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-assignee-roles',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
