/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DropDownItemOfGuid } from '../models/DropDownItemOfGuid';
import type { ImportInputDto } from '../models/ImportInputDto';
import type { ImportMetadataDto } from '../models/ImportMetadataDto';
import type { InventoryDataByBatchDto } from '../models/InventoryDataByBatchDto';
import type { InventoryDataByRuleDto } from '../models/InventoryDataByRuleDto';
import type { InventoryItemCreateDto } from '../models/InventoryItemCreateDto';
import type { InventoryItemDto } from '../models/InventoryItemDto';
import type { InventoryItemUpdateDto } from '../models/InventoryItemUpdateDto';
import type { InventoryItemWithDataDto } from '../models/InventoryItemWithDataDto';
import type { InventoryItemWithDataUpdateDto } from '../models/InventoryItemWithDataUpdateDto';
import type { InventoryMaterialOnOrderDto } from '../models/InventoryMaterialOnOrderDto';
import type { InventoryWorkInProgressDto } from '../models/InventoryWorkInProgressDto';
import type { MyProjectInventoryDrawerDto } from '../models/MyProjectInventoryDrawerDto';
import type { OpenInventoryDrawerDto } from '../models/OpenInventoryDrawerDto';
import type { OtherProjectInventoryDrawerDto } from '../models/OtherProjectInventoryDrawerDto';
import type { PagedResultDtoOfInventoryItemDto } from '../models/PagedResultDtoOfInventoryItemDto';
import type { WidgetInventoryItemDto } from '../models/WidgetInventoryItemDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryItemService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.InventoryItemController.GetAsync (SpektrERP.HttpApi)
   * @returns InventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemGet({
id,
}: {
id: string,
}): CancelablePromise<InventoryItemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.InventoryItemController.UpdateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: InventoryItemUpdateDto,
}): CancelablePromise<InventoryItemDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/inventory-items/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.InventoryItemController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/inventory-items/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.InventoryItemController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfInventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemGetList({
categoryId,
subCategoryId,
groupId,
projectId,
supplierContactId,
batchId,
disablePagination,
projectSystemComponentId,
isService,
bomId,
sorting,
skipCount,
maxResultCount,
}: {
categoryId?: string,
subCategoryId?: string,
groupId?: string,
projectId?: string,
supplierContactId?: string,
batchId?: string,
disablePagination?: boolean,
projectSystemComponentId?: string,
isService?: boolean,
bomId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfInventoryItemDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items',
      query: {
        'CategoryId': categoryId,
        'SubCategoryId': subCategoryId,
        'GroupId': groupId,
        'ProjectId': projectId,
        'SupplierContactId': supplierContactId,
        'BatchId': batchId,
        'DisablePagination': disablePagination,
        'ProjectSystemComponentId': projectSystemComponentId,
        'IsService': isService,
        'BOMId': bomId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.InventoryItemController.CreateAsync (SpektrERP.HttpApi)
   * @returns InventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemCreate({
requestBody,
}: {
requestBody?: InventoryItemCreateDto,
}): CancelablePromise<InventoryItemDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-items',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get My Project Inventory
   * SpektrERP.Controllers.InventoryItemController.GetMyProjectInventoryAsync (SpektrERP.HttpApi)
   * @returns MyProjectInventoryDrawerDto Success
   * @throws ApiError
   */
  public inventoryItemGetMyProjectInventory({
projectId,
systemId,
componentId,
disablePagination,
isShowEmptyItem,
sorting,
skipCount,
maxResultCount,
}: {
projectId: string,
systemId?: string,
componentId?: string,
disablePagination?: boolean,
isShowEmptyItem?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<Array<MyProjectInventoryDrawerDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/drawer/projects/{projectId}/my-project-inventory',
      path: {
        'projectId': projectId,
      },
      query: {
        'SystemId': systemId,
        'ComponentId': componentId,
        'DisablePagination': disablePagination,
        'IsShowEmptyItem': isShowEmptyItem,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get Open Inventory
   * SpektrERP.Controllers.InventoryItemController.GetOpenInventoryAsync (SpektrERP.HttpApi)
   * @returns OpenInventoryDrawerDto Success
   * @throws ApiError
   */
  public inventoryItemGetOpenInventory({
projectId,
systemId,
componentId,
disablePagination,
isShowEmptyItem,
sorting,
skipCount,
maxResultCount,
}: {
projectId: string,
systemId?: string,
componentId?: string,
disablePagination?: boolean,
isShowEmptyItem?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<Array<OpenInventoryDrawerDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/drawer/projects/{projectId}/open-inventory',
      path: {
        'projectId': projectId,
      },
      query: {
        'SystemId': systemId,
        'ComponentId': componentId,
        'DisablePagination': disablePagination,
        'IsShowEmptyItem': isShowEmptyItem,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get Other Project Inventory
   * SpektrERP.Controllers.InventoryItemController.GetOtherProjectInventoryAsync (SpektrERP.HttpApi)
   * @returns OtherProjectInventoryDrawerDto Success
   * @throws ApiError
   */
  public inventoryItemGetOtherProjectInventory({
excludeProjectId,
systemId,
componentId,
disablePagination,
isShowEmptyItem,
sorting,
skipCount,
maxResultCount,
}: {
excludeProjectId?: string,
systemId?: string,
componentId?: string,
disablePagination?: boolean,
isShowEmptyItem?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<Array<OtherProjectInventoryDrawerDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/drawer/other-projects-inventory',
      query: {
        'ExcludeProjectId': excludeProjectId,
        'SystemId': systemId,
        'ComponentId': componentId,
        'DisablePagination': disablePagination,
        'IsShowEmptyItem': isShowEmptyItem,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get Sample Data by Rule
   * SpektrERP.Controllers.InventoryItemController.GetSampleDataByRule (SpektrERP.HttpApi)
   * @returns InventoryDataByRuleDto Success
   * @throws ApiError
   */
  public inventoryItemGetSampleDataByRule({
subCategoryId,
rule,
}: {
subCategoryId?: string,
rule?: string,
}): CancelablePromise<InventoryDataByRuleDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/sample-data-by-rule',
      query: {
        'subCategoryId': subCategoryId,
        'rule': rule,
      },
    });
  }

  /**
   * Get Sample Data by Batch
   * SpektrERP.Controllers.InventoryItemController.GetSampleDataByBatch (SpektrERP.HttpApi)
   * @returns InventoryDataByBatchDto Success
   * @throws ApiError
   */
  public inventoryItemGetSampleDataByBatch({
inventoryItemId,
batchNumber,
}: {
inventoryItemId?: string,
batchNumber?: string,
}): CancelablePromise<InventoryDataByBatchDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/sample-data-by-batch',
      query: {
        'inventoryItemId': inventoryItemId,
        'batchNumber': batchNumber,
      },
    });
  }

  /**
   * Get All
   * SpektrERP.Controllers.InventoryItemController.GetAll (SpektrERP.HttpApi)
   * @returns InventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemGetAll({
categoryId,
subCategoryId,
groupId,
projectId,
supplierContactId,
batchId,
disablePagination,
projectSystemComponentId,
isService,
bomId,
sorting,
skipCount,
maxResultCount,
}: {
categoryId?: string,
subCategoryId?: string,
groupId?: string,
projectId?: string,
supplierContactId?: string,
batchId?: string,
disablePagination?: boolean,
projectSystemComponentId?: string,
isService?: boolean,
bomId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<Array<InventoryItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/get-all',
      query: {
        'CategoryId': categoryId,
        'SubCategoryId': subCategoryId,
        'GroupId': groupId,
        'ProjectId': projectId,
        'SupplierContactId': supplierContactId,
        'BatchId': batchId,
        'DisablePagination': disablePagination,
        'ProjectSystemComponentId': projectSystemComponentId,
        'IsService': isService,
        'BOMId': bomId,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Get Work in Progress
   * SpektrERP.Controllers.InventoryItemController.GetWorkInProgress (SpektrERP.HttpApi)
   * @returns InventoryWorkInProgressDto Success
   * @throws ApiError
   */
  public inventoryItemGetWorkInProgress({
inventoryItemId,
}: {
inventoryItemId: string,
}): CancelablePromise<Array<InventoryWorkInProgressDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/{inventoryItemId}/work-in-progresses',
      path: {
        'inventoryItemId': inventoryItemId,
      },
    });
  }

  /**
   * Get Material on Order
   * SpektrERP.Controllers.InventoryItemController.GetMaterialOnOrder (SpektrERP.HttpApi)
   * @returns InventoryMaterialOnOrderDto Success
   * @throws ApiError
   */
  public inventoryItemGetMaterialOnOrder({
inventoryItemId,
}: {
inventoryItemId: string,
}): CancelablePromise<Array<InventoryMaterialOnOrderDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/{inventoryItemId}/material-on-orders',
      path: {
        'inventoryItemId': inventoryItemId,
      },
    });
  }

  /**
   * Get Widget Project Inventory Item
   * SpektrERP.Controllers.InventoryItemController.GetWidgetProjectInventoryItem (SpektrERP.HttpApi)
   * @returns WidgetInventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemGetWidgetProjectInventoryItem({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<WidgetInventoryItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/projects/{projectId}/project-inventory-item-widget',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get Widget Open Inventory Item
   * SpektrERP.Controllers.InventoryItemController.GetWidgetOpenInventoryItem (SpektrERP.HttpApi)
   * @returns WidgetInventoryItemDto Success
   * @throws ApiError
   */
  public inventoryItemGetWidgetOpenInventoryItem({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<WidgetInventoryItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/projects/{projectId}/open-inventory-item-widget',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get List Drop Down Inventory Item
   * SpektrERP.Controllers.InventoryItemController.GetListDropDownInventoryItemAsync (SpektrERP.HttpApi)
   * @returns DropDownItemOfGuid Success
   * @throws ApiError
   */
  public inventoryItemGetListDropDownInventoryItem({
inventorySubCategoryId,
searchKey,
}: {
inventorySubCategoryId?: string,
searchKey?: string,
}): CancelablePromise<Array<DropDownItemOfGuid>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/lookup/inventory-items',
      query: {
        'InventorySubCategoryId': inventorySubCategoryId,
        'SearchKey': searchKey,
      },
    });
  }

  /**
   * Update With Data
   * SpektrERP.Controllers.InventoryItemController.UpdateWithDataAsync (SpektrERP.HttpApi)
   * @returns InventoryItemWithDataDto Success
   * @throws ApiError
   */
  public inventoryItemUpdateWithData({
requestBody,
}: {
requestBody?: InventoryItemWithDataUpdateDto,
}): CancelablePromise<InventoryItemWithDataDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-items/inventory-item-with-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Template
   * SpektrERP.Controllers.InventoryItemController.GetTemplateAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemGetTemplate({
subCategoryId,
}: {
subCategoryId: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/inventory-items/imports/templates/{subCategoryId}',
      path: {
        'subCategoryId': subCategoryId,
      },
    });
  }

  /**
   * Get Import Metadata
   * SpektrERP.Controllers.InventoryItemController.GetImportMetadataAsync (SpektrERP.HttpApi)
   * @returns ImportMetadataDto Success
   * @throws ApiError
   */
  public inventoryItemGetImportMetadata({
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
      url: '/api/inventory-items/imports/metadata/{subCategoryId}',
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
   * SpektrERP.Controllers.InventoryItemController.ImportAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public inventoryItemImport({
subCategoryId,
requestBody,
}: {
subCategoryId: string,
requestBody?: ImportInputDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/inventory-items/imports/import/{subCategoryId}',
      path: {
        'subCategoryId': subCategoryId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
