/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraScopeNode } from '../models/ExtraScopeNode';
import type { NonProductionDirectiveNode } from '../models/NonProductionDirectiveNode';
import type { NonProductionDirectiveTypeFolderNode } from '../models/NonProductionDirectiveTypeFolderNode';
import type { ProductionDirectiveNode } from '../models/ProductionDirectiveNode';
import type { ProjectExtraTypeNode } from '../models/ProjectExtraTypeNode';
import type { ProjectNode } from '../models/ProjectNode';
import type { ProjectPhaseNode } from '../models/ProjectPhaseNode';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectNavigationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Project Node
   * SpektrERP.Controllers.ProjectNavigationController.GetProjectNodeAsync (SpektrERP.HttpApi)
   * @returns ProjectNode Success
   * @throws ApiError
   */
  public projectNavigationGetProjectNode({
searchKey,
teamIds,
}: {
searchKey?: string,
teamIds?: Array<string>,
}): CancelablePromise<Array<ProjectNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/projects',
      query: {
        'searchKey': searchKey,
        'teamIds': teamIds,
      },
    });
  }

  /**
   * Get Project Extra Type Node
   * SpektrERP.Controllers.ProjectNavigationController.GetProjectExtraTypeNodeAsync (SpektrERP.HttpApi)
   * @returns ProjectExtraTypeNode Success
   * @throws ApiError
   */
  public projectNavigationGetProjectExtraTypeNode({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<ProjectExtraTypeNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/project-extra-types/{projectId}',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get Directives Folder Node
   * SpektrERP.Controllers.ProjectNavigationController.GetDirectivesFolderNodeAsync (SpektrERP.HttpApi)
   * @returns ProjectPhaseNode Success
   * @throws ApiError
   */
  public projectNavigationGetDirectivesFolderNode({
projectId,
extraTypeId,
}: {
projectId: string,
extraTypeId: string,
}): CancelablePromise<Array<ProjectPhaseNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/project-phases/main-scope/{projectId}/{extraTypeId}',
      path: {
        'projectId': projectId,
        'extraTypeId': extraTypeId,
      },
    });
  }

  /**
   * Get Project Extra Node
   * SpektrERP.Controllers.ProjectNavigationController.GetProjectExtraNodeAsync (SpektrERP.HttpApi)
   * @returns ExtraScopeNode Success
   * @throws ApiError
   */
  public projectNavigationGetProjectExtraNode({
projectId,
extraTypeId,
}: {
projectId: string,
extraTypeId: string,
}): CancelablePromise<Array<ExtraScopeNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/project-extras/{projectId}/{extraTypeId}',
      path: {
        'projectId': projectId,
        'extraTypeId': extraTypeId,
      },
    });
  }

  /**
   * Get Project Phase Node
   * SpektrERP.Controllers.ProjectNavigationController.GetProjectPhaseNodeAsync (SpektrERP.HttpApi)
   * @returns ProjectPhaseNode Success
   * @throws ApiError
   */
  public projectNavigationGetProjectPhaseNode({
extraId,
}: {
extraId: string,
}): CancelablePromise<Array<ProjectPhaseNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/project-phases/{extraId}',
      path: {
        'extraId': extraId,
      },
    });
  }

  /**
   * Get Non Production Directive Type Node
   * SpektrERP.Controllers.ProjectNavigationController.GetNonProductionDirectiveTypeNodeAsync (SpektrERP.HttpApi)
   * @returns NonProductionDirectiveTypeFolderNode Success
   * @throws ApiError
   */
  public projectNavigationGetNonProductionDirectiveTypeNode({
phaseId,
}: {
phaseId: string,
}): CancelablePromise<Array<NonProductionDirectiveTypeFolderNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/non-production-directive-types/{phaseId}',
      path: {
        'phaseId': phaseId,
      },
    });
  }

  /**
   * Get Non Production Directive Node
   * SpektrERP.Controllers.ProjectNavigationController.GetNonProductionDirectiveNodeAsync (SpektrERP.HttpApi)
   * @returns NonProductionDirectiveNode Success
   * @throws ApiError
   */
  public projectNavigationGetNonProductionDirectiveNode({
phaseId,
directiveTypeId,
}: {
phaseId: string,
directiveTypeId: string,
}): CancelablePromise<Array<NonProductionDirectiveNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/non-production-directives/{phaseId}/{directiveTypeId}',
      path: {
        'phaseId': phaseId,
        'directiveTypeId': directiveTypeId,
      },
    });
  }

  /**
   * Get Production Directive Node
   * SpektrERP.Controllers.ProjectNavigationController.GetProductionDirectiveNodeAsync (SpektrERP.HttpApi)
   * @returns ProductionDirectiveNode Success
   * @throws ApiError
   */
  public projectNavigationGetProductionDirectiveNode({
phaseId,
}: {
phaseId: string,
}): CancelablePromise<Array<ProductionDirectiveNode>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-navigations/production-directives/{phaseId}',
      path: {
        'phaseId': phaseId,
      },
    });
  }

}
