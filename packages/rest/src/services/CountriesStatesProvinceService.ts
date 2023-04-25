/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountriesStatesProvinceDto } from '../models/CountriesStatesProvinceDto';
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfCountriesStatesProvinceDto } from '../models/PagedResultDtoOfCountriesStatesProvinceDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CountriesStatesProvinceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.CountriesStatesProvinceController.GetAsync (SpektrERP.HttpApi)
   * @returns CountriesStatesProvinceDto Success
   * @throws ApiError
   */
  public countriesStatesProvinceGet({
id,
}: {
id: string,
}): CancelablePromise<CountriesStatesProvinceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/countries-states-provinces/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.CountriesStatesProvinceController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfCountriesStatesProvinceDto Success
   * @throws ApiError
   */
  public countriesStatesProvinceGetList({
provinceStateName,
countryName,
countryId,
sorting,
skipCount,
maxResultCount,
}: {
provinceStateName?: string,
countryName?: string,
countryId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfCountriesStatesProvinceDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/countries-states-provinces',
      query: {
        'ProvinceStateName': provinceStateName,
        'CountryName': countryName,
        'CountryId': countryId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get List Drop Down Country State
   * SpektrERP.Controllers.CountriesStatesProvinceController.GetListDropDownCountryStateAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public countriesStatesProvinceGetListDropDownCountryState({
countryId,
}: {
countryId: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/countries-states-provinces/{countryId}',
      path: {
        'countryId': countryId,
      },
    });
  }

}
