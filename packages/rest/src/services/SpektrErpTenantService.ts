/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateTimeSettingDto } from '../models/DateTimeSettingDto';
import type { ListResultDtoOfTimeZoneLookupDto } from '../models/ListResultDtoOfTimeZoneLookupDto';
import type { PagedResultDtoOfTenantDto } from '../models/PagedResultDtoOfTenantDto';
import type { TenantCreateDto } from '../models/TenantCreateDto';
import type { TenantDto } from '../models/TenantDto';
import type { TenantImageInputDto } from '../models/TenantImageInputDto';
import type { TenantUpdateDto } from '../models/TenantUpdateDto';
import type { TimingDto } from '../models/TimingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpektrErpTenantService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns TenantDto Success
   * @throws ApiError
   */
  public spektrErpTenantGet({
id,
}: {
id: string,
}): CancelablePromise<TenantDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Update
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.UpdateAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns TenantDto Success
   * @throws ApiError
   */
  public spektrErpTenantUpdate({
id,
requestBody,
}: {
id: string,
requestBody?: TenantUpdateDto,
}): CancelablePromise<TenantDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Delete
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.DeleteAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public spektrErpTenantDelete({
id,
}: {
id: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/multi-tenancy/tenants/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get List
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetListAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns PagedResultDtoOfTenantDto Success
   * @throws ApiError
   */
  public spektrErpTenantGetList({
filter,
sorting,
skipCount,
maxResultCount,
}: {
filter?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<PagedResultDtoOfTenantDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants',
      query: {
        'Filter': filter,
        'Sorting': sorting,
        'SkipCount': skipCount,
        'MaxResultCount': maxResultCount,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Create
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.CreateAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns TenantDto Success
   * @throws ApiError
   */
  public spektrErpTenantCreate({
requestBody,
}: {
requestBody?: TenantCreateDto,
}): CancelablePromise<TenantDto> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/multi-tenancy/tenants',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Default Connection String
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetDefaultConnectionStringAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetDefaultConnectionString({
id,
}: {
id: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/{id}/default-connection-string',
      path: {
        'id': id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Time Zone Lookups
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetTimeZoneLookups (SpektrERP.TenantManagement.HttpApi)
   * @returns ListResultDtoOfTimeZoneLookupDto Success
   * @throws ApiError
   */
  public spektrErpTenantGetTimeZoneLookups(): CancelablePromise<ListResultDtoOfTimeZoneLookupDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/time-zone-lookups',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Background Image
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetBackgroundImageAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantSetBackgroundImage({
tenantName,
requestBody,
}: {
tenantName: string,
requestBody?: TenantImageInputDto,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/background-image/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Background Image
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetBackgroundImageAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetBackgroundImage({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/background-image/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Logo Image
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetLogoImageAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantSetLogoImage({
tenantName,
requestBody,
}: {
tenantName: string,
requestBody?: TenantImageInputDto,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/logo-image/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Logo Image
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetLogoImageAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetLogoImage({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/logo-image/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Favicon Image
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetFaviconImageAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantSetFaviconImage({
tenantName,
requestBody,
}: {
tenantName: string,
requestBody?: TenantImageInputDto,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/favicon/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Favicon Image
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetFaviconImageAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetFaviconImage({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/favicon/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Date Time Setting
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetDateTimeSettingAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns DateTimeSettingDto Success
   * @throws ApiError
   */
  public spektrErpTenantSetDateTimeSetting({
tenantName,
requestBody,
}: {
tenantName: string,
requestBody?: DateTimeSettingDto,
}): CancelablePromise<DateTimeSettingDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/date-time-setting/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Date Time Setting
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetDateTimeSettingAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns DateTimeSettingDto Success
   * @throws ApiError
   */
  public spektrErpTenantGetDateTimeSetting({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<DateTimeSettingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/date-time-setting/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Timezone
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetTimezoneAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns TimingDto Success
   * @throws ApiError
   */
  public spektrErpTenantSetTimezone({
tenantName,
requestBody,
}: {
tenantName: string,
requestBody?: string,
}): CancelablePromise<TimingDto> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/timezone/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Timezone
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetTimezoneAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns TimingDto Success
   * @throws ApiError
   */
  public spektrErpTenantGetTimezone({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<TimingDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/timezone/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Fleming Db
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetFlemingDbAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetFlemingDb({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/fleming-db/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Po Number Format
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetPONumberFormatAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetPoNumberFormat({
tenantName,
}: {
tenantName: string,
}): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/po-format/{tenantName}',
      path: {
        'tenantName': tenantName,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Po Number Format
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetPONumberFormatAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetPoNumberFormat1(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/po-format',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Po Number Format
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetPONumberFormatAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public spektrErpTenantSetPoNumberFormat({
poNumberFormat,
}: {
poNumberFormat?: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/po-format',
      query: {
        'poNumberFormat': poNumberFormat,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Get Client Domain
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.GetClientDomainAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns string Success
   * @throws ApiError
   */
  public spektrErpTenantGetClientDomain(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/multi-tenancy/tenants/client-domain',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

  /**
   * Set Client Domain
   * SpektrERP.TenantManagement.HttpApi.SpektrERPTenantController.SetClientDomainAsync (SpektrERP.TenantManagement.HttpApi)
   * @returns any Success
   * @throws ApiError
   */
  public spektrErpTenantSetClientDomain({
clientDomain,
}: {
clientDomain?: string,
}): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/multi-tenancy/tenants/client-domain',
      query: {
        'clientDomain': clientDomain,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }

}
