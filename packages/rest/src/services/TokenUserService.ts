/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TokenUserService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Generate Token
   * SpektrERP.IdentityManagement.TokenUserAppService.GenerateToken (SpektrERP.Application)
   * @returns string Success
   * @throws ApiError
   */
  public tokenUserGenerateToken(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/token-user/generate-token',
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

  /**
   * Valid Token
   * SpektrERP.IdentityManagement.TokenUserAppService.ValidTokenAsync (SpektrERP.Application)
   * @returns boolean Success
   * @throws ApiError
   */
  public tokenUserValidToken({
tenantId,
emailAddress,
token,
}: {
tenantId: string,
emailAddress?: string,
token?: string,
}): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/token-user/valid-token/{tenantId}',
      path: {
        'tenantId': tenantId,
      },
      query: {
        'emailAddress': emailAddress,
        'token': token,
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
