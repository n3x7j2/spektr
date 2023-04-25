/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataTokenDto } from '../models/DataTokenDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Data Tokens
   * SpektrERP.Controllers.TemplateController.GetDataTokens (SpektrERP.HttpApi)
   * @returns DataTokenDto Success
   * @throws ApiError
   */
  public templateGetDataTokens({
template,
}: {
template?: string,
}): CancelablePromise<Array<DataTokenDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tokens',
      query: {
        'template': template,
      },
    });
  }

}
