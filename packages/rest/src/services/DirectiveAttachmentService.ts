/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveAttachmentCreateDto } from '../models/DirectiveAttachmentCreateDto';
import type { DirectiveAttachmentDto } from '../models/DirectiveAttachmentDto';
import type { DirectiveAttachmentUpdateDto } from '../models/DirectiveAttachmentUpdateDto';
import type { PagedResultDtoOfDirectiveAttachmentDto } from '../models/PagedResultDtoOfDirectiveAttachmentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveAttachmentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveAttachmentController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveAttachmentDto Success
   * @throws ApiError
   */
  public directiveAttachmentGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveAttachmentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-attachments/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.DirectiveAttachmentController.UpdateAsync (SpektrERP.HttpApi)
   * @returns DirectiveAttachmentDto Success
   * @throws ApiError
   */
  public directiveAttachmentUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: DirectiveAttachmentUpdateDto,
}): CancelablePromise<DirectiveAttachmentDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/directive-attachments/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.DirectiveAttachmentController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public directiveAttachmentDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/directive-attachments/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveAttachmentController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveAttachmentDto Success
   * @throws ApiError
   */
  public directiveAttachmentGetList({
directiveId,
attachment,
sorting,
skipCount,
maxResultCount,
}: {
directiveId?: string,
attachment?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveAttachmentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directive-attachments',
      query: {
        'DirectiveId': directiveId,
        'Attachment': attachment,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.DirectiveAttachmentController.CreateAsync (SpektrERP.HttpApi)
   * @returns DirectiveAttachmentDto Success
   * @throws ApiError
   */
  public directiveAttachmentCreate({
requestBody,
}: {
requestBody?: DirectiveAttachmentCreateDto,
}): CancelablePromise<DirectiveAttachmentDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/directive-attachments',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
