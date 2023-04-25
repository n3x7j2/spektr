/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BOMDataImportStagingDto } from '../models/BOMDataImportStagingDto';
import type { BOMDataImportStagingFinalResultDto } from '../models/BOMDataImportStagingFinalResultDto';
import type { BomDeleteImportStagingDto } from '../models/BomDeleteImportStagingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BomDataImportStagingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.BOMDataImportStagingController.GetAsync (SpektrERP.HttpApi)
   * @returns BOMDataImportStagingDto Success
   * @throws ApiError
   */
  public bomDataImportStagingGet({
projectId,
jsonFileUrl,
}: {
projectId: string,
jsonFileUrl?: string,
}): CancelablePromise<BOMDataImportStagingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms-data-import-staging/{projectId}/json-data',
      path: {
        'projectId': projectId,
      },
      query: {
        'jsonFileUrl': jsonFileUrl,
      },
    });
  }

  /**
   * Import With File Validation
   * SpektrERP.Controllers.BOMDataImportStagingController.ImportWithFileValidationAsync (SpektrERP.HttpApi)
   * @returns BOMDataImportStagingFinalResultDto Success
   * @throws ApiError
   */
  public bomDataImportStagingImportWithFileValidation({
projectId,
jsonFileUrl,
}: {
projectId?: string,
jsonFileUrl?: string,
}): CancelablePromise<BOMDataImportStagingFinalResultDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/boms-data-import-staging/import-with-file-validation',
      query: {
        'projectId': projectId,
        'jsonFileUrl': jsonFileUrl,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.BOMDataImportStagingController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bomDataImportStagingDelete({
requestBody,
}: {
requestBody?: BomDeleteImportStagingDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/boms-data-import-staging',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Any Un Assigned
   * SpektrERP.Controllers.BOMDataImportStagingController.AnyUnAssignedAsync (SpektrERP.HttpApi)
   * @returns boolean Success
   * @throws ApiError
   */
  public bomDataImportStagingAnyUnAssigned({
projectId,
}: {
projectId: string,
}): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms-data-import-staging/{projectId}/any-un-assigned',
      path: {
        'projectId': projectId,
      },
    });
  }

}
