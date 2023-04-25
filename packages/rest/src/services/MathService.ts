/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvalResultDto } from '../models/EvalResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MathService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Eval
   * SpektrERP.Controllers.MathController.Eval (SpektrERP.HttpApi)
   * @returns EvalResultDto Success
   * @throws ApiError
   */
  public mathEval({
expression,
}: {
expression?: string,
}): CancelablePromise<EvalResultDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/math/eval',
      query: {
        'expression': expression,
      },
    });
  }

}
