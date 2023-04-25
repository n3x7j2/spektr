/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportApiInfoDto } from '../models/ImportApiInfoDto';
import type { ImportJobDto } from '../models/ImportJobDto';
import type { PagedResultDtoOfImportJobDto } from '../models/PagedResultDtoOfImportJobDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ImportService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List Api Import Infos
   * SpektrERP.Controllers.ImportController.GetListApiImportInfos (SpektrERP.HttpApi)
   * @returns ImportApiInfoDto Success
   * @throws ApiError
   */
  public importGetListApiImportInfos(): CancelablePromise<Array<ImportApiInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/imports/infos',
    });
  }

  /**
   * Get Template
   * SpektrERP.Controllers.ImportController.GetTemplateAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public importGetTemplate({
importName,
namespace,
}: {
importName: string,
namespace: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/imports/templates/{importName}/{namespace}',
      path: {
        'importName': importName,
        'namespace': namespace,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ImportController.GetAsync (SpektrERP.HttpApi)
   * @returns ImportJobDto Success
   * @throws ApiError
   */
  public importGet({
id,
}: {
id: string,
}): CancelablePromise<ImportJobDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/imports/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ImportController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfImportJobDto Success
   * @throws ApiError
   */
  public importGetList({
sorting,
skipCount,
maxResultCount,
}: {
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfImportJobDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/imports',
      query: {
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Cancel
   * SpektrERP.Controllers.ImportController.CancelAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public importCancel({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/imports/cancel/{id}',
      path: {
        'id': id,
      },
    });
  }

}
