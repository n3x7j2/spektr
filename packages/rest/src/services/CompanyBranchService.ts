/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBranchCreateDto } from '../models/CompanyBranchCreateDto';
import type { CompanyBranchDto } from '../models/CompanyBranchDto';
import type { CompanyBranchUpdateDto } from '../models/CompanyBranchUpdateDto';
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfCompanyBranchDto } from '../models/PagedResultDtoOfCompanyBranchDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyBranchService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Branch List
   * SpektrERP.Controllers.CompanyBranchController.GetBranchListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfCompanyBranchDto Success
   * @throws ApiError
   */
  public companyBranchGetBranchList({
companyId,
branchProvinceStateId,
branchPostalCode,
branchCountryId,
branchAddress,
branchEmail,
hq,
sorting,
skipCount,
maxResultCount,
}: {
companyId: string,
branchProvinceStateId?: string,
branchPostalCode?: string,
branchCountryId?: string,
branchAddress?: string,
branchEmail?: string,
hq?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfCompanyBranchDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/{companyId}/branches',
      path: {
        'companyId': companyId,
      },
      query: {
        'BranchProvinceStateId': branchProvinceStateId,
        'BranchPostalCode': branchPostalCode,
        'BranchCountryId': branchCountryId,
        'BranchAddress': branchAddress,
        'BranchEmail': branchEmail,
        'HQ': hq,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create Branch
   * SpektrERP.Controllers.CompanyBranchController.CreateBranchAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchDto Success
   * @throws ApiError
   */
  public companyBranchCreateBranch({
companyId,
requestBody,
}: {
companyId: string,
requestBody?: CompanyBranchCreateDto,
}): CancelablePromise<CompanyBranchDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/companies/{companyId}/branches',
      path: {
        'companyId': companyId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.CompanyBranchController.GetAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchDto Success
   * @throws ApiError
   */
  public companyBranchGet({
id,
}: {
id: string,
}): CancelablePromise<CompanyBranchDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/branches/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update Branch
   * SpektrERP.Controllers.CompanyBranchController.UpdateBranchAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchDto Success
   * @throws ApiError
   */
  public companyBranchUpdateBranch({
id,
requestBody,
}: {
id: string,
requestBody?: CompanyBranchUpdateDto,
}): CancelablePromise<CompanyBranchDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/companies/branches/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete Branch
   * SpektrERP.Controllers.CompanyBranchController.DeleteBranchAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public companyBranchDeleteBranch({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/companies/branches/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List Drop Down Company Branch
   * SpektrERP.Controllers.CompanyBranchController.GetListDropDownCompanyBranchAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public companyBranchGetListDropDownCompanyBranch({
companyId,
}: {
companyId: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/companies-branches/{companyId}',
      path: {
        'companyId': companyId,
      },
    });
  }

}
