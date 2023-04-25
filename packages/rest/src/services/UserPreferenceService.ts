/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfUserPreferenceDto } from '../models/PagedResultDtoOfUserPreferenceDto';
import type { UserPreferenceDto } from '../models/UserPreferenceDto';
import type { UserPreferenceUpdateDto } from '../models/UserPreferenceUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserPreferenceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.UserPreferenceController.GetAsync (SpektrERP.HttpApi)
   * @returns UserPreferenceDto Success
   * @throws ApiError
   */
  public userPreferenceGet({
key,
}: {
key: string,
}): CancelablePromise<UserPreferenceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/user-preferences/{key}',
      path: {
        'key': key,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.UserPreferenceController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfUserPreferenceDto Success
   * @throws ApiError
   */
  public userPreferenceGetList({
key,
sorting,
skipCount,
maxResultCount,
}: {
key?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfUserPreferenceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/user-preferences',
      query: {
        'Key': key,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.UserPreferenceController.UpdateAsync (SpektrERP.HttpApi)
   * @returns UserPreferenceDto Success
   * @throws ApiError
   */
  public userPreferenceUpdate({
requestBody,
}: {
requestBody?: UserPreferenceUpdateDto,
}): CancelablePromise<UserPreferenceDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/user-preferences',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
