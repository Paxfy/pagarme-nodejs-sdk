/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import { GetUsageResponse, getUsageResponseSchema } from './getUsageResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response model for listing the usages from a subscription item */
export interface ListUsagesResponse {
  /** The usage objects */
  data?: GetUsageResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listUsagesResponseSchema: Schema<ListUsagesResponse> = object({
  data: ['data', optional(nullable(array(lazy(() => getUsageResponseSchema))))],
  paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
});