/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrenciesCreateDto } from '../models/CurrenciesCreateDto';
import type { CurrenciesDropDownItem } from '../models/CurrenciesDropDownItem';
import type { CurrenciesDto } from '../models/CurrenciesDto';
import type { CurrenciesUpdateDto } from '../models/CurrenciesUpdateDto';
import type { PagedResultDtoOfCurrenciesDto } from '../models/PagedResultDtoOfCurrenciesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CurrenciesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.CurrenciesController.GetAsync (SpektrERP.HttpApi)
   * @returns CurrenciesDto Success
   * @throws ApiError
   */
  public currenciesGet({
id,
}: {
id: string,
}): CancelablePromise<CurrenciesDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/currencies/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.CurrenciesController.UpdateAsync (SpektrERP.HttpApi)
   * @returns CurrenciesDto Success
   * @throws ApiError
   */
  public currenciesUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: CurrenciesUpdateDto,
}): CancelablePromise<CurrenciesDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/currencies/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.CurrenciesController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public currenciesDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/currencies/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.CurrenciesController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfCurrenciesDto Success
   * @throws ApiError
   */
  public currenciesGetList({
currency,
sorting,
skipCount,
maxResultCount,
}: {
currency?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfCurrenciesDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/currencies',
      query: {
        'Currency': currency,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.CurrenciesController.CreateAsync (SpektrERP.HttpApi)
   * @returns CurrenciesDto Success
   * @throws ApiError
   */
  public currenciesCreate({
requestBody,
}: {
requestBody?: CurrenciesCreateDto,
}): CancelablePromise<CurrenciesDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/currencies',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.CurrenciesController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns CurrenciesDropDownItem Success
   * @throws ApiError
   */
  public currenciesGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<CurrenciesDropDownItem>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/currencies/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
