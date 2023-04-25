/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveDto } from '../models/DirectiveDto';
import type { DuplicateDirectiveInputDto } from '../models/DuplicateDirectiveInputDto';
import type { PagedResultDtoOfProductionDirectiveFullDto } from '../models/PagedResultDtoOfProductionDirectiveFullDto';
import type { ProductionDirectiveFullDto } from '../models/ProductionDirectiveFullDto';
import type { ProductionDirectiveTaskCreateFullDto } from '../models/ProductionDirectiveTaskCreateFullDto';
import type { ProductionDirectiveTaskUpdateFullDto } from '../models/ProductionDirectiveTaskUpdateFullDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductionDirectiveService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.ProductionDirectiveController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveFullDto Success
   * @throws ApiError
   */
  public productionDirectiveCreate({
requestBody,
}: {
requestBody?: ProductionDirectiveTaskCreateFullDto,
}): CancelablePromise<ProductionDirectiveFullDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/production-directives',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProductionDirectiveController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProductionDirectiveFullDto Success
   * @throws ApiError
   */
  public productionDirectiveGetList({
directiveId,
projectSystemId,
shippingDate,
shippingLocationId,
shippingById,
sorting,
skipCount,
maxResultCount,
}: {
directiveId?: string,
projectSystemId?: string,
shippingDate?: string,
shippingLocationId?: string,
shippingById?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProductionDirectiveFullDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-directives',
      query: {
        'DirectiveId': directiveId,
        'ProjectSystemId': projectSystemId,
        'ShippingDate': shippingDate,
        'ShippingLocationId': shippingLocationId,
        'ShippingById': shippingById,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProductionDirectiveController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionDirectiveDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/production-directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProductionDirectiveController.GetAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveFullDto Success
   * @throws ApiError
   */
  public productionDirectiveGet({
id,
}: {
id: string,
}): CancelablePromise<ProductionDirectiveFullDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/production-directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProductionDirectiveController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveFullDto Success
   * @throws ApiError
   */
  public productionDirectiveUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProductionDirectiveTaskUpdateFullDto,
}): CancelablePromise<ProductionDirectiveFullDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/production-directives/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete by Directive
   * SpektrERP.Controllers.ProductionDirectiveController.DeleteByDirectiveAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public productionDirectiveDeleteByDirective({
directiveId,
}: {
directiveId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/production-directives/directive/{directiveId}',
      path: {
        'directiveId': directiveId,
      },
    });
  }

  /**
   * Duplicate Production Directive
   * SpektrERP.Controllers.ProductionDirectiveController.DuplicateProductionDirectiveAsync (SpektrERP.HttpApi)
   * @returns DirectiveDto Success
   * @throws ApiError
   */
  public productionDirectiveDuplicateProductionDirective({
requestBody,
}: {
requestBody?: DuplicateDirectiveInputDto,
}): CancelablePromise<DirectiveDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/production-directives/duplicates',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
