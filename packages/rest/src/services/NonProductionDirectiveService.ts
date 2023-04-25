/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveDto } from '../models/DirectiveDto';
import type { DuplicateDirectiveInputDto } from '../models/DuplicateDirectiveInputDto';
import type { NonProductionDirectiveDto } from '../models/NonProductionDirectiveDto';
import type { NonProductionDirectiveFullCreateDto } from '../models/NonProductionDirectiveFullCreateDto';
import type { NonProductionDirectiveFullUpdateDto } from '../models/NonProductionDirectiveFullUpdateDto';
import type { PagedResultDtoOfNonProductionDirectiveDto } from '../models/PagedResultDtoOfNonProductionDirectiveDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NonProductionDirectiveService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.NonProductionDirectiveController.GetAsync (SpektrERP.HttpApi)
   * @returns NonProductionDirectiveDto Success
   * @throws ApiError
   */
  public nonProductionDirectiveGet({
id,
}: {
id: string,
}): CancelablePromise<NonProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/non-production-directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.NonProductionDirectiveController.UpdateAsync (SpektrERP.HttpApi)
   * @returns NonProductionDirectiveDto Success
   * @throws ApiError
   */
  public nonProductionDirectiveUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: NonProductionDirectiveFullUpdateDto,
}): CancelablePromise<NonProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/non-production-directives/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.NonProductionDirectiveController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public nonProductionDirectiveDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/non-production-directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.NonProductionDirectiveController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfNonProductionDirectiveDto Success
   * @throws ApiError
   */
  public nonProductionDirectiveGetList({
directiveId,
sorting,
skipCount,
maxResultCount,
}: {
directiveId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfNonProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/non-production-directives',
      query: {
        'DirectiveId': directiveId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.NonProductionDirectiveController.CreateAsync (SpektrERP.HttpApi)
   * @returns NonProductionDirectiveDto Success
   * @throws ApiError
   */
  public nonProductionDirectiveCreate({
requestBody,
}: {
requestBody?: NonProductionDirectiveFullCreateDto,
}): CancelablePromise<NonProductionDirectiveDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/non-production-directives',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete by Directive
   * SpektrERP.Controllers.NonProductionDirectiveController.DeleteByDirectiveAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public nonProductionDirectiveDeleteByDirective({
directiveId,
}: {
directiveId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/non-production-directives/directive/{directiveId}',
      path: {
        'directiveId': directiveId,
      },
    });
  }

  /**
   * Duplicate Non Production Directive
   * SpektrERP.Controllers.NonProductionDirectiveController.DuplicateNonProductionDirectiveAsync (SpektrERP.HttpApi)
   * @returns DirectiveDto Success
   * @throws ApiError
   */
  public nonProductionDirectiveDuplicateNonProductionDirective({
requestBody,
}: {
requestBody?: DuplicateDirectiveInputDto,
}): CancelablePromise<DirectiveDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/non-production-directives/duplicates',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
