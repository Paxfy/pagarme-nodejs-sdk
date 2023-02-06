/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  GetTransactionReportFileResponse,
  getTransactionReportFileResponseSchema,
} from './getTransactionReportFileResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response object for listing of transactions files */
export interface ListTransactionsFilesResponse {
  data?: GetTransactionReportFileResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listTransactionsFilesResponseSchema: Schema<ListTransactionsFilesResponse> = object(
  {
    data: [
      'data',
      optional(
        nullable(array(lazy(() => getTransactionReportFileResponseSchema)))
      ),
    ],
    paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
  }
);