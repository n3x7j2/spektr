/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaterialCreateDto } from '../models/MaterialCreateDto';
import type { MaterialDto } from '../models/MaterialDto';
import type { MaterialUpdateDto } from '../models/MaterialUpdateDto';
import type { PagedResultDtoOfMaterialDto } from '../models/PagedResultDtoOfMaterialDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MaterialService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.MaterialController.CreateAsync (SpektrERP.HttpApi)
   * @returns MaterialDto Success
   * @throws ApiError
   */
  public materialCreate({
requestBody,
}: {
requestBody?: MaterialCreateDto,
}): CancelablePromise<MaterialDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/materials',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.MaterialController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfMaterialDto Success
   * @throws ApiError
   */
  public materialGetList({
sorting,
skipCount,
maxResultCount,
}: {
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfMaterialDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/materials',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.MaterialController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public materialDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/materials/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.MaterialController.GetAsync (SpektrERP.HttpApi)
   * @returns MaterialDto Success
   * @throws ApiError
   */
  public materialGet({
id,
}: {
id: string,
}): CancelablePromise<MaterialDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/materials/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.MaterialController.UpdateAsync (SpektrERP.HttpApi)
   * @returns MaterialDto Success
   * @throws ApiError
   */
  public materialUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: MaterialUpdateDto,
}): CancelablePromise<MaterialDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/materials/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
