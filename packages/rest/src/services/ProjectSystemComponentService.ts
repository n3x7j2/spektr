/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfProjectSystemComponentDto } from '../models/PagedResultDtoOfProjectSystemComponentDto';
import type { ProjectSystemComponentCreateDto } from '../models/ProjectSystemComponentCreateDto';
import type { ProjectSystemComponentDto } from '../models/ProjectSystemComponentDto';
import type { ProjectSystemComponentUpdateDto } from '../models/ProjectSystemComponentUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectSystemComponentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create
   * SpektrERP.Controllers.ProjectSystemComponentController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemComponentDto Success
   * @throws ApiError
   */
  public projectSystemComponentCreate({
requestBody,
}: {
requestBody?: ProjectSystemComponentCreateDto,
}): CancelablePromise<ProjectSystemComponentDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project-system-components',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectSystemComponentController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectSystemComponentDto Success
   * @throws ApiError
   */
  public projectSystemComponentGetList({
projectSystemId,
dateApproved,
quantity,
quantityUomId,
primaryComponent,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectSystemId?: string,
dateApproved?: string,
quantity?: number,
quantityUomId?: string,
primaryComponent?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectSystemComponentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-system-components',
      query: {
        'ProjectSystemId': projectSystemId,
        'DateApproved': dateApproved,
        'Quantity': quantity,
        'QuantityUOMId': quantityUomId,
        'PrimaryComponent': primaryComponent,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.ProjectSystemComponentController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectSystemComponentDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/project-system-components/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectSystemComponentController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemComponentDto Success
   * @throws ApiError
   */
  public projectSystemComponentGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectSystemComponentDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-system-components/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectSystemComponentController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectSystemComponentDto Success
   * @throws ApiError
   */
  public projectSystemComponentUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectSystemComponentUpdateDto,
}): CancelablePromise<ProjectSystemComponentDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/project-system-components/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Project System Component
   * SpektrERP.Controllers.ProjectSystemComponentController.GetListDropDownProjectSystemComponentAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public projectSystemComponentGetListDropDownProjectSystemComponent({
projectSystemId,
searchKey,
}: {
projectSystemId?: string,
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/project-system-components',
      query: {
        'ProjectSystemId': projectSystemId,
        'SearchKey': searchKey,
      },
    });
  }

}
