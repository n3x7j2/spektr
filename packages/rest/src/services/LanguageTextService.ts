/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LanguageTextCreateDto } from '../models/LanguageTextCreateDto';
import type { LanguageTextDto } from '../models/LanguageTextDto';
import type { LanguageTextUpdateDto } from '../models/LanguageTextUpdateDto';
import type { PagedResultDtoOfLanguageTextDto } from '../models/PagedResultDtoOfLanguageTextDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LanguageTextService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.LanguageTextController.GetAsync (SpektrERP.HttpApi)
   * @returns LanguageTextDto Success
   * @throws ApiError
   */
  public languageTextGet({
id,
}: {
id: string,
}): CancelablePromise<LanguageTextDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/language-texts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.LanguageTextController.UpdateAsync (SpektrERP.HttpApi)
   * @returns LanguageTextDto Success
   * @throws ApiError
   */
  public languageTextUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: LanguageTextUpdateDto,
}): CancelablePromise<LanguageTextDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/language-texts/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.LanguageTextController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public languageTextDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/language-texts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.LanguageTextController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfLanguageTextDto Success
   * @throws ApiError
   */
  public languageTextGetList({
languageName,
key,
sorting,
skipCount,
maxResultCount,
}: {
languageName?: string,
key?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfLanguageTextDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/language-texts',
      query: {
        'LanguageName': languageName,
        'Key': key,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.LanguageTextController.CreateAsync (SpektrERP.HttpApi)
   * @returns LanguageTextDto Success
   * @throws ApiError
   */
  public languageTextCreate({
requestBody,
}: {
requestBody?: LanguageTextCreateDto,
}): CancelablePromise<LanguageTextDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/language-texts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Text List
   * SpektrERP.Controllers.LanguageTextController.GetTextListAsync (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public languageTextGetTextList(): CancelablePromise<Record<string, string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/language-texts/spektr-texts',
    });
  }

}
