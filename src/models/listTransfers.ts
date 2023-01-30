/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { GetTransfer, getTransferSchema } from './getTransfer';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

export interface ListTransfers {
  /** The Increments response */
  data: GetTransfer[];
  /** Paging object */
  paging: PagingResponse;
}

export const listTransfersSchema: Schema<ListTransfers> = object({
  data: ['data', array(lazy(() => getTransferSchema))],
  paging: ['paging', lazy(() => pagingResponseSchema)],
});
