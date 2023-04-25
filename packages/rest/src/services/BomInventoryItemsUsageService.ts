/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BOMInventoryItemsUsageConsolidateDto } from '../models/BOMInventoryItemsUsageConsolidateDto';
import type { BOMInventoryItemsUsageDto } from '../models/BOMInventoryItemsUsageDto';
import type { BOMInventoryItemsUsageUpdateDto } from '../models/BOMInventoryItemsUsageUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BomInventoryItemsUsageService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.BOMInventoryItemsUsageController.GetAsync (SpektrERP.HttpApi)
   * @returns BOMInventoryItemsUsageDto Success
   * @throws ApiError
   */
  public bomInventoryItemsUsageGet({
id,
}: {
id: string,
}): CancelablePromise<BOMInventoryItemsUsageDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bom-inventory-items-usages/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List Consolidate
   * SpektrERP.Controllers.BOMInventoryItemsUsageController.GetListConsolidateAsync (SpektrERP.HttpApi)
   * @returns BOMInventoryItemsUsageConsolidateDto Success
   * @throws ApiError
   */
  public bomInventoryItemsUsageGetListConsolidate({
bomId,
}: {
bomId?: string,
}): CancelablePromise<Array<BOMInventoryItemsUsageConsolidateDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/bom-inventory-items-usages',
      query: {
        'BOMId': bomId,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.BOMInventoryItemsUsageController.UpsertAsync (SpektrERP.HttpApi)
   * @returns BOMInventoryItemsUsageDto Success
   * @throws ApiError
   */
  public bomInventoryItemsUsageUpsert({
requestBody,
}: {
requestBody?: BOMInventoryItemsUsageUpdateDto,
}): CancelablePromise<Array<BOMInventoryItemsUsageDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/bom-inventory-items-usages',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
