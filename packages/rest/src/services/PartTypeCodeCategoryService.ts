/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDropDownItem } from '../models/CategoryDropDownItem';
import type { PagedResultDtoOfPartTypeCodeCategoryDto } from '../models/PagedResultDtoOfPartTypeCodeCategoryDto';
import type { PartTypeCodeCategoryCreateDto } from '../models/PartTypeCodeCategoryCreateDto';
import type { PartTypeCodeCategoryDto } from '../models/PartTypeCodeCategoryDto';
import type { PartTypeCodeCategoryUpdateDto } from '../models/PartTypeCodeCategoryUpdateDto';
import type { PartTypeCodeCategoryUpsertDto } from '../models/PartTypeCodeCategoryUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PartTypeCodeCategoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.PartTypeCodeCategoryController.CreateAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeCategoryDto Success
   * @throws ApiError
   */
  public partTypeCodeCategoryCreate({
requestBody,
}: {
requestBody?: PartTypeCodeCategoryCreateDto,
}): CancelablePromise<PartTypeCodeCategoryDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/part-type-code-categories',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.PartTypeCodeCategoryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfPartTypeCodeCategoryDto Success
   * @throws ApiError
   */
  public partTypeCodeCategoryGetList({
category,
countAsPart,
productCategoryId,
phaseId,
sorting,
skipCount,
maxResultCount,
}: {
category?: string,
countAsPart?: boolean,
productCategoryId?: string,
phaseId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfPartTypeCodeCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/part-type-code-categories',
      query: {
        'Category': category,
        'CountAsPart': countAsPart,
        'ProductCategoryId': productCategoryId,
        'PhaseId': phaseId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.PartTypeCodeCategoryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public partTypeCodeCategoryDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/part-type-code-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.PartTypeCodeCategoryController.GetAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeCategoryDto Success
   * @throws ApiError
   */
  public partTypeCodeCategoryGet({
id,
}: {
id: string,
}): CancelablePromise<PartTypeCodeCategoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/part-type-code-categories/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.PartTypeCodeCategoryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeCategoryDto Success
   * @throws ApiError
   */
  public partTypeCodeCategoryUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: PartTypeCodeCategoryUpdateDto,
}): CancelablePromise<PartTypeCodeCategoryDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/part-type-code-categories/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Part Type Code Category
   * SpektrERP.Controllers.PartTypeCodeCategoryController.GetListDropDownPartTypeCodeCategoryAsync (SpektrERP.HttpApi)
   * @returns CategoryDropDownItem Success
   * @throws ApiError
   */
  public partTypeCodeCategoryGetListDropDownPartTypeCodeCategory({
phaseId,
searchKey,
}: {
phaseId?: string,
searchKey?: string,
}): CancelablePromise<Array<CategoryDropDownItem>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/part-type-code-categories',
      query: {
        'PhaseId': phaseId,
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.PartTypeCodeCategoryController.UpsertAsync (SpektrERP.HttpApi)
   * @returns PartTypeCodeCategoryDto Success
   * @throws ApiError
   */
  public partTypeCodeCategoryUpsert({
requestBody,
}: {
requestBody?: Array<PartTypeCodeCategoryUpsertDto>,
}): CancelablePromise<Array<PartTypeCodeCategoryDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/part-type-code-categories/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
