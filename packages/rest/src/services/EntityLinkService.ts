/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityLinkDto } from '../models/EntityLinkDto';
import type { EntityLinkUpsertsDto } from '../models/EntityLinkUpsertsDto';
import type { PagedResultDtoOfEntityLinkDto } from '../models/PagedResultDtoOfEntityLinkDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EntityLinkService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Upserts
   * SpektrERP.Controllers.EntityLinkController.UpsertsAsync (SpektrERP.HttpApi)
   * @returns EntityLinkDto Success
   * @throws ApiError
   */
  public entityLinkUpserts({
requestBody,
}: {
requestBody?: Array<EntityLinkUpsertsDto>,
}): CancelablePromise<Array<EntityLinkDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/entity-links/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.EntityLinkController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEntityLinkDto Success
   * @throws ApiError
   */
  public entityLinkGetList({
entityId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
entityId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEntityLinkDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/entity-links',
      query: {
        'EntityId': entityId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

}
