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
import {
  GetPlanItemResponse,
  getPlanItemResponseSchema,
} from './getPlanItemResponse';

/** Response object for getting a plan */
export interface GetPlanResponse {
  id: string | null;
  name: string | null;
  description: string | null;
  url: string | null;
  statementDescriptor: string | null;
  interval: string | null;
  intervalCount: number | null;
  billingType: string | null;
  paymentMethods: string[] | null;
  installments: number[] | null;
  status: string | null;
  currency: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  items: GetPlanItemResponse[] | null;
  billingDays: number[] | null;
  shippable: boolean | null;
  metadata: Record<string, string> | null;
  trialPeriodDays?: number | null;
  minimumPrice?: number | null;
  deletedAt?: string | null;
}

export const getPlanResponseSchema: Schema<GetPlanResponse> = object({
  id: ['id', nullable(string())],
  name: ['name', nullable(string())],
  description: ['description', nullable(string())],
  url: ['url', nullable(string())],
  statementDescriptor: ['statement_descriptor', nullable(string())],
  interval: ['interval', nullable(string())],
  intervalCount: ['interval_count', nullable(number())],
  billingType: ['billing_type', nullable(string())],
  paymentMethods: ['payment_methods', nullable(array(string()))],
  installments: ['installments', nullable(array(number()))],
  status: ['status', nullable(string())],
  currency: ['currency', nullable(string())],
  createdAt: ['created_at', nullable(string())],
  updatedAt: ['updated_at', nullable(string())],
  items: ['items', nullable(array(lazy(() => getPlanItemResponseSchema)))],
  billingDays: ['billing_days', nullable(array(number()))],
  shippable: ['shippable', nullable(boolean())],
  metadata: ['metadata', nullable(dict(string()))],
  trialPeriodDays: ['trial_period_days', optional(nullable(number()))],
  minimumPrice: ['minimum_price', optional(nullable(number()))],
  deletedAt: ['deleted_at', optional(nullable(string()))],
});
