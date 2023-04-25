/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { GLAccountCreateDto } from '../models/GLAccountCreateDto';
import type { GLAccountDto } from '../models/GLAccountDto';
import type { GLAccountUpdateDto } from '../models/GLAccountUpdateDto';
import type { PagedResultDtoOfGLAccountDto } from '../models/PagedResultDtoOfGLAccountDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GlAccountService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.GLAccountController.GetAsync (SpektrERP.HttpApi)
   * @returns GLAccountDto Success
   * @throws ApiError
   */
  public glAccountGet({
id,
}: {
id: string,
}): CancelablePromise<GLAccountDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/glaccounts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.GLAccountController.UpdateAsync (SpektrERP.HttpApi)
   * @returns GLAccountDto Success
   * @throws ApiError
   */
  public glAccountUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: GLAccountUpdateDto,
}): CancelablePromise<GLAccountDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/glaccounts/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.GLAccountController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public glAccountDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/glaccounts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.GLAccountController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfGLAccountDto Success
   * @throws ApiError
   */
  public glAccountGetList({
glAccount,
sorting,
skipCount,
maxResultCount,
}: {
glAccount?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfGLAccountDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/glaccounts',
      query: {
        'GLAccount': glAccount,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.GLAccountController.CreateAsync (SpektrERP.HttpApi)
   * @returns GLAccountDto Success
   * @throws ApiError
   */
  public glAccountCreate({
requestBody,
}: {
requestBody?: GLAccountCreateDto,
}): CancelablePromise<GLAccountDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/glaccounts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Gl Account
   * SpektrERP.Controllers.GLAccountController.GetListDropDownGLAccountAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public glAccountGetListDropDownGlAccount({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/glaccounts',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
