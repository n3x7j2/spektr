/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReCaptchaSettingsDto } from '../models/ReCaptchaSettingsDto';
import type { UpdateReCaptchaSettingsDto } from '../models/UpdateReCaptchaSettingsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ReCaptchaSettingsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ReCaptchaSettingsController.GetAsync (SpektrERP.HttpApi)
   * @returns ReCaptchaSettingsDto Success
   * @throws ApiError
   */
  public reCaptchaSettingsGet(): CancelablePromise<ReCaptchaSettingsDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/setting-management/recaptcha',
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ReCaptchaSettingsController.UpdateAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public reCaptchaSettingsUpdate({
requestBody,
}: {
requestBody?: UpdateReCaptchaSettingsDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/setting-management/recaptcha',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
