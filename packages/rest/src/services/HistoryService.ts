/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityHistoryViewSettingCreateDto } from '../models/EntityHistoryViewSettingCreateDto';
import type { EntityHistoryViewSettingDto } from '../models/EntityHistoryViewSettingDto';
import type { EntityHistoryViewSettingUpdateDto } from '../models/EntityHistoryViewSettingUpdateDto';
import type { PagedResultDtoOfEntityHistoryDto } from '../models/PagedResultDtoOfEntityHistoryDto';
import type { PagedResultDtoOfEntityHistoryViewSettingDto } from '../models/PagedResultDtoOfEntityHistoryViewSettingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HistoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.HistoryController.GetAsync (SpektrERP.HttpApi)
   * @returns EntityHistoryViewSettingDto Success
   * @throws ApiError
   */
  public historyGet({
id,
}: {
id: string,
}): CancelablePromise<EntityHistoryViewSettingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/histories/settings/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.HistoryController.UpdateAsync (SpektrERP.HttpApi)
   * @returns EntityHistoryViewSettingDto Success
   * @throws ApiError
   */
  public historyUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: EntityHistoryViewSettingUpdateDto,
}): CancelablePromise<EntityHistoryViewSettingDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/histories/settings/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.HistoryController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public historyDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/histories/settings/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.HistoryController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEntityHistoryViewSettingDto Success
   * @throws ApiError
   */
  public historyGetList({
entityType,
sorting,
skipCount,
maxResultCount,
}: {
entityType?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEntityHistoryViewSettingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/histories/settings',
      query: {
        'EntityType': entityType,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.HistoryController.CreateAsync (SpektrERP.HttpApi)
   * @returns EntityHistoryViewSettingDto Success
   * @throws ApiError
   */
  public historyCreate({
requestBody,
}: {
requestBody?: EntityHistoryViewSettingCreateDto,
}): CancelablePromise<EntityHistoryViewSettingDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/histories/settings',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get All History Entity Types
   * SpektrERP.Controllers.HistoryController.GetAllHistoryEntityTypes (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public historyGetAllHistoryEntityTypes(): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/histories/settings/types',
    });
  }

  /**
   * Get All History Entity Types
   * SpektrERP.Controllers.HistoryController.GetAllHistoryEntityTypes (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public historyGetAllHistoryEntityTypes1({
name,
}: {
name: string,
}): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/histories/settings/types/{name}/properties',
      path: {
        'name': name,
      },
    });
  }

  /**
   * Get History
   * SpektrERP.Controllers.HistoryController.GetHistoryAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEntityHistoryDto Success
   * @throws ApiError
   */
  public historyGetHistory({
entityId,
entityType,
sorting,
skipCount,
maxResultCount,
}: {
entityId: string,
entityType: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEntityHistoryDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/histories',
      query: {
        'EntityId': entityId,
        'EntityType': entityType,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

}
