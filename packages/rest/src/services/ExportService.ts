/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportApiInfoDto } from '../models/ExportApiInfoDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ExportService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List Api Export Infos
   * SpektrERP.Controllers.ExportController.GetListApiExportInfos (SpektrERP.HttpApi)
   * @returns ExportApiInfoDto Success
   * @throws ApiError
   */
  public exportGetListApiExportInfos(): CancelablePromise<Array<ExportApiInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/exports',
    });
  }

}
