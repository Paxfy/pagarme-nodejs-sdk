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
import {
  GetBillingAddressResponse,
  getBillingAddressResponseSchema,
} from './getBillingAddressResponse';
import { getFineResponseSchema } from './getFineResponse';
import { getGatewayResponseResponseSchema } from './getGatewayResponseResponse';
import { getInterestResponseSchema } from './getInterestResponse';
import { getSplitResponseSchema } from './getSplitResponse';
import { GetTransactionResponse } from './getTransactionResponse';

/** Response object for getting a boleto transaction */
export interface GetBoletoTransactionResponse extends GetTransactionResponse {
  url?: string | null;
  barcode?: string | null;
  nossoNumero?: string | null;
  bank?: string | null;
  documentNumber?: string | null;
  instructions?: string | null;
  billingAddress?: GetBillingAddressResponse | null;
  dueAt?: string | null;
  qrCode?: string | null;
  line?: string | null;
  pdfPassword?: string | null;
  pdf?: string | null;
  paidAt?: string | null;
  paidAmount?: string | null;
  type?: string | null;
  creditAt?: string | null;
  /** Soft Descriptor */
  statementDescriptor?: string | null;
}

export const getBoletoTransactionResponseSchema: Schema<any> = object({
  url: ['url', optional(nullable(string()))],
  barcode: ['barcode', optional(nullable(string()))],
  nossoNumero: ['nosso_numero', optional(nullable(string()))],
  bank: ['bank', optional(nullable(string()))],
  documentNumber: ['document_number', optional(nullable(string()))],
  instructions: ['instructions', optional(nullable(string()))],
  billingAddress: [
    'billing_address',
    optional(nullable(lazy(() => getBillingAddressResponseSchema))),
  ],
  dueAt: ['due_at', optional(nullable(string()))],
  qrCode: ['qr_code', optional(nullable(string()))],
  line: ['line', optional(nullable(string()))],
  pdfPassword: ['pdf_password', optional(nullable(string()))],
  pdf: ['pdf', optional(nullable(string()))],
  paidAt: ['paid_at', optional(nullable(string()))],
  paidAmount: ['paid_amount', optional(nullable(number()))],
  type: ['type', optional(nullable(string()))],
  creditAt: ['credit_at', optional(nullable(string()))],
  statementDescriptor: ['statement_descriptor', optional(nullable(string()))],
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
  transactionType: ['transaction_type', optional(literal('boleto'))],
});
