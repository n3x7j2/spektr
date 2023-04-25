/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BryntumSMSSchedulerCreateDto } from '../models/BryntumSMSSchedulerCreateDto';
import type { BryntumSMSSchedulerDto } from '../models/BryntumSMSSchedulerDto';
import type { BryntumSMSSchedulerProjectDto } from '../models/BryntumSMSSchedulerProjectDto';
import type { BryntumSMSSchedulerProjectInputDto } from '../models/BryntumSMSSchedulerProjectInputDto';
import type { BryntumSMSSchedulerUpdateDto } from '../models/BryntumSMSSchedulerUpdateDto';
import type { PagedResultDtoOfBryntumSMSSchedulerDto } from '../models/PagedResultDtoOfBryntumSMSSchedulerDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BryntumSmsSchedulerService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.BryntumSMSSchedulerController.GetAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerGet({
id,
}: {
id: string,
}): CancelablePromise<BryntumSMSSchedulerDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bryntum-smsschedulers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.BryntumSMSSchedulerController.UpdateAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: BryntumSMSSchedulerUpdateDto,
}): CancelablePromise<BryntumSMSSchedulerDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/bryntum-smsschedulers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.BryntumSMSSchedulerController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/bryntum-smsschedulers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.BryntumSMSSchedulerController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfBryntumSMSSchedulerDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerGetList({
sorting,
skipCount,
maxResultCount,
}: {
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfBryntumSMSSchedulerDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bryntum-smsschedulers',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.BryntumSMSSchedulerController.CreateAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerCreate({
requestBody,
}: {
requestBody?: BryntumSMSSchedulerCreateDto,
}): CancelablePromise<BryntumSMSSchedulerDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/bryntum-smsschedulers',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Projects
   * SpektrERP.Controllers.BryntumSMSSchedulerController.GetProjectsAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerProjectDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerGetProjects({
input,
}: {
input?: BryntumSMSSchedulerProjectInputDto,
}): CancelablePromise<Array<BryntumSMSSchedulerProjectDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bryntum-smsschedulers/projects',
      query: {
        'input': input,
      },
    });
  }

}
