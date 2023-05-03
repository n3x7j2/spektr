/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSecurityLogListDto } from '../models/PagedResultDtoOfSecurityLogListDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecurityLogService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.SecurityLogReporting.SecurityLogAppService.GetListAsync (SpektrERP.Application)
   * @returns PagedResultDtoOfSecurityLogListDto Success
   * @throws ApiError
   */
  public securityLogGetList({
startTime,
endTime,
applicationName,
identity,
username,
securityAction,
client,
correlationId,
sorting,
skipCount,
maxResultCount,
}: {
startTime?: string,
endTime?: string,
applicationName?: string,
identity?: string,
username?: string,
securityAction?: string,
client?: string,
correlationId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSecurityLogListDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/security-log',
      query: {
        'StartTime': startTime,
        'EndTime': endTime,
        'ApplicationName': applicationName,
        'Identity': identity,
        'Username': username,
        'SecurityAction': securityAction,
        'Client': client,
        'CorrelationId': correlationId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
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
