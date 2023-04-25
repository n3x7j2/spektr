/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfPositionDto } from '../models/PagedResultDtoOfPositionDto';
import type { PositionCreateDto } from '../models/PositionCreateDto';
import type { PositionDto } from '../models/PositionDto';
import type { PositionUpdateDto } from '../models/PositionUpdateDto';
import type { PositionUpsertDto } from '../models/PositionUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PositionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.PositionController.GetAsync (SpektrERP.HttpApi)
   * @returns PositionDto Success
   * @throws ApiError
   */
  public positionGet({
id,
}: {
id: string,
}): CancelablePromise<PositionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/positions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PositionController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PositionDto Success
   * @throws ApiError
   */
  public positionUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PositionUpdateDto,
}): CancelablePromise<PositionDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/positions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PositionController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public positionDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/positions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PositionController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPositionDto Success
   * @throws ApiError
   */
  public positionGetList({
position,
sorting,
skipCount,
maxResultCount,
}: {
position?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPositionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/positions',
      query: {
        'Position': position,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.PositionController.CreateAsync (SpektrERP.HttpApi)
   * @returns PositionDto Success
   * @throws ApiError
   */
  public positionCreate({
requestBody,
}: {
requestBody?: PositionCreateDto,
}): CancelablePromise<PositionDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/positions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PositionController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PositionDto Success
   * @throws ApiError
   */
  public positionUpsert({
requestBody,
}: {
requestBody?: Array<PositionUpsertDto>,
}): CancelablePromise<Array<PositionDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/positions/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
