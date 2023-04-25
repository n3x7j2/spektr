/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NoteCreateDto } from '../models/NoteCreateDto';
import type { NoteDto } from '../models/NoteDto';
import type { NoteEntityType } from '../models/NoteEntityType';
import type { PagedResultDtoOfNoteDto } from '../models/PagedResultDtoOfNoteDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NoteService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.NoteController.GetAsync (SpektrERP.HttpApi)
   * @returns NoteDto Success
   * @throws ApiError
   */
  public noteGet({
id,
}: {
id: string,
}): CancelablePromise<NoteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/notes/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.NoteController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfNoteDto Success
   * @throws ApiError
   */
  public noteGetList({
userId,
entityType,
entityId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
userId?: string,
entityType?: NoteEntityType,
entityId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfNoteDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/notes',
      query: {
        'UserId': userId,
        'EntityType': entityType,
        'EntityId': entityId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.NoteController.CreateAsync (SpektrERP.HttpApi)
   * @returns NoteDto Success
   * @throws ApiError
   */
  public noteCreate({
requestBody,
}: {
requestBody?: NoteCreateDto,
}): CancelablePromise<NoteDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/notes',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
