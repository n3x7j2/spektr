/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSecurityLogListDto } from '../models/PagedResultDtoOfSecurityLogListDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpektrErpSecurityLogService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List
   * SpektrERP.Controllers.SpektrERPSecurityLogController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSecurityLogListDto Success
   * @throws ApiError
   */
  public spektrErpSecurityLogGetList({
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
      url: '/api/admin/security-log',
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
    });
  }

}
