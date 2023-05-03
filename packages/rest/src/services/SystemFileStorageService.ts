/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SystemFileStorageService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Save
   * SpektrERP.Files.Providers.SystemFileStorageAppService.SaveAsync (SpektrERP.Application)
   * @returns string Success
   * @throws ApiError
   */
  public systemFileStorageSave({
folderName,
fileName,
fileNamePostfix,
fileExtension,
requestBody,
}: {
folderName?: string,
fileName?: string,
fileNamePostfix?: string,
fileExtension?: string,
requestBody?: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/system-file-storage/save',
      query: {
        'folderName': folderName,
        'fileName': fileName,
        'fileNamePostfix': fileNamePostfix,
        'fileExtension': fileExtension,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

}
