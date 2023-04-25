/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { ManufacturerCreateDto } from '../models/ManufacturerCreateDto';
import type { ManufacturerDto } from '../models/ManufacturerDto';
import type { ManufacturerUpdateDto } from '../models/ManufacturerUpdateDto';
import type { PagedResultDtoOfManufacturerDto } from '../models/PagedResultDtoOfManufacturerDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ManufacturerService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.ManufacturerController.GetAsync (SpektrERP.HttpApi)
   * @returns ManufacturerDto Success
   * @throws ApiError
   */
  public manufacturerGet({
id,
}: {
id: string,
}): CancelablePromise<ManufacturerDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/manufacturers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ManufacturerController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ManufacturerDto Success
   * @throws ApiError
   */
  public manufacturerUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ManufacturerUpdateDto,
}): CancelablePromise<ManufacturerDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/manufacturers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ManufacturerController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public manufacturerDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/manufacturers/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ManufacturerController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfManufacturerDto Success
   * @throws ApiError
   */
  public manufacturerGetList({
manufacturerName,
sorting,
skipCount,
maxResultCount,
}: {
manufacturerName?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfManufacturerDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/manufacturers',
      query: {
        'ManufacturerName': manufacturerName,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ManufacturerController.CreateAsync (SpektrERP.HttpApi)
   * @returns ManufacturerDto Success
   * @throws ApiError
   */
  public manufacturerCreate({
requestBody,
}: {
requestBody?: ManufacturerCreateDto,
}): CancelablePromise<ManufacturerDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/manufacturers',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Manufacture
   * SpektrERP.Controllers.ManufacturerController.GetListDropDownManufactureAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public manufacturerGetListDropDownManufacture({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/manufacturers',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
