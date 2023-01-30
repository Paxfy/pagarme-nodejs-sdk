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
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { GetCardResponse, getCardResponseSchema } from './getCardResponse';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';
import {
  GetDiscountResponse,
  getDiscountResponseSchema,
} from './getDiscountResponse';
import {
  GetIncrementResponse,
  getIncrementResponseSchema,
} from './getIncrementResponse';
import {
  GetPeriodResponse,
  getPeriodResponseSchema,
} from './getPeriodResponse';
import { GetSetupResponse, getSetupResponseSchema } from './getSetupResponse';
import {
  GetSubscriptionBoletoResponse,
  getSubscriptionBoletoResponseSchema,
} from './getSubscriptionBoletoResponse';
import {
  GetSubscriptionItemResponse,
  getSubscriptionItemResponseSchema,
} from './getSubscriptionItemResponse';
import {
  GetSubscriptionSplitResponse,
  getSubscriptionSplitResponseSchema,
} from './getSubscriptionSplitResponse';

export interface GetSubscriptionResponse {
  id: string | null;
  code: string | null;
  startAt: string | null;
  interval: string | null;
  intervalCount: number | null;
  billingType: string | null;
  currentCycle?: GetPeriodResponse | null;
  paymentMethod: string | null;
  currency: string | null;
  installments: number | null;
  status: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  customer?: GetCustomerResponse | null;
  card: GetCardResponse | null;
  items: GetSubscriptionItemResponse[] | null;
  statementDescriptor: string | null;
  metadata: Record<string, string> | null;
  setup: GetSetupResponse | null;
  /** Affiliation Code */
  gatewayAffiliationId: string | null;
  nextBillingAt?: string | null;
  billingDay?: number | null;
  minimumPrice?: number | null;
  canceledAt?: string | null;
  /** Subscription discounts */
  discounts?: GetDiscountResponse[] | null;
  /** Subscription increments */
  increments: GetIncrementResponse[] | null;
  /** Days until boleto expires */
  boletoDueDays?: number | null;
  /** Subscription's split response */
  split: GetSubscriptionSplitResponse | null;
  boleto?: GetSubscriptionBoletoResponse | null;
  manualBilling: boolean | null;
}

export const getSubscriptionResponseSchema: Schema<GetSubscriptionResponse> = object(
  {
    id: ['id', nullable(string())],
    code: ['code', nullable(string())],
    startAt: ['start_at', nullable(string())],
    interval: ['interval', nullable(string())],
    intervalCount: ['interval_count', nullable(number())],
    billingType: ['billing_type', nullable(string())],
    currentCycle: [
      'current_cycle',
      optional(nullable(lazy(() => getPeriodResponseSchema))),
    ],
    paymentMethod: ['payment_method', nullable(string())],
    currency: ['currency', nullable(string())],
    installments: ['installments', nullable(number())],
    status: ['status', nullable(string())],
    createdAt: ['created_at', nullable(string())],
    updatedAt: ['updated_at', nullable(string())],
    customer: [
      'customer',
      optional(nullable(lazy(() => getCustomerResponseSchema))),
    ],
    card: ['card', nullable(lazy(() => getCardResponseSchema))],
    items: [
      'items',
      nullable(array(lazy(() => getSubscriptionItemResponseSchema))),
    ],
    statementDescriptor: ['statement_descriptor', nullable(string())],
    metadata: ['metadata', nullable(dict(string()))],
    setup: ['setup', nullable(lazy(() => getSetupResponseSchema))],
    gatewayAffiliationId: ['gateway_affiliation_id', nullable(string())],
    nextBillingAt: ['next_billing_at', optional(nullable(string()))],
    billingDay: ['billing_day', optional(nullable(number()))],
    minimumPrice: ['minimum_price', optional(nullable(number()))],
    canceledAt: ['canceled_at', optional(nullable(string()))],
    discounts: [
      'discounts',
      optional(nullable(array(lazy(() => getDiscountResponseSchema)))),
    ],
    increments: [
      'increments',
      nullable(array(lazy(() => getIncrementResponseSchema))),
    ],
    boletoDueDays: ['boleto_due_days', optional(nullable(number()))],
    split: ['split', nullable(lazy(() => getSubscriptionSplitResponseSchema))],
    boleto: [
      'boleto',
      optional(nullable(lazy(() => getSubscriptionBoletoResponseSchema))),
    ],
    manualBilling: ['manual_billing', nullable(boolean())],
  }
);
