/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResultDtoOfCountryLookupDto } from '../models/ListResultDtoOfCountryLookupDto';
import type { ListResultDtoOfStateProvinceLookupDto } from '../models/ListResultDtoOfStateProvinceLookupDto';
import type { ListResultDtoOfString } from '../models/ListResultDtoOfString';
import type { PagedResultDtoOfProjectShippingLocationDto } from '../models/PagedResultDtoOfProjectShippingLocationDto';
import type { ProjectShippingLocationCreateDto } from '../models/ProjectShippingLocationCreateDto';
import type { ProjectShippingLocationDto } from '../models/ProjectShippingLocationDto';
import type { ProjectShippingLocationUpdateDto } from '../models/ProjectShippingLocationUpdateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectShippingLocationService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Project Shipping Location List
   * SpektrERP.Controllers.ProjectShippingLocationController.GetProjectShippingLocationListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfProjectShippingLocationDto Success
   * @throws ApiError
   */
  public projectShippingLocationGetProjectShippingLocationList({
projectId,
destinationName,
address1,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
projectId: string,
destinationName?: string,
address1?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfProjectShippingLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/{projectId}/shipping-locations',
      path: {
        'projectId': projectId,
      },
      query: {
        'DestinationName': destinationName,
        'Address1': address1,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create Project Shipping Location
   * SpektrERP.Controllers.ProjectShippingLocationController.CreateProjectShippingLocationAsync (SpektrERP.HttpApi)
   * @returns ProjectShippingLocationDto Success
   * @throws ApiError
   */
  public projectShippingLocationCreateProjectShippingLocation({
projectId,
requestBody,
}: {
projectId: string,
requestBody?: ProjectShippingLocationCreateDto,
}): CancelablePromise<ProjectShippingLocationDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/projects/{projectId}/shipping-locations',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.ProjectShippingLocationController.GetAsync (SpektrERP.HttpApi)
   * @returns ProjectShippingLocationDto Success
   * @throws ApiError
   */
  public projectShippingLocationGet({
id,
}: {
id: string,
}): CancelablePromise<ProjectShippingLocationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/shipping-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update Project Shipping Location
   * SpektrERP.Controllers.ProjectShippingLocationController.UpdateProjectShippingLocationAsync (SpektrERP.HttpApi)
   * @returns ProjectShippingLocationDto Success
   * @throws ApiError
   */
  public projectShippingLocationUpdateProjectShippingLocation({
id,
requestBody,
}: {
id: string,
requestBody?: ProjectShippingLocationUpdateDto,
}): CancelablePromise<ProjectShippingLocationDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/projects/shipping-locations/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete Project Shipping Location
   * SpektrERP.Controllers.ProjectShippingLocationController.DeleteProjectShippingLocationAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public projectShippingLocationDeleteProjectShippingLocation({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/projects/shipping-locations/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Ge Federal Tax Lookup
   * SpektrERP.Controllers.ProjectShippingLocationController.GeFederalTaxLookupAsync (SpektrERP.HttpApi)
   * @returns ListResultDtoOfString Success
   * @throws ApiError
   */
  public projectShippingLocationGeFederalTaxLookup({
projectId,
}: {
projectId?: string,
}): CancelablePromise<ListResultDtoOfString> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/shipping-locations/federal-tax-ids',
      query: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Ge State Province Lookup
   * SpektrERP.Controllers.ProjectShippingLocationController.GeStateProvinceLookupAsync (SpektrERP.HttpApi)
   * @returns ListResultDtoOfStateProvinceLookupDto Success
   * @throws ApiError
   */
  public projectShippingLocationGeStateProvinceLookup({
countryId,
}: {
countryId?: string,
}): CancelablePromise<ListResultDtoOfStateProvinceLookupDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/shipping-locations/state-provinces',
      query: {
        'countryId': countryId,
      },
    });
  }

  /**
   * Ge Country Lookup
   * SpektrERP.Controllers.ProjectShippingLocationController.GeCountryLookupAsync (SpektrERP.HttpApi)
   * @returns ListResultDtoOfCountryLookupDto Success
   * @throws ApiError
   */
  public projectShippingLocationGeCountryLookup(): CancelablePromise<ListResultDtoOfCountryLookupDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/projects/shipping-locations/countries',
    });
  }

}
