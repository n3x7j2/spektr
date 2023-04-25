/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfUnitOfMeasureConversionDto } from '../models/PagedResultDtoOfUnitOfMeasureConversionDto';
import type { UnitOfMeasureConversionCreateDto } from '../models/UnitOfMeasureConversionCreateDto';
import type { UnitOfMeasureConversionDto } from '../models/UnitOfMeasureConversionDto';
import type { UnitOfMeasureConversionUpdateDto } from '../models/UnitOfMeasureConversionUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UnitOfMeasureConversionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.UnitOfMeasureConversionController.CreateAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureConversionDto Success
   * @throws ApiError
   */
  public unitOfMeasureConversionCreate({
requestBody,
}: {
requestBody?: UnitOfMeasureConversionCreateDto,
}): CancelablePromise<UnitOfMeasureConversionDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/unit-of-measure-conversions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.UnitOfMeasureConversionController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfUnitOfMeasureConversionDto Success
   * @throws ApiError
   */
  public unitOfMeasureConversionGetList({
uomidFrom,
uomidTo,
sorting,
skipCount,
maxResultCount,
}: {
uomidFrom?: string,
uomidTo?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfUnitOfMeasureConversionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/unit-of-measure-conversions',
      query: {
        'UOMIDFrom': uomidFrom,
        'UOMIDTo': uomidTo,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.UnitOfMeasureConversionController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public unitOfMeasureConversionDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/unit-of-measure-conversions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.UnitOfMeasureConversionController.GetAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureConversionDto Success
   * @throws ApiError
   */
  public unitOfMeasureConversionGet({
id,
}: {
id: string,
}): CancelablePromise<UnitOfMeasureConversionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/unit-of-measure-conversions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.UnitOfMeasureConversionController.UpdateAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureConversionDto Success
   * @throws ApiError
   */
  public unitOfMeasureConversionUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: UnitOfMeasureConversionUpdateDto,
}): CancelablePromise<UnitOfMeasureConversionDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/unit-of-measure-conversions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
