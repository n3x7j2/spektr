/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectiveDto } from '../models/DirectiveDto';
import type { DirectiveShortInfoDto } from '../models/DirectiveShortInfoDto';
import type { DropdownDirectiveType } from '../models/DropdownDirectiveType';
import type { PagedResultDtoOfDirectiveDto } from '../models/PagedResultDtoOfDirectiveDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DirectiveService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.DirectiveController.GetAsync (SpektrERP.HttpApi)
   * @returns DirectiveDto Success
   * @throws ApiError
   */
  public directiveGet({
id,
}: {
id: string,
}): CancelablePromise<DirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.DirectiveController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveDto Success
   * @throws ApiError
   */
  public directiveGetList({
directiveNumber,
keyword,
subject,
projectId,
extraId,
phaseId,
directiveTypeId,
directiveSubTypeId,
directiveStatusId,
createdById,
parentDirectiveId,
dateCompleted,
sorting,
skipCount,
maxResultCount,
}: {
directiveNumber?: number,
keyword?: string,
subject?: string,
projectId?: string,
extraId?: string,
phaseId?: string,
directiveTypeId?: string,
directiveSubTypeId?: string,
directiveStatusId?: string,
createdById?: string,
parentDirectiveId?: string,
dateCompleted?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives',
      query: {
        'DirectiveNumber': directiveNumber,
        'Keyword': keyword,
        'Subject': subject,
        'ProjectId': projectId,
        'ExtraId': extraId,
        'PhaseId': phaseId,
        'DirectiveTypeId': directiveTypeId,
        'DirectiveSubTypeId': directiveSubTypeId,
        'DirectiveStatusId': directiveStatusId,
        'CreatedById': createdById,
        'ParentDirectiveId': parentDirectiveId,
        'DateCompleted': dateCompleted,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get All
   * SpektrERP.Controllers.DirectiveController.GetAllAsync (SpektrERP.HttpApi)
   * @returns DirectiveShortInfoDto Success
   * @throws ApiError
   */
  public directiveGetAll({
projectId,
extraId,
phaseId,
directiveTypeId,
directiveSubTypeId,
}: {
projectId?: string,
extraId?: string,
phaseId?: string,
directiveTypeId?: string,
directiveSubTypeId?: string,
}): CancelablePromise<Array<DirectiveShortInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives/all',
      query: {
        'ProjectId': projectId,
        'ExtraId': extraId,
        'PhaseId': phaseId,
        'DirectiveTypeId': directiveTypeId,
        'DirectiveSubTypeId': directiveSubTypeId,
      },
    });
  }

  /**
   * Get Using Directive Types
   * SpektrERP.Controllers.DirectiveController.GetUsingDirectiveTypesAsync (SpektrERP.HttpApi)
   * @returns DropdownDirectiveType Success
   * @throws ApiError
   */
  public directiveGetUsingDirectiveTypes({
directiveNumber,
projectId,
extraId,
phaseId,
directiveTypeId,
directiveSubTypeId,
directiveStatusId,
sorting,
skipCount,
maxResultCount,
}: {
directiveNumber?: number,
projectId?: string,
extraId?: string,
phaseId?: string,
directiveTypeId?: string,
directiveSubTypeId?: string,
directiveStatusId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<Array<DropdownDirectiveType>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives/directive-types',
      query: {
        'DirectiveNumber': directiveNumber,
        'ProjectId': projectId,
        'ExtraId': extraId,
        'PhaseId': phaseId,
        'DirectiveTypeId': directiveTypeId,
        'DirectiveSubTypeId': directiveSubTypeId,
        'DirectiveStatusId': directiveStatusId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get List Directive for Project
   * SpektrERP.Controllers.DirectiveController.GetListDirectiveForProjectAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfDirectiveDto Success
   * @throws ApiError
   */
  public directiveGetListDirectiveForProject({
directiveNumber,
projectId,
extraId,
phaseId,
directiveTypeId,
directiveSubTypeId,
directiveStatusId,
sorting,
skipCount,
maxResultCount,
}: {
directiveNumber?: number,
projectId?: string,
extraId?: string,
phaseId?: string,
directiveTypeId?: string,
directiveSubTypeId?: string,
directiveStatusId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfDirectiveDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives/project',
      query: {
        'DirectiveNumber': directiveNumber,
        'ProjectId': projectId,
        'ExtraId': extraId,
        'PhaseId': phaseId,
        'DirectiveTypeId': directiveTypeId,
        'DirectiveSubTypeId': directiveSubTypeId,
        'DirectiveStatusId': directiveStatusId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get List Available Fields to Overwrite
   * SpektrERP.Controllers.DirectiveController.GetListAvailableFieldsToOverwrite (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public directiveGetListAvailableFieldsToOverwrite(): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/directives/available-fields-overwrite',
    });
  }

}
