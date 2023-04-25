/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryDropDownItemOfGuid } from '../models/CountryDropDownItemOfGuid';
import type { CountryDto } from '../models/CountryDto';
import type { PagedResultDtoOfCountryDto } from '../models/PagedResultDtoOfCountryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CountryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.CountryController.GetAsync (SpektrERP.HttpApi)
   * @returns CountryDto Success
   * @throws ApiError
   */
  public countryGet({
id,
}: {
id: string,
}): CancelablePromise<CountryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/countries/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.CountryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfCountryDto Success
   * @throws ApiError
   */
  public countryGetList({
countryName,
sorting,
skipCount,
maxResultCount,
}: {
countryName?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfCountryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/countries',
      query: {
        'CountryName': countryName,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get List Drop Down Country
   * SpektrERP.Controllers.CountryController.GetListDropDownCountryAsync (SpektrERP.HttpApi)
   * @returns CountryDropDownItemOfGuid Success
   * @throws ApiError
   */
  public countryGetListDropDownCountry({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<CountryDropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/countries',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
