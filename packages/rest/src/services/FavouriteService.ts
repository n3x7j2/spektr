/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FavouriteCreateDto } from '../models/FavouriteCreateDto';
import type { FavouriteDto } from '../models/FavouriteDto';
import type { FavouriteEntityType } from '../models/FavouriteEntityType';
import type { FavouriteUpdateDto } from '../models/FavouriteUpdateDto';
import type { PagedResultDtoOfFavouriteDto } from '../models/PagedResultDtoOfFavouriteDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FavouriteService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.FavouriteController.GetAsync (SpektrERP.HttpApi)
   * @returns FavouriteDto Success
   * @throws ApiError
   */
  public favouriteGet({
id,
}: {
id: string,
}): CancelablePromise<FavouriteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/favourites/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.FavouriteController.UpdateAsync (SpektrERP.HttpApi)
   * @returns FavouriteDto Success
   * @throws ApiError
   */
  public favouriteUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: FavouriteUpdateDto,
}): CancelablePromise<FavouriteDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/favourites/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.FavouriteController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public favouriteDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/favourites/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.FavouriteController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfFavouriteDto Success
   * @throws ApiError
   */
  public favouriteGetList({
employeeId,
entityType,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
employeeId?: string,
entityType?: FavouriteEntityType,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfFavouriteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/favourites',
      query: {
        'EmployeeId': employeeId,
        'EntityType': entityType,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.FavouriteController.CreateAsync (SpektrERP.HttpApi)
   * @returns FavouriteDto Success
   * @throws ApiError
   */
  public favouriteCreate({
requestBody,
}: {
requestBody?: FavouriteCreateDto,
}): CancelablePromise<FavouriteDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/favourites',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get All
   * SpektrERP.Controllers.FavouriteController.GetAllAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfFavouriteDto Success
   * @throws ApiError
   */
  public favouriteGetAll({
employeeId,
entityType,
sorting,
}: {
employeeId?: string,
entityType?: FavouriteEntityType,
sorting?: string,
}): CancelablePromise<PagedResultDtoOfFavouriteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/favourites/all',
      query: {
        'EmployeeId': employeeId,
        'EntityType': entityType,
        'Sorting': sorting,
      },
    });
  }

}
