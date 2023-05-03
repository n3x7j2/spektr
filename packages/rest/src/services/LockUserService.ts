/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LockUserInputDto } from '../models/LockUserInputDto';
import type { LockUserOutputDto } from '../models/LockUserOutputDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LockUserService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Lock User
   * SpektrERP.IdentityManagement.LockUserAppService.LockUserAsync (SpektrERP.Application)
   * @returns LockUserOutputDto Success
   * @throws ApiError
   */
  public lockUserLockUser({
requestBody,
}: {
requestBody?: LockUserInputDto,
}): CancelablePromise<LockUserOutputDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/lock-user/lock-user',
      body: requestBody,
      mediaType: 'application/json',
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
   * Unlock User
   * SpektrERP.IdentityManagement.LockUserAppService.UnlockUserAsync (SpektrERP.Application)
   * @returns LockUserOutputDto Success
   * @throws ApiError
   */
  public lockUserUnlockUser({
userId,
}: {
userId: string,
}): CancelablePromise<LockUserOutputDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/lock-user/unlock-user/{userId}',
      path: {
        'userId': userId,
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
