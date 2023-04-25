/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BryntumSMSSchedulerTemplateCreateDto } from '../models/BryntumSMSSchedulerTemplateCreateDto';
import type { BryntumSMSSchedulerTemplateDto } from '../models/BryntumSMSSchedulerTemplateDto';
import type { BryntumSMSSchedulerTemplateUpdateDto } from '../models/BryntumSMSSchedulerTemplateUpdateDto';
import type { PagedResultDtoOfBryntumSMSSchedulerTemplateDto } from '../models/PagedResultDtoOfBryntumSMSSchedulerTemplateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BryntumSmsSchedulerTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.BryntumSMSSchedulerTemplateController.GetAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerTemplateDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerTemplateGet({
id,
}: {
id: string,
}): CancelablePromise<BryntumSMSSchedulerTemplateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bryntum-smsscheduler-templates/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.BryntumSMSSchedulerTemplateController.UpdateAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerTemplateDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerTemplateUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: BryntumSMSSchedulerTemplateUpdateDto,
}): CancelablePromise<BryntumSMSSchedulerTemplateDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/bryntum-smsscheduler-templates/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.BryntumSMSSchedulerTemplateController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerTemplateDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/bryntum-smsscheduler-templates/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.BryntumSMSSchedulerTemplateController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfBryntumSMSSchedulerTemplateDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerTemplateGetList({
sorting,
skipCount,
maxResultCount,
}: {
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfBryntumSMSSchedulerTemplateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bryntum-smsscheduler-templates',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.BryntumSMSSchedulerTemplateController.CreateAsync (SpektrERP.HttpApi)
   * @returns BryntumSMSSchedulerTemplateDto Success
   * @throws ApiError
   */
  public bryntumSmsSchedulerTemplateCreate({
requestBody,
}: {
requestBody?: BryntumSMSSchedulerTemplateCreateDto,
}): CancelablePromise<BryntumSMSSchedulerTemplateDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/bryntum-smsscheduler-templates',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
