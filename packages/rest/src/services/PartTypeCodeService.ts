/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfPartTypeCodeDto } from '../models/PagedResultDtoOfPartTypeCodeDto';
import type { PartTypeCodeCreateDto } from '../models/PartTypeCodeCreateDto';
import type { PartTypeCodeDto } from '../models/PartTypeCodeDto';
import type { PartTypeCodeUpdateDto } from '../models/PartTypeCodeUpdateDto';
import type { PartTypeCodeUpsertDto } from '../models/PartTypeCodeUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PartTypeCodeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.PartTypeCodeController.CreateAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeDto Success
   * @throws ApiError
   */
  public partTypeCodeCreate({
requestBody,
}: {
requestBody?: PartTypeCodeCreateDto,
}): CancelablePromise<PartTypeCodeDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/part-type-codes',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PartTypeCodeController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPartTypeCodeDto Success
   * @throws ApiError
   */
  public partTypeCodeGetList({
code,
name,
partTypeCodeCategoriesId,
phaseId,
sorting,
skipCount,
maxResultCount,
}: {
code?: string,
name?: string,
partTypeCodeCategoriesId?: string,
phaseId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPartTypeCodeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/part-type-codes',
      query: {
        'Code': code,
        'Name': name,
        'PartTypeCodeCategoriesId': partTypeCodeCategoriesId,
        'PhaseId': phaseId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PartTypeCodeController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public partTypeCodeDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/part-type-codes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.PartTypeCodeController.GetAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeDto Success
   * @throws ApiError
   */
  public partTypeCodeGet({
id,
}: {
id: string,
}): CancelablePromise<PartTypeCodeDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/part-type-codes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PartTypeCodeController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeDto Success
   * @throws ApiError
   */
  public partTypeCodeUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PartTypeCodeUpdateDto,
}): CancelablePromise<PartTypeCodeDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/part-type-codes/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Part Type Code
   * SpektrERP.Controllers.PartTypeCodeController.GetListDropDownPartTypeCodeAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public partTypeCodeGetListDropDownPartTypeCode({
partTypeCodeCategoryId,
searchKey,
}: {
partTypeCodeCategoryId?: string,
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/part-type-codes',
      query: {
        'PartTypeCodeCategoryId': partTypeCodeCategoryId,
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PartTypeCodeController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeDto Success
   * @throws ApiError
   */
  public partTypeCodeUpsert({
requestBody,
}: {
requestBody?: Array<PartTypeCodeUpsertDto>,
}): CancelablePromise<Array<PartTypeCodeDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/part-type-codes/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
