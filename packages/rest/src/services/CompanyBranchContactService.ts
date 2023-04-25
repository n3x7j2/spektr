/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBranchContactCreateDto } from '../models/CompanyBranchContactCreateDto';
import type { CompanyBranchContactDto } from '../models/CompanyBranchContactDto';
import type { CompanyBranchContactInformationDto } from '../models/CompanyBranchContactInformationDto';
import type { CompanyBranchContactUpdateDto } from '../models/CompanyBranchContactUpdateDto';
import type { CompanyContactSliceCreateDto } from '../models/CompanyContactSliceCreateDto';
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { PagedResultDtoOfCompanyBranchContactDto } from '../models/PagedResultDtoOfCompanyBranchContactDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyBranchContactService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Contact List
   * SpektrERP.Controllers.CompanyBranchContactController.GetContactListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfCompanyBranchContactDto Success
   * @throws ApiError
   */
  public companyBranchContactGetContactList({
contactFirstName,
contactLastName,
contactTitle,
contactEmail,
companyBranchId,
projectId,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
contactFirstName?: string,
contactLastName?: string,
contactTitle?: string,
contactEmail?: string,
companyBranchId?: string,
projectId?: string,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfCompanyBranchContactDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/branches/contacts',
      query: {
        'ContactFirstName': contactFirstName,
        'ContactLastName': contactLastName,
        'ContactTitle': contactTitle,
        'ContactEmail': contactEmail,
        'CompanyBranchId': companyBranchId,
        'ProjectId': projectId,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create Contact
   * SpektrERP.Controllers.CompanyBranchContactController.CreateContactAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchContactDto Success
   * @throws ApiError
   */
  public companyBranchContactCreateContact({
companyBranchId,
requestBody,
}: {
companyBranchId: string,
requestBody?: CompanyBranchContactCreateDto,
}): CancelablePromise<CompanyBranchContactDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/companies/branches/{companyBranchId}/contacts',
      path: {
        'companyBranchId': companyBranchId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get
   * SpektrERP.Controllers.CompanyBranchContactController.GetAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchContactDto Success
   * @throws ApiError
   */
  public companyBranchContactGet({
id,
}: {
id: string,
}): CancelablePromise<CompanyBranchContactDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/branches/contacts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update Contact
   * SpektrERP.Controllers.CompanyBranchContactController.UpdateContactAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchContactDto Success
   * @throws ApiError
   */
  public companyBranchContactUpdateContact({
id,
requestBody,
}: {
id: string,
requestBody?: CompanyBranchContactUpdateDto,
}): CancelablePromise<CompanyBranchContactDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/companies/branches/contacts/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete Contact
   * SpektrERP.Controllers.CompanyBranchContactController.DeleteContactAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public companyBranchContactDeleteContact({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/companies/branches/contacts/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get Company Branch Contact Detail
   * SpektrERP.Controllers.CompanyBranchContactController.GetCompanyBranchContactDetailAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchContactInformationDto Success
   * @throws ApiError
   */
  public companyBranchContactGetCompanyBranchContactDetail({
branchContactId,
projectId,
}: {
branchContactId: string,
projectId?: string,
}): CancelablePromise<CompanyBranchContactInformationDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/branches/contacts/information/{branchContactId}',
      path: {
        'branchContactId': branchContactId,
      },
      query: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Create Contact
   * SpektrERP.Controllers.CompanyBranchContactController.CreateContactAsync (SpektrERP.HttpApi)
   * @returns CompanyBranchContactDto Success
   * @throws ApiError
   */
  public companyBranchContactCreateContact1({
requestBody,
}: {
requestBody?: CompanyContactSliceCreateDto,
}): CancelablePromise<CompanyBranchContactDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/companies/branches/slice-contacts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.CompanyBranchContactController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public companyBranchContactGetListDropDown({
searchKey,
}: {
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/companies/branches/lookups',
      query: {
        'SearchKey': searchKey,
      },
    });
  }

}
