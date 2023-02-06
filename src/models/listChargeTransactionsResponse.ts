/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  discriminatedGetTransactionResponseSchema,
} from '../models/discriminatedSchemas';
import { array, lazy, nullable, object, optional, Schema } from '../schema';
import { GetTransactionResponse } from './getTransactionResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response object for listing charge transactions */
export interface ListChargeTransactionsResponse {
  /** The charge transactions objects */
  data?: GetTransactionResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listChargeTransactionsResponseSchema: Schema<ListChargeTransactionsResponse> = object(
  {
    data: [
      'data',
      optional(
        nullable(array(lazy(() => discriminatedGetTransactionResponseSchema)))
      ),
    ],
    paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
  }
);