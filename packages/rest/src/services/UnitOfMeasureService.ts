/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfUnitOfMeasureDto } from '../models/PagedResultDtoOfUnitOfMeasureDto';
import type { UnitOfMeasureCreateDto } from '../models/UnitOfMeasureCreateDto';
import type { UnitOfMeasureDto } from '../models/UnitOfMeasureDto';
import type { UnitOfMeasureUpdateDto } from '../models/UnitOfMeasureUpdateDto';
import type { UnitOfMeasureUpsertDto } from '../models/UnitOfMeasureUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UnitOfMeasureService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.UnitOfMeasureController.CreateAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureDto Success
   * @throws ApiError
   */
  public unitOfMeasureCreate({
requestBody,
}: {
requestBody?: UnitOfMeasureCreateDto,
}): CancelablePromise<UnitOfMeasureDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/unit-of-measures',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.UnitOfMeasureController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfUnitOfMeasureDto Success
   * @throws ApiError
   */
  public unitOfMeasureGetList({
uom,
uomShort,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
uom?: string,
uomShort?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfUnitOfMeasureDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/unit-of-measures',
      query: {
        'UOM': uom,
        'UOM_Short': uomShort,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.UnitOfMeasureController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public unitOfMeasureDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/unit-of-measures/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.UnitOfMeasureController.GetAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureDto Success
   * @throws ApiError
   */
  public unitOfMeasureGet({
id,
}: {
id: string,
}): CancelablePromise<UnitOfMeasureDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/unit-of-measures/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.UnitOfMeasureController.UpdateAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureDto Success
   * @throws ApiError
   */
  public unitOfMeasureUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: UnitOfMeasureUpdateDto,
}): CancelablePromise<UnitOfMeasureDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/unit-of-measures/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get All
   * SpektrERP.Controllers.UnitOfMeasureController.GetAllAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureDto Success
   * @throws ApiError
   */
  public unitOfMeasureGetAll({
uom,
uomShort,
}: {
uom?: string,
uomShort?: string,
}): CancelablePromise<Array<UnitOfMeasureDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/unit-of-measures/all',
      query: {
        'UOM': uom,
        'UOM_Short': uomShort,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.UnitOfMeasureController.UpsertAsync (SpektrERP.HttpApi)
   * @returns UnitOfMeasureDto Success
   * @throws ApiError
   */
  public unitOfMeasureUpsert({
requestBody,
}: {
requestBody?: Array<UnitOfMeasureUpsertDto>,
}): CancelablePromise<Array<UnitOfMeasureDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/unit-of-measures/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
