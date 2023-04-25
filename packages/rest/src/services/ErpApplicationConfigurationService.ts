/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ERPConfigurationDto } from '../models/ERPConfigurationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ErpApplicationConfigurationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ErpApplicationConfigurationController.GetAsync (SpektrERP.HttpApi)
   * @returns ERPConfigurationDto Success
   * @throws ApiError
   */
  public erpApplicationConfigurationGet(): CancelablePromise<ERPConfigurationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/erp/application-configuration',
    });
  }

}
