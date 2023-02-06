/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  literal,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { getAntifraudResponseSchema } from './getAntifraudResponse';
import { GetCardResponse, getCardResponseSchema } from './getCardResponse';
import { getFineResponseSchema } from './getFineResponse';
import { getGatewayResponseResponseSchema } from './getGatewayResponseResponse';
import { getInterestResponseSchema } from './getInterestResponse';
import { getSplitResponseSchema } from './getSplitResponse';
import { GetTransactionResponse } from './getTransactionResponse';

/** Response object for getting a credit card transaction */
export interface GetCreditCardTransactionResponse extends GetTransactionResponse {
  /** Text that will appear on the credit card's statement */
  statementDescriptor?: string | null;
  /** Acquirer name */
  acquirerName?: string;
  /** Aquirer affiliation code */
  acquirerAffiliationCode?: string | null;
  /** Acquirer TID */
  acquirerTid?: string;
  /** Acquirer NSU */
  acquirerNsu?: string;
  /** Acquirer authorization code */
  acquirerAuthCode?: string | null;
  /** Operation type */
  operationType?: string | null;
  /** Card data */
  card?: GetCardResponse | null;
  /** Acquirer message */
  acquirerMessage?: string | null;
  /** Acquirer Return Code */
  acquirerReturnCode?: string | null;
  /** Number of installments */
  installments?: number | null;
  /** 3D-S authentication Url */
  threedAuthenticationUrl?: string | null;
}

export const getCreditCardTransactionResponseSchema: Schema<any> = object({
  statementDescriptor: ['statement_descriptor', optional(nullable(string()))],
  acquirerName: ['acquirer_name', optional(string())],
  acquirerAffiliationCode: [
    'acquirer_affiliation_code',
    optional(nullable(string())),
  ],
  acquirerTid: ['acquirer_tid', optional(string())],
  acquirerNsu: ['acquirer_nsu', optional(string())],
  acquirerAuthCode: ['acquirer_auth_code', optional(nullable(string()))],
  operationType: ['operation_type', optional(nullable(string()))],
  card: ['card', optional(nullable(lazy(() => getCardResponseSchema)))],
  acquirerMessage: ['acquirer_message', optional(nullable(string()))],
  acquirerReturnCode: ['acquirer_return_code', optional(nullable(string()))],
  installments: ['installments', optional(nullable(number()))],
  threedAuthenticationUrl: [
    'threed_authentication_url',
    optional(nullable(string())),
  ],
  gatewayId: ['gateway_id', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  status: ['status', optional(nullable(string()))],
  success: ['success', optional(nullable(boolean()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
  attemptCount: ['attempt_count', optional(nullable(number()))],
  maxAttempts: ['max_attempts', optional(nullable(number()))],
  splits: [
    'splits',
    optional(nullable(array(lazy(() => getSplitResponseSchema)))),
  ],
  nextAttempt: ['next_attempt', optional(nullable(string()))],
  id: ['id', optional(nullable(string()))],
  gatewayResponse: [
    'gateway_response',
    optional(nullable(lazy(() => getGatewayResponseResponseSchema))),
  ],
  antifraudResponse: [
    'antifraud_response',
    optional(nullable(lazy(() => getAntifraudResponseSchema))),
  ],
  metadata: ['metadata', optional(nullable(dict(string())))],
  split: [
    'split',
    optional(nullable(array(lazy(() => getSplitResponseSchema)))),
  ],
  interest: [
    'interest',
    optional(nullable(lazy(() => getInterestResponseSchema))),
  ],
  fine: ['fine', optional(nullable(lazy(() => getFineResponseSchema)))],
  maxDaysToPayPastDue: [
    'max_days_to_pay_past_due',
    optional(nullable(number())),
  ],
  transactionType: ['transaction_type', optional(literal('credit_card'))],
});