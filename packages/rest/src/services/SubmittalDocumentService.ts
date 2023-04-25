/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedResultDtoOfSubmittalDocumentDto } from '../models/PagedResultDtoOfSubmittalDocumentDto';
import type { SubmittalDocumentCreateDto } from '../models/SubmittalDocumentCreateDto';
import type { SubmittalDocumentDto } from '../models/SubmittalDocumentDto';
import type { SubmittalDocumentUpdateDto } from '../models/SubmittalDocumentUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubmittalDocumentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.SubmittalDocumentController.GetAsync (SpektrERP.HttpApi)
   * @returns SubmittalDocumentDto Success
   * @throws ApiError
   */
  public submittalDocumentGet({
id,
}: {
id: string,
}): CancelablePromise<SubmittalDocumentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittal-documents/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.SubmittalDocumentController.UpdateAsync (SpektrERP.HttpApi)
   * @returns SubmittalDocumentDto Success
   * @throws ApiError
   */
  public submittalDocumentUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: SubmittalDocumentUpdateDto,
}): CancelablePromise<SubmittalDocumentDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/submittal-documents/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.SubmittalDocumentController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public submittalDocumentDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/submittal-documents/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.SubmittalDocumentController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfSubmittalDocumentDto Success
   * @throws ApiError
   */
  public submittalDocumentGetList({
submittalId,
documentTitle,
sorting,
skipCount,
maxResultCount,
}: {
submittalId?: string,
documentTitle?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfSubmittalDocumentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/submittal-documents',
      query: {
        'SubmittalId': submittalId,
        'DocumentTitle': documentTitle,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.SubmittalDocumentController.CreateAsync (SpektrERP.HttpApi)
   * @returns SubmittalDocumentDto Success
   * @throws ApiError
   */
  public submittalDocumentCreate({
requestBody,
}: {
requestBody?: SubmittalDocumentCreateDto,
}): CancelablePromise<SubmittalDocumentDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/submittal-documents',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
