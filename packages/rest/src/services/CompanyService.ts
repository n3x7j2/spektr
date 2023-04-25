/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyCreateDto } from '../models/CompanyCreateDto';
import type { CompanyDto } from '../models/CompanyDto';
import type { CompanyUpdateDto } from '../models/CompanyUpdateDto';
import type { CompanyWithDataDto } from '../models/CompanyWithDataDto';
import type { CompanyWithDataUpdateDto } from '../models/CompanyWithDataUpdateDto';
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfCompanyDto } from '../models/PagedResultDtoOfCompanyDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.CompanyController.GetAsync (SpektrERP.HttpApi)
   * @returns CompanyDto Success
   * @throws ApiError
   */
  public companyGet({
id,
}: {
id: string,
}): CancelablePromise<CompanyDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.CompanyController.UpdateAsync (SpektrERP.HttpApi)
   * @returns CompanyDto Success
   * @throws ApiError
   */
  public companyUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: CompanyUpdateDto,
}): CancelablePromise<CompanyDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/companies/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.CompanyController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public companyDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/companies/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.CompanyController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfCompanyDto Success
   * @throws ApiError
   */
  public companyGetList({
companyName,
sorting,
skipCount,
maxResultCount,
}: {
companyName?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfCompanyDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies',
      query: {
        'CompanyName': companyName,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.CompanyController.CreateAsync (SpektrERP.HttpApi)
   * @returns CompanyDto Success
   * @throws ApiError
   */
  public companyCreate({
requestBody,
}: {
requestBody?: CompanyCreateDto,
}): CancelablePromise<CompanyDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/companies',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down Company
   * SpektrERP.Controllers.CompanyController.GetListDropDownCompanyAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public companyGetListDropDownCompany({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/companies',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.CompanyController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns CompanyWithDataDto Success
   * @throws ApiError
   */
  public companyUpdateWithData({
requestBody,
}: {
requestBody?: CompanyWithDataUpdateDto,
}): CancelablePromise<CompanyWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/companies/company-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
