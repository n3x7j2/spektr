/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlemingLengthWidthDto } from '../models/FlemingLengthWidthDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FlemingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Length and Width
   * SpektrERP.Imports.FlemingAppService.GetLengthAndWidthAsync (SpektrERP.Application)
   * @returns FlemingLengthWidthDto Success
   * @throws ApiError
   */
  public flemingGetLengthAndWidth({
productId,
}: {
productId: string,
}): CancelablePromise<Array<FlemingLengthWidthDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/fleming/length-and-width/{productId}',
      path: {
        'productId': productId,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

}
