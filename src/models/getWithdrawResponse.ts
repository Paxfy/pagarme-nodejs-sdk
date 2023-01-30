/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetWithdrawSourceResponse,
  getWithdrawSourceResponseSchema,
} from './getWithdrawSourceResponse';
import {
  GetWithdrawTargetResponse,
  getWithdrawTargetResponseSchema,
} from './getWithdrawTargetResponse';

export interface GetWithdrawResponse {
  id: string | null;
  gatewayId: string | null;
  amount: number | null;
  status: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  metadata?: string[] | null;
  fee?: number | null;
  fundingDate?: string | null;
  fundingEstimatedDate?: string | null;
  type: string | null;
  source: GetWithdrawSourceResponse | null;
  target: GetWithdrawTargetResponse | null;
}

export const getWithdrawResponseSchema: Schema<GetWithdrawResponse> = object({
  id: ['id', nullable(string())],
  gatewayId: ['gateway_id', nullable(string())],
  amount: ['amount', nullable(number())],
  status: ['status', nullable(string())],
  createdAt: ['created_at', nullable(string())],
  updatedAt: ['updated_at', nullable(string())],
  metadata: ['metadata', optional(nullable(array(string())))],
  fee: ['fee', optional(nullable(number()))],
  fundingDate: ['funding_date', optional(nullable(string()))],
  fundingEstimatedDate: [
    'funding_estimated_date',
    optional(nullable(string())),
  ],
  type: ['type', nullable(string())],
  source: ['source', nullable(lazy(() => getWithdrawSourceResponseSchema))],
  target: ['target', nullable(lazy(() => getWithdrawTargetResponseSchema))],
});
