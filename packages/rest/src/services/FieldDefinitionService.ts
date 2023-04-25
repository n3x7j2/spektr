/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldDefinitionCreateDto } from '../models/FieldDefinitionCreateDto';
import type { FieldDefinitionDto } from '../models/FieldDefinitionDto';
import type { FieldDefinitionUpdateDto } from '../models/FieldDefinitionUpdateDto';
import type { PagedResultDtoOfFieldDefinitionDto } from '../models/PagedResultDtoOfFieldDefinitionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FieldDefinitionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.FieldDefinitionController.GetAsync (SpektrERP.HttpApi)
   * @returns FieldDefinitionDto Success
   * @throws ApiError
   */
  public fieldDefinitionGet({
id,
}: {
id: string,
}): CancelablePromise<FieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/field-definitions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.FieldDefinitionController.UpdateAsync (SpektrERP.HttpApi)
   * @returns FieldDefinitionDto Success
   * @throws ApiError
   */
  public fieldDefinitionUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: FieldDefinitionUpdateDto,
}): CancelablePromise<FieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/field-definitions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.FieldDefinitionController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public fieldDefinitionDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/field-definitions/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.FieldDefinitionController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfFieldDefinitionDto Success
   * @throws ApiError
   */
  public fieldDefinitionGetList({
name,
fieldType,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
fieldType?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfFieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/field-definitions',
      query: {
        'Name': name,
        'FieldType': fieldType,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.FieldDefinitionController.CreateAsync (SpektrERP.HttpApi)
   * @returns FieldDefinitionDto Success
   * @throws ApiError
   */
  public fieldDefinitionCreate({
requestBody,
}: {
requestBody?: FieldDefinitionCreateDto,
}): CancelablePromise<FieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/field-definitions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get All
   * SpektrERP.Controllers.FieldDefinitionController.GetAllAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfFieldDefinitionDto Success
   * @throws ApiError
   */
  public fieldDefinitionGetAll({
name,
fieldType,
sorting,
}: {
name?: string,
fieldType?: string,
sorting?: string,
}): CancelablePromise<PagedResultDtoOfFieldDefinitionDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/field-definitions/all',
      query: {
        'Name': name,
        'FieldType': fieldType,
        'Sorting': sorting,
      },
    });
  }

}
