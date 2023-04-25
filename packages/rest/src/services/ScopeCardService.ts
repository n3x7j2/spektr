/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScopeCardDto } from '../models/ScopeCardDto';
import type { ScopeCardViewType } from '../models/ScopeCardViewType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ScopeCardService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Scope Card List
   * SpektrERP.Controllers.ScopeCardController.GetScopeCardList (SpektrERP.HttpApi)
   * @returns ScopeCardDto Success
   * @throws ApiError
   */
  public scopeCardGetScopeCardList({
projectId,
viewType,
}: {
projectId: string,
viewType?: ScopeCardViewType,
}): CancelablePromise<Array<ScopeCardDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/scope-cards/{projectId}',
      path: {
        'projectId': projectId,
      },
      query: {
        'viewType': viewType,
      },
    });
  }

  /**
   * Generate All Scope Cards
   * SpektrERP.Controllers.ScopeCardController.GenerateAllScopeCards (SpektrERP.HttpApi)
   * @returns ScopeCardDto Success
   * @throws ApiError
   */
  public scopeCardGenerateAllScopeCards(): CancelablePromise<Array<ScopeCardDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/scope-cards/generation',
    });
  }

  /**
   * Generate Scope Cards
   * SpektrERP.Controllers.ScopeCardController.GenerateScopeCards (SpektrERP.HttpApi)
   * @returns ScopeCardDto Success
   * @throws ApiError
   */
  public scopeCardGenerateScopeCards({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<ScopeCardDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/scope-cards/generation/{projectId}',
      path: {
        'projectId': projectId,
      },
    });
  }

}
