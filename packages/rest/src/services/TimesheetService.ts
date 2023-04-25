/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfTimesheetDto } from '../models/PagedResultDtoOfTimesheetDto';
import type { TimesheetCreateDto } from '../models/TimesheetCreateDto';
import type { TimesheetDto } from '../models/TimesheetDto';
import type { TimesheetUpdateDto } from '../models/TimesheetUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TimesheetService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.TimesheetController.CreateAsync (SpektrERP.HttpApi)
   * @returns TimesheetDto Success
   * @throws ApiError
   */
  public timesheetCreate({
requestBody,
}: {
requestBody?: TimesheetCreateDto,
}): CancelablePromise<TimesheetDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/time-tracking/time-sheets',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.TimesheetController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfTimesheetDto Success
   * @throws ApiError
   */
  public timesheetGetList({
entityId,
employeeId,
sorting,
skipCount,
maxResultCount,
}: {
entityId?: string,
employeeId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfTimesheetDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/time-tracking/time-sheets',
      query: {
        'EntityId': entityId,
        'EmployeeId': employeeId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.TimesheetController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public timesheetDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/time-tracking/time-sheets/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.TimesheetController.GetAsync (SpektrERP.HttpApi)
   * @returns TimesheetDto Success
   * @throws ApiError
   */
  public timesheetGet({
id,
}: {
id: string,
}): CancelablePromise<TimesheetDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/time-tracking/time-sheets/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.TimesheetController.UpdateAsync (SpektrERP.HttpApi)
   * @returns TimesheetDto Success
   * @throws ApiError
   */
  public timesheetUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: TimesheetUpdateDto,
}): CancelablePromise<TimesheetDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/time-tracking/time-sheets/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
