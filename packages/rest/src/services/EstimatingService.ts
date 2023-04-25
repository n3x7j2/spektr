/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstimatingImportingDto } from '../models/EstimatingImportingDto';
import type { EstimatingImportingResultDto } from '../models/EstimatingImportingResultDto';
import type { PagedResultDtoOfEstimatingImportingResultDto } from '../models/PagedResultDtoOfEstimatingImportingResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EstimatingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Import
   * SpektrERP.Controllers.EstimatingController.ImportAsync (SpektrERP.HttpApi)
   * @returns EstimatingImportingResultDto Success
   * @throws ApiError
   */
  public estimatingImport({
requestBody,
}: {
requestBody?: EstimatingImportingDto,
}): CancelablePromise<EstimatingImportingResultDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/estimating/imports',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.EstimatingController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfEstimatingImportingResultDto Success
   * @throws ApiError
   */
  public estimatingGetList({
projectId,
sorting,
skipCount,
maxResultCount,
}: {
projectId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfEstimatingImportingResultDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/estimating/imports',
      query: {
        'ProjectId': projectId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get Import Result
   * SpektrERP.Controllers.EstimatingController.GetImportResultAsync (SpektrERP.HttpApi)
   * @returns EstimatingImportingResultDto Success
   * @throws ApiError
   */
  public estimatingGetImportResult({
id,
}: {
id: string,
}): CancelablePromise<EstimatingImportingResultDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/estimating/imports/{id}',
      path: {
        'id': id,
      },
    });
  }

}
