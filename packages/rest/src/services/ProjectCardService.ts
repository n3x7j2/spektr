/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhaseItemAllScopeDto } from '../models/PhaseItemAllScopeDto';
import type { PhaseItemDto } from '../models/PhaseItemDto';
import type { PhaseItemSystemInfoDto } from '../models/PhaseItemSystemInfoDto';
import type { ScopeCardsDto } from '../models/ScopeCardsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectCardService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get List Project Scope by Project
   * SpektrERP.Controllers.ProjectCardController.GetListProjectScopeByProjectAsync (SpektrERP.HttpApi)
   * @returns ScopeCardsDto Success
   * @throws ApiError
   */
  public projectCardGetListProjectScopeByProject({
projectId,
}: {
projectId: string,
}): CancelablePromise<ScopeCardsDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-cards/project-scopes/project/{projectId}',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get List Project Phase by All Scope
   * SpektrERP.Controllers.ProjectCardController.GetListProjectPhaseByAllScopeAsync (SpektrERP.HttpApi)
   * @returns PhaseItemAllScopeDto Success
   * @throws ApiError
   */
  public projectCardGetListProjectPhaseByAllScope({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<PhaseItemAllScopeDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-cards/project-phases/all-scope/{projectId}',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get List Project Phase by Extra
   * SpektrERP.Controllers.ProjectCardController.GetListProjectPhaseByExtraAsync (SpektrERP.HttpApi)
   * @returns PhaseItemDto Success
   * @throws ApiError
   */
  public projectCardGetListProjectPhaseByExtra({
extraId,
}: {
extraId: string,
}): CancelablePromise<Array<PhaseItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-cards/project-phases/extra/{extraId}',
      path: {
        'extraId': extraId,
      },
    });
  }

  /**
   * Get Project Phase
   * SpektrERP.Controllers.ProjectCardController.GetProjectPhaseAsync (SpektrERP.HttpApi)
   * @returns PhaseItemDto Success
   * @throws ApiError
   */
  public projectCardGetProjectPhase({
phaseId,
}: {
phaseId: string,
}): CancelablePromise<PhaseItemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-cards/project-phases/phase/{phaseId}',
      path: {
        'phaseId': phaseId,
      },
    });
  }

  /**
   * Get Product Categories by Phase Id
   * SpektrERP.Controllers.ProjectCardController.GetProductCategoriesByPhaseId (SpektrERP.HttpApi)
   * @returns PhaseItemSystemInfoDto Success
   * @throws ApiError
   */
  public projectCardGetProductCategoriesByPhaseId({
phaseId,
}: {
phaseId: string,
}): CancelablePromise<Array<PhaseItemSystemInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project-cards/project-phases/directive-summary/{phaseId}',
      path: {
        'phaseId': phaseId,
      },
    });
  }

}
