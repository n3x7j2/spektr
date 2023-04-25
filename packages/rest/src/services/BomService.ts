/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BOMCreateDto } from '../models/BOMCreateDto';
import type { BOMCutlistDto } from '../models/BOMCutlistDto';
import type { BOMDeleteInputDto } from '../models/BOMDeleteInputDto';
import type { BOMDetailImportDto } from '../models/BOMDetailImportDto';
import type { BOMDto } from '../models/BOMDto';
import type { BOMExtrusionCutlistGroupedDto } from '../models/BOMExtrusionCutlistGroupedDto';
import type { BOMExtrusionCutlistItemDto } from '../models/BOMExtrusionCutlistItemDto';
import type { BOMExtrusionImportDto } from '../models/BOMExtrusionImportDto';
import type { BOMFieldItemDto } from '../models/BOMFieldItemDto';
import type { BOMFieldItemUpsertDto } from '../models/BOMFieldItemUpsertDto';
import type { BOMInventoryItemImportDto } from '../models/BOMInventoryItemImportDto';
import type { BOMProductAssemblyDto } from '../models/BOMProductAssemblyDto';
import type { BOMProductDetailDto } from '../models/BOMProductDetailDto';
import type { BOMProductImportDto } from '../models/BOMProductImportDto';
import type { BOMProductInventoryItemDto } from '../models/BOMProductInventoryItemDto';
import type { BOMProductInventoryItemQuantityUpdateDto } from '../models/BOMProductInventoryItemQuantityUpdateDto';
import type { BOMProductPartDto } from '../models/BOMProductPartDto';
import type { BOMProductShortInfoDto } from '../models/BOMProductShortInfoDto';
import type { BOMStatus } from '../models/BOMStatus';
import type { BOMUpdateDto } from '../models/BOMUpdateDto';
import type { BOMWithFieldItemsDto } from '../models/BOMWithFieldItemsDto';
import type { BOMWithFieldItemsInputDto } from '../models/BOMWithFieldItemsInputDto';
import type { IssueBOMInputDto } from '../models/IssueBOMInputDto';
import type { PagedResultDtoOfBOMDto } from '../models/PagedResultDtoOfBOMDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BomService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.Controllers.BOMController.GetAsync (SpektrERP.HttpApi)
   * @returns BOMDto Success
   * @throws ApiError
   */
  public bomGet({
id,
}: {
id: string,
}): CancelablePromise<BOMDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Update
   * SpektrERP.Controllers.BOMController.UpdateAsync (SpektrERP.HttpApi)
   * @returns BOMDto Success
   * @throws ApiError
   */
  public bomUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: BOMUpdateDto,
}): CancelablePromise<BOMDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/boms/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.BOMController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bomDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/boms/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.Controllers.BOMController.GetListAsync (SpektrERP.HttpApi)
   * @returns PagedResultDtoOfBOMDto Success
   * @throws ApiError
   */
  public bomGetList({
productionId,
productionDirectiveId,
bomNumber,
assignedToId,
releasedById,
status,
disablePagination,
sorting,
skipCount,
maxResultCount,
}: {
productionId?: string,
productionDirectiveId?: string,
bomNumber?: number,
assignedToId?: string,
releasedById?: string,
status?: BOMStatus,
disablePagination?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfBOMDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms',
      query: {
        'ProductionId': productionId,
        'ProductionDirectiveId': productionDirectiveId,
        'BOMNumber': bomNumber,
        'AssignedToId': assignedToId,
        'ReleasedById': releasedById,
        'Status': status,
        'DisablePagination': disablePagination,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
    });
  }

  /**
   * Create
   * SpektrERP.Controllers.BOMController.CreateAsync (SpektrERP.HttpApi)
   * @returns BOMDto Success
   * @throws ApiError
   */
  public bomCreate({
requestBody,
}: {
requestBody?: BOMCreateDto,
}): CancelablePromise<BOMDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/boms',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Assemblies
   * SpektrERP.Controllers.BOMController.GetAssemblies (SpektrERP.HttpApi)
   * @returns BOMProductAssemblyDto Success
   * @throws ApiError
   */
  public bomGetAssemblies({
bomId,
productCategoryId,
}: {
bomId?: string,
productCategoryId?: string,
}): CancelablePromise<Array<BOMProductAssemblyDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/assemblies',
      query: {
        'BOMId': bomId,
        'ProductCategoryId': productCategoryId,
      },
    });
  }

  /**
   * Get Parts
   * SpektrERP.Controllers.BOMController.GetParts (SpektrERP.HttpApi)
   * @returns BOMProductPartDto Success
   * @throws ApiError
   */
  public bomGetParts({
parentBomProductId,
bomId,
productCategoryId,
}: {
parentBomProductId?: string,
bomId?: string,
productCategoryId?: string,
}): CancelablePromise<Array<BOMProductPartDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/parts',
      query: {
        'ParentBOMProductId': parentBomProductId,
        'BOMId': bomId,
        'ProductCategoryId': productCategoryId,
      },
    });
  }

  /**
   * Get Product Inventory Items
   * SpektrERP.Controllers.BOMController.GetProductInventoryItems (SpektrERP.HttpApi)
   * @returns BOMProductInventoryItemDto Success
   * @throws ApiError
   */
  public bomGetProductInventoryItems({
bomId,
bomProductId,
}: {
bomId?: string,
bomProductId?: string,
}): CancelablePromise<Array<BOMProductInventoryItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/product-inventory-items',
      query: {
        'BOMId': bomId,
        'BOMProductId': bomProductId,
      },
    });
  }

  /**
   * Update Bom Product Inventory Item Quantity
   * SpektrERP.Controllers.BOMController.UpdateBOMProductInventoryItemQuantity (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bomUpdateBomProductInventoryItemQuantity({
requestBody,
}: {
requestBody?: BOMProductInventoryItemQuantityUpdateDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/boms/product-inventory-items/quantity',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete Bom Product Inventory Item
   * SpektrERP.Controllers.BOMController.DeleteBOMProductInventoryItem (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bomDeleteBomProductInventoryItem({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/boms/product-inventory-items/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Get Extrusion Cutlist Items
   * SpektrERP.Controllers.BOMController.GetExtrusionCutlistItems (SpektrERP.HttpApi)
   * @returns BOMExtrusionCutlistItemDto Success
   * @throws ApiError
   */
  public bomGetExtrusionCutlistItems({
bomProductId,
bomId,
}: {
bomProductId?: string,
bomId?: string,
}): CancelablePromise<Array<BOMExtrusionCutlistItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/extrusion-cutlist-items',
      query: {
        'BOMProductId': bomProductId,
        'BOMId': bomId,
      },
    });
  }

  /**
   * Get Product Detail Items
   * SpektrERP.Controllers.BOMController.GetProductDetailItems (SpektrERP.HttpApi)
   * @returns BOMProductDetailDto Success
   * @throws ApiError
   */
  public bomGetProductDetailItems({
bomId,
bomProductId,
}: {
bomId?: string,
bomProductId?: string,
}): CancelablePromise<Array<BOMProductDetailDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/product-detail-items',
      query: {
        'BOMId': bomId,
        'BOMProductId': bomProductId,
      },
    });
  }

  /**
   * Get Cutlist Items
   * SpektrERP.Controllers.BOMController.GetCutlistItems (SpektrERP.HttpApi)
   * @returns BOMCutlistDto Success
   * @throws ApiError
   */
  public bomGetCutlistItems({
bomId,
}: {
bomId?: string,
}): CancelablePromise<Array<BOMCutlistDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/cutlists',
      query: {
        'BOMId': bomId,
      },
    });
  }

  /**
   * Get Products
   * SpektrERP.Controllers.BOMController.GetProducts (SpektrERP.HttpApi)
   * @returns BOMProductShortInfoDto Success
   * @throws ApiError
   */
  public bomGetProducts({
sheetCutlistProductIds,
cutlistIds,
}: {
sheetCutlistProductIds?: Array<string>,
cutlistIds?: Array<string>,
}): CancelablePromise<Array<BOMProductShortInfoDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/products',
      query: {
        'SheetCutlistProductIds': sheetCutlistProductIds,
        'CutlistIds': cutlistIds,
      },
    });
  }

  /**
   * Get Bom Field Items
   * SpektrERP.Controllers.BOMController.GetBOMFieldItems (SpektrERP.HttpApi)
   * @returns BOMFieldItemDto Success
   * @throws ApiError
   */
  public bomGetBomFieldItems({
bomId,
}: {
bomId?: string,
}): CancelablePromise<Array<BOMFieldItemDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/field-items',
      query: {
        'BOMId': bomId,
      },
    });
  }

  /**
   * Upsert Bom Field Items
   * SpektrERP.Controllers.BOMController.UpsertBOMFieldItems (SpektrERP.HttpApi)
   * @returns BOMFieldItemDto Success
   * @throws ApiError
   */
  public bomUpsertBomFieldItems({
id,
requestBody,
}: {
id: string,
requestBody?: Array<BOMFieldItemUpsertDto>,
}): CancelablePromise<Array<BOMFieldItemDto>> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/boms/{id}/field-items',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Upsert Bom With Field Items
   * SpektrERP.Controllers.BOMController.UpsertBOMWithFieldItems (SpektrERP.HttpApi)
   * @returns BOMWithFieldItemsDto Success
   * @throws ApiError
   */
  public bomUpsertBomWithFieldItems({
requestBody,
}: {
requestBody?: BOMWithFieldItemsInputDto,
}): CancelablePromise<BOMWithFieldItemsDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/boms/bom-with-field-items',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Extrusion Cutlists
   * SpektrERP.Controllers.BOMController.GetExtrusionCutlists (SpektrERP.HttpApi)
   * @returns BOMExtrusionCutlistGroupedDto Success
   * @throws ApiError
   */
  public bomGetExtrusionCutlists({
id,
}: {
id: string,
}): CancelablePromise<Array<BOMExtrusionCutlistGroupedDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/{id}/exstruction-cutlists',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.Controllers.BOMController.DeleteAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bomDelete1({
requestBody,
}: {
requestBody?: BOMDeleteInputDto,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/boms/bom-data',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Product Staging Imports
   * SpektrERP.Controllers.BOMController.GetProductStagingImportsAsync (SpektrERP.HttpApi)
   * @returns BOMProductImportDto Success
   * @throws ApiError
   */
  public bomGetProductStagingImports({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<BOMProductImportDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/{projectId}/product-staging-imports',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get Extrusion Staging Imports
   * SpektrERP.Controllers.BOMController.GetExtrusionStagingImportsAsync (SpektrERP.HttpApi)
   * @returns BOMExtrusionImportDto Success
   * @throws ApiError
   */
  public bomGetExtrusionStagingImports({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<BOMExtrusionImportDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/{projectId}/extrusion-staging-imports',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get Detail Staging Imports
   * SpektrERP.Controllers.BOMController.GetDetailStagingImportsAsync (SpektrERP.HttpApi)
   * @returns BOMDetailImportDto Success
   * @throws ApiError
   */
  public bomGetDetailStagingImports({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<BOMDetailImportDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/{projectId}/detail-staging-imports',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Get Inventory Item Staging Imports
   * SpektrERP.Controllers.BOMController.GetInventoryItemStagingImportsAsync (SpektrERP.HttpApi)
   * @returns BOMInventoryItemImportDto Success
   * @throws ApiError
   */
  public bomGetInventoryItemStagingImports({
projectId,
}: {
projectId: string,
}): CancelablePromise<Array<BOMInventoryItemImportDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/{projectId}/inventory-item-staging-imports',
      path: {
        'projectId': projectId,
      },
    });
  }

  /**
   * Validate Issue Bill
   * SpektrERP.Controllers.BOMController.ValidateIssueBillAsync (SpektrERP.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public bomValidateIssueBill({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/boms/issues/{id}/validation',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Issue Bill
   * SpektrERP.Controllers.BOMController.IssueBillAsync (SpektrERP.HttpApi)
   * @returns BOMDto Success
   * @throws ApiError
   */
  public bomIssueBill({
id,
requestBody,
}: {
id: string,
requestBody?: IssueBOMInputDto,
}): CancelablePromise<BOMDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/boms/issues/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
