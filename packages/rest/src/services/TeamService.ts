/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfTeamDto } from '../models/PagedResultDtoOfTeamDto';
import type { TeamCreateDto } from '../models/TeamCreateDto';
import type { TeamDto } from '../models/TeamDto';
import type { TeamUpdateDto } from '../models/TeamUpdateDto';
import type { TeamUpsertDto } from '../models/TeamUpsertDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TeamService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.TeamController.GetAsync (SpektrERP.HttpApi)
   * @returns TeamDto Success
   * @throws ApiError
   */
  public teamGet({
id,
}: {
id: string,
}): CancelablePromise<TeamDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/teams/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.TeamController.UpdateAsync (SpektrERP.HttpApi)
   * @returns TeamDto Success
   * @throws ApiError
   */
  public teamUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: TeamUpdateDto,
}): CancelablePromise<TeamDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/teams/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.TeamController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public teamDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/teams/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.TeamController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfTeamDto Success
   * @throws ApiError
   */
  public teamGetList({
name,
sorting,
skipCount,
maxResultCount,
}: {
name?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfTeamDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/teams',
      query: {
        'Name': name,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.TeamController.CreateAsync (SpektrERP.HttpApi)
   * @returns TeamDto Success
   * @throws ApiError
   */
  public teamCreate({
requestBody,
}: {
requestBody?: TeamCreateDto,
}): CancelablePromise<TeamDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/teams',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Team
   * SpektrERP.Controllers.TeamController.GetListDropDownTeamAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public teamGetListDropDownTeam({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/teams',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Upsert
   * SpektrERP.Controllers.TeamController.UpsertAsync (SpektrERP.HttpApi)
   * @returns TeamDto Success
   * @throws ApiError
   */
  public teamUpsert({
requestBody,
}: {
requestBody?: Array<TeamUpsertDto>,
}): CancelablePromise<Array<TeamDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/teams/upserts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
