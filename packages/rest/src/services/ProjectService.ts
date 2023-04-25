/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { DropDownItemOfProjectStatus } from '../models/DropDownItemOfProjectStatus';
import type { PagedResultDtoOfProjectDto } from '../models/PagedResultDtoOfProjectDto';
import type { ProjectCloneDto } from '../models/ProjectCloneDto';
import type { ProjectCloneItemNode } from '../models/ProjectCloneItemNode';
import type { ProjectCreateDto } from '../models/ProjectCreateDto';
import type { ProjectDropDownItemDto } from '../models/ProjectDropDownItemDto';
import type { ProjectDto } from '../models/ProjectDto';
import type { ProjectStatus } from '../models/ProjectStatus';
import type { ProjectUpdateCombineDto } from '../models/ProjectUpdateCombineDto';
import type { ProjectUpdateDto } from '../models/ProjectUpdateDto';
import type { ProjectWithDataDto } from '../models/ProjectWithDataDto';
import type { ProjectWithDataUpdateDto } from '../models/ProjectWithDataUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Project Number Format Setting
   * SpektrERP.Controllers.ProjectController.GetProjectNumberFormatSettingAsync (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public projectGetProjectNumberFormatSetting(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/settings/project-number',
    });
  }

  /**
   * Set Project Number Format Setting
   * SpektrERP.Controllers.ProjectController.SetProjectNumberFormatSettingAsync (SpektrERP.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public projectSetProjectNumberFormatSetting({
newProjectFormatNumberSetting,
}: {
newProjectFormatNumberSetting?: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/settings/project-number',
      query: {
        'newProjectFormatNumberSetting': newProjectFormatNumberSetting,
      },
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectDto Success
   * @throws ApiError
   */
  public projectGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.ProjectController.UpdateAsync (SpektrERP.HttpApi)
   * @returns ProjectDto Success
   * @throws ApiError
   */
  public projectUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectUpdateDto,
}): CancelablePromise<ProjectDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.ProjectController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectDto Success
   * @throws ApiError
   */
  public projectGetList({
projectNumber,
projectName,
projectStatus,
contactId,
disablePagination,
teamIds,
sorting,
skipCount,
maxResultCount,
}: {
projectNumber?: string,
projectName?: string,
projectStatus?: ProjectStatus,
contactId?: string,
disablePagination?: boolean,
teamIds?: Array<string>,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects',
      query: {
        'ProjectNumber': projectNumber,
        'ProjectName': projectName,
        'ProjectStatus': projectStatus,
        'ContactId': contactId,
        'DisablePagination': disablePagination,
        'TeamIds': teamIds,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.ProjectController.CreateAsync (SpektrERP.HttpApi)
   * @returns ProjectDto Success
   * @throws ApiError
   */
  public projectCreate({
requestBody,
}: {
requestBody?: ProjectCreateDto,
}): CancelablePromise<ProjectDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.ProjectController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns ProjectWithDataDto Success
   * @throws ApiError
   */
  public projectUpdateWithData({
requestBody,
}: {
requestBody?: ProjectWithDataUpdateDto,
}): CancelablePromise<ProjectWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/project-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update Combine
   * SpektrERP.Controllers.ProjectController.UpdateCombineAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectUpdateCombine({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectUpdateCombineDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/project-update-combine/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Clone
   * SpektrERP.Controllers.ProjectController.CloneAsync (SpektrERP.HttpApi)
   * @returns ProjectDto Success
   * @throws ApiError
   */
  public projectClone({
requestBody,
}: {
requestBody?: ProjectCloneDto,
}): CancelablePromise<ProjectDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/clone',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Project Clone Item Tree Node
   * SpektrERP.Controllers.ProjectController.GetProjectCloneItemTreeNode (SpektrERP.HttpApi)
   * @returns ProjectCloneItemNode Success
   * @throws ApiError
   */
  public projectGetProjectCloneItemTreeNode(): CancelablePromise<Array<ProjectCloneItemNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/clone/tree-node-items',
    });
  }

  /**
   * Get List Drop Down Project Status
   * SpektrERP.Controllers.ProjectController.GetListDropDownProjectStatus (SpektrERP.HttpApi)
   * @returns DropDownItemOfProjectStatus Success
   * @throws ApiError
   */
  public projectGetListDropDownProjectStatus({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfProjectStatus>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/project-status',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Get List Drop Down Project Manager
   * SpektrERP.Controllers.ProjectController.GetListDropDownProjectManagerAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public projectGetListDropDownProjectManager({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/project-managers',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Get List Drop Down Project
   * SpektrERP.Controllers.ProjectController.GetListDropDownProjectAsync (SpektrERP.HttpApi)
   * @returns ProjectDropDownItemDto Success
   * @throws ApiError
   */
  public projectGetListDropDownProject({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<ProjectDropDownItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/projects',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
