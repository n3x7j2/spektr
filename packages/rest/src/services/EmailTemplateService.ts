/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckUniqueTemplateNameInput } from '../models/CheckUniqueTemplateNameInput';
import type { EmailTemplateCreateDto } from '../models/EmailTemplateCreateDto';
import type { EmailTemplateDto } from '../models/EmailTemplateDto';
import type { EmailTemplateModuleDto } from '../models/EmailTemplateModuleDto';
import type { EmailTemplateUpdateDto } from '../models/EmailTemplateUpdateDto';
import type { PagedResultDtoOfEmailTemplateListDto } from '../models/PagedResultDtoOfEmailTemplateListDto';
import type { SendEmailByTemplateInputDto } from '../models/SendEmailByTemplateInputDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmailTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.EmailTemplateController.GetAsync (SpektrERP.HttpApi)
   * @returns EmailTemplateDto Success
   * @throws ApiError
   */
  public emailTemplateGet({
id,
}: {
id: string,
}): CancelablePromise<EmailTemplateDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/email-templates/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.EmailTemplateController.UpdateAsync (SpektrERP.HttpApi)
   * @returns EmailTemplateDto Success
   * @throws ApiError
   */
  public emailTemplateUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: EmailTemplateUpdateDto,
}): CancelablePromise<EmailTemplateDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/email-templates/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.EmailTemplateController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public emailTemplateDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/email-templates/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.EmailTemplateController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEmailTemplateListDto Success
   * @throws ApiError
   */
  public emailTemplateGetList({
name,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEmailTemplateListDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/email-templates',
      query: {
        'Name': name,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.EmailTemplateController.CreateAsync (SpektrERP.HttpApi)
   * @returns EmailTemplateDto Success
   * @throws ApiError
   */
  public emailTemplateCreate({
requestBody,
}: {
requestBody?: EmailTemplateCreateDto,
}): CancelablePromise<EmailTemplateDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/email-templates',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Template Modules
   * SpektrERP.Controllers.EmailTemplateController.GetTemplateModules (SpektrERP.HttpApi)
   * @returns EmailTemplateModuleDto Success
   * @throws ApiError
   */
  public emailTemplateGetTemplateModules(): CancelablePromise<Array<EmailTemplateModuleDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/email-templates/modules',
    });
  }

  /**
   * Get Template Variables
   * SpektrERP.Controllers.EmailTemplateController.GetTemplateVariables (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public emailTemplateGetTemplateVariables({
module,
feature,
}: {
module: string,
feature: string,
}): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/email-templates/modules/{module}/features/{feature}',
      path: {
        'module': module,
        'feature': feature,
      },
    });
  }

  /**
   * Send Email by Template
   * SpektrERP.Controllers.EmailTemplateController.SendEmailByTemplateAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public emailTemplateSendEmailByTemplate({
requestBody,
}: {
requestBody?: SendEmailByTemplateInputDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/email-templates/send-by-template',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Check Unique Name
   * SpektrERP.Controllers.EmailTemplateController.CheckUniqueNameAsync (SpektrERP.HttpApi)
   * @returns boolean Success
   * @throws ApiError
   */
  public emailTemplateCheckUniqueName({
requestBody,
}: {
requestBody?: CheckUniqueTemplateNameInput,
}): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/email-templates/is-unique-name',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
