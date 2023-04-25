/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutomationCreateDto } from '../models/AutomationCreateDto';
import type { AutomationDto } from '../models/AutomationDto';
import type { AutomationEventTrigger } from '../models/AutomationEventTrigger';
import type { AutomationStepType } from '../models/AutomationStepType';
import type { AutomationUpdateDto } from '../models/AutomationUpdateDto';
import type { ListResultDtoOfAutomationStepDefinitionDto } from '../models/ListResultDtoOfAutomationStepDefinitionDto';
import type { PagedResultDtoOfAutomationDto } from '../models/PagedResultDtoOfAutomationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AutomationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.AutomationController.CreateAsync (SpektrERP.HttpApi)
   * @returns AutomationDto Success
   * @throws ApiError
   */
  public automationCreate({
requestBody,
}: {
requestBody?: AutomationCreateDto,
}): CancelablePromise<AutomationDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/automation',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.AutomationController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfAutomationDto Success
   * @throws ApiError
   */
  public automationGetList({
name,
trigger,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
trigger?: AutomationEventTrigger,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfAutomationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/automation',
      query: {
        'Name': name,
        'Trigger': trigger,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.AutomationController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public automationDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/automation/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.AutomationController.GetAsync (SpektrERP.HttpApi)
   * @returns AutomationDto Success
   * @throws ApiError
   */
  public automationGet({
id,
}: {
id: string,
}): CancelablePromise<AutomationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/automation/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.AutomationController.UpdateAsync (SpektrERP.HttpApi)
   * @returns AutomationDto Success
   * @throws ApiError
   */
  public automationUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: AutomationUpdateDto,
}): CancelablePromise<AutomationDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/automation/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Steps Definition
   * SpektrERP.Controllers.AutomationController.GetStepsDefinition (SpektrERP.HttpApi)
   * @returns ListResultDtoOfAutomationStepDefinitionDto Success
   * @throws ApiError
   */
  public automationGetStepsDefinition({
type,
}: {
type?: AutomationStepType,
}): CancelablePromise<ListResultDtoOfAutomationStepDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/automation/steps-definition',
      query: {
        'Type': type,
      },
    });
  }

}
