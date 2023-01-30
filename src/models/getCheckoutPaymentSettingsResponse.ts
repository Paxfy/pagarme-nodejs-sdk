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
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';

/** Checkout Payment Settings Response */
export interface GetCheckoutPaymentSettingsResponse {
  /** Success Url */
  successUrl: string | null;
  /** Payment Url */
  paymentUrl: string | null;
  /** Accepted Payment Methods */
  acceptedPaymentMethods: string[] | null;
  /** Status */
  status: string | null;
  /** Customer */
  customer?: GetCustomerResponse | null;
  /** Payment amount */
  amount?: number | null;
  /** Default Payment Method */
  defaultPaymentMethod?: string | null;
  /** Gateway Affiliation Id */
  gatewayAffiliationId?: string | null;
}

export const getCheckoutPaymentSettingsResponseSchema: Schema<GetCheckoutPaymentSettingsResponse> = object(
  {
    successUrl: ['success_url', nullable(string())],
    paymentUrl: ['payment_url', nullable(string())],
    acceptedPaymentMethods: [
      'accepted_payment_methods',
      nullable(array(string())),
    ],
    status: ['status', nullable(string())],
    customer: [
      'customer',
      optional(nullable(lazy(() => getCustomerResponseSchema))),
    ],
    amount: ['amount', optional(nullable(number()))],
    defaultPaymentMethod: [
      'default_payment_method',
      optional(nullable(string())),
    ],
    gatewayAffiliationId: [
      'gateway_affiliation_id',
      optional(nullable(string())),
    ],
  }
);
