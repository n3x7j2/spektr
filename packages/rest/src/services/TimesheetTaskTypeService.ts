/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfTimesheetTaskTypeDto } from '../models/PagedResultDtoOfTimesheetTaskTypeDto';
import type { TimesheetTaskTypeCreateDto } from '../models/TimesheetTaskTypeCreateDto';
import type { TimesheetTaskTypeDto } from '../models/TimesheetTaskTypeDto';
import type { TimesheetTaskTypeUpdateDto } from '../models/TimesheetTaskTypeUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TimesheetTaskTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.TimesheetTaskTypeController.CreateAsync (SpektrERP.HttpApi)
   * @returns TimesheetTaskTypeDto Success
   * @throws ApiError
   */
  public timesheetTaskTypeCreate({
requestBody,
}: {
requestBody?: TimesheetTaskTypeCreateDto,
}): CancelablePromise<TimesheetTaskTypeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/time-tracking/time-sheet-task-types',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.TimesheetTaskTypeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfTimesheetTaskTypeDto Success
   * @throws ApiError
   */
  public timesheetTaskTypeGetList({
taskType,
sorting,
skipCount,
maxResultCount,
}: {
taskType?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfTimesheetTaskTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/time-tracking/time-sheet-task-types',
      query: {
        'TaskType': taskType,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.TimesheetTaskTypeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public timesheetTaskTypeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/time-tracking/time-sheet-task-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.TimesheetTaskTypeController.GetAsync (SpektrERP.HttpApi)
   * @returns TimesheetTaskTypeDto Success
   * @throws ApiError
   */
  public timesheetTaskTypeGet({
id,
}: {
id: string,
}): CancelablePromise<TimesheetTaskTypeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/time-tracking/time-sheet-task-types/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.TimesheetTaskTypeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns TimesheetTaskTypeDto Success
   * @throws ApiError
   */
  public timesheetTaskTypeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: TimesheetTaskTypeUpdateDto,
}): CancelablePromise<TimesheetTaskTypeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/time-tracking/time-sheet-task-types/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
