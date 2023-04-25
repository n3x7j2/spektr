/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardFieldDto } from '../models/CardFieldDto';
import type { PagedResultDtoOfScopeCardConfigDto } from '../models/PagedResultDtoOfScopeCardConfigDto';
import type { ScopeCardConfigCreateDto } from '../models/ScopeCardConfigCreateDto';
import type { ScopeCardConfigDto } from '../models/ScopeCardConfigDto';
import type { ScopeCardConfigUpdateDto } from '../models/ScopeCardConfigUpdateDto';
import type { ScopeCardType } from '../models/ScopeCardType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ScopeCardConfigService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ScopeCardConfigController.GetAsync (SpektrERP.HttpApi)
   * @returns ScopeCardConfigDto Success
   * @throws ApiError
   */
  public scopeCardConfigGet({
id,
}: {
id: string,
}): CancelablePromise<ScopeCardConfigDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/scope-card-configs/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ScopeCardConfigController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ScopeCardConfigDto Success
   * @throws ApiError
   */
  public scopeCardConfigUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ScopeCardConfigUpdateDto,
}): CancelablePromise<ScopeCardConfigDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/scope-card-configs/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ScopeCardConfigController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public scopeCardConfigDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/scope-card-configs/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ScopeCardConfigController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfScopeCardConfigDto Success
   * @throws ApiError
   */
  public scopeCardConfigGetList({
type,
section,
sorting,
skipCount,
maxResultCount,
}: {
type?: ScopeCardType,
section?: number,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfScopeCardConfigDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/scope-card-configs',
      query: {
        'Type': type,
        'Section': section,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ScopeCardConfigController.CreateAsync (SpektrERP.HttpApi)
   * @returns ScopeCardConfigDto Success
   * @throws ApiError
   */
  public scopeCardConfigCreate({
requestBody,
}: {
requestBody?: ScopeCardConfigCreateDto,
}): CancelablePromise<ScopeCardConfigDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/scope-card-configs',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Fields
   * SpektrERP.Controllers.ScopeCardConfigController.GetFields (SpektrERP.HttpApi)
   * @returns CardFieldDto Success
   * @throws ApiError
   */
  public scopeCardConfigGetFields(): CancelablePromise<Array<CardFieldDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/scope-card-configs/fields',
    });
  }

}
