/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportInputDto } from '../models/ImportInputDto';
import type { ImportMetadataDto } from '../models/ImportMetadataDto';
import type { InventoryDataByRuleDto } from '../models/InventoryDataByRuleDto';
import type { InventoryItemGroupCreateDto } from '../models/InventoryItemGroupCreateDto';
import type { InventoryItemGroupDropDownDto } from '../models/InventoryItemGroupDropDownDto';
import type { InventoryItemGroupDto } from '../models/InventoryItemGroupDto';
import type { InventoryItemGroupUpdateDto } from '../models/InventoryItemGroupUpdateDto';
import type { PagedResultDtoOfInventoryItemGroupDto } from '../models/PagedResultDtoOfInventoryItemGroupDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemGroupService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemGroupController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupDto Success
   * @throws ApiError
   */
  public inventoryItemGroupGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemGroupDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-groups/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemGroupController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupDto Success
   * @throws ApiError
   */
  public inventoryItemGroupUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemGroupUpdateDto,
}): CancelablePromise<InventoryItemGroupDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-item-groups/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemGroupController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemGroupDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-item-groups/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemGroupController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemGroupDto Success
   * @throws ApiError
   */
  public inventoryItemGroupGetList({
inventoryCategoryId,
inventorySubCategoryId,
isService,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
inventoryCategoryId?: string,
inventorySubCategoryId?: string,
isService?: boolean,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemGroupDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-groups',
      query: {
        'InventoryCategoryId': inventoryCategoryId,
        'InventorySubCategoryId': inventorySubCategoryId,
        'IsService': isService,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemGroupController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupDto Success
   * @throws ApiError
   */
  public inventoryItemGroupCreate({
requestBody,
}: {
requestBody?: InventoryItemGroupCreateDto,
}): CancelablePromise<InventoryItemGroupDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-groups',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Sample Data by Rule
   * SpektrERP.Controllers.InventoryItemGroupController.GetSampleDataByRule (SpektrERP.HttpApi)
   * @returns InventoryDataByRuleDto Success
   * @throws ApiError
   */
  public inventoryItemGroupGetSampleDataByRule({
subCategoryId,
rule,
}: {
subCategoryId?: string,
rule?: string,
}): CancelablePromise<InventoryDataByRuleDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-groups/sample-data-by-rule',
      query: {
        'subCategoryId': subCategoryId,
        'rule': rule,
      },
    });
  }

  /**
   * Get List Drop Down
   * SpektrERP.Controllers.InventoryItemGroupController.GetListDropDownAsync (SpektrERP.HttpApi)
   * @returns InventoryItemGroupDropDownDto Success
   * @throws ApiError
   */
  public inventoryItemGroupGetListDropDown({
projectId,
inventorySubCategoryId,
isMainBatchNumber,
isService,
searchKey,
}: {
projectId?: string,
inventorySubCategoryId?: string,
isMainBatchNumber?: boolean,
isService?: boolean,
searchKey?: string,
}): CancelablePromise<Array<InventoryItemGroupDropDownDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-groups/lookup',
      query: {
        'ProjectId': projectId,
        'InventorySubCategoryId': inventorySubCategoryId,
        'IsMainBatchNumber': isMainBatchNumber,
        'IsService': isService,
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Get Template
   * SpektrERP.Controllers.InventoryItemGroupController.GetTemplateAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemGroupGetTemplate({
subCategoryId,
}: {
subCategoryId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-groups/imports/templates/{subCategoryId}',
      path: {
        'subCategoryId': subCategoryId,
      },
    });
  }

  /**
   * Get Import Metadata
   * SpektrERP.Controllers.InventoryItemGroupController.GetImportMetadataAsync (SpektrERP.HttpApi)
   * @returns ImportMetadataDto Success
   * @throws ApiError
   */
  public inventoryItemGroupGetImportMetadata({
subCategoryId,
fileUrl,
csvDelimiter,
csvTextQualifier,
}: {
subCategoryId: string,
fileUrl?: string,
csvDelimiter?: string,
csvTextQualifier?: string,
}): CancelablePromise<ImportMetadataDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-item-groups/imports/metadata/{subCategoryId}',
      path: {
        'subCategoryId': subCategoryId,
      },
      query: {
        'fileUrl': fileUrl,
        'csvDelimiter': csvDelimiter,
        'csvTextQualifier': csvTextQualifier,
      },
    });
  }

  /**
   * Import
   * SpektrERP.Controllers.InventoryItemGroupController.ImportAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemGroupImport({
subCategoryId,
requestBody,
}: {
subCategoryId: string,
requestBody?: ImportInputDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-item-groups/imports/import/{subCategoryId}',
      path: {
        'subCategoryId': subCategoryId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
