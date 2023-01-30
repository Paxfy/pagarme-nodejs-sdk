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
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetChargeResponse,
  getChargeResponseSchema,
} from './getChargeResponse';
import {
  GetCheckoutPaymentResponse,
  getCheckoutPaymentResponseSchema,
} from './getCheckoutPaymentResponse';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';
import {
  GetDeviceResponse,
  getDeviceResponseSchema,
} from './getDeviceResponse';
import {
  GetLocationResponse,
  getLocationResponseSchema,
} from './getLocationResponse';
import {
  GetOrderItemResponse,
  getOrderItemResponseSchema,
} from './getOrderItemResponse';
import {
  GetShippingResponse,
  getShippingResponseSchema,
} from './getShippingResponse';

/** Response object for getting an Order */
export interface GetOrderResponse {
  id: string | null;
  code: string | null;
  currency: string | null;
  items: GetOrderItemResponse[] | null;
  customer?: GetCustomerResponse | null;
  status: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  charges: GetChargeResponse[] | null;
  invoiceUrl: string | null;
  shipping: GetShippingResponse | null;
  metadata: Record<string, string> | null;
  /** Checkout Payment Settings Response */
  checkouts?: GetCheckoutPaymentResponse[] | null;
  /** Ip address */
  ip?: string | null;
  /** Session id */
  sessionId?: string | null;
  /** Location */
  location?: GetLocationResponse | null;
  /** Device's informations */
  device?: GetDeviceResponse | null;
  /** Indicates whether the order is closed */
  closed: boolean | null;
}

export const getOrderResponseSchema: Schema<GetOrderResponse> = object({
  id: ['id', nullable(string())],
  code: ['code', nullable(string())],
  currency: ['currency', nullable(string())],
  items: ['items', nullable(array(lazy(() => getOrderItemResponseSchema)))],
  customer: [
    'customer',
    optional(nullable(lazy(() => getCustomerResponseSchema))),
  ],
  status: ['status', nullable(string())],
  createdAt: ['created_at', nullable(string())],
  updatedAt: ['updated_at', nullable(string())],
  charges: ['charges', nullable(array(lazy(() => getChargeResponseSchema)))],
  invoiceUrl: ['invoice_url', nullable(string())],
  shipping: ['shipping', nullable(lazy(() => getShippingResponseSchema))],
  metadata: ['metadata', nullable(dict(string()))],
  checkouts: [
    'checkouts',
    optional(nullable(array(lazy(() => getCheckoutPaymentResponseSchema)))),
  ],
  ip: ['ip', optional(nullable(string()))],
  sessionId: ['session_id', optional(nullable(string()))],
  location: [
    'location',
    optional(nullable(lazy(() => getLocationResponseSchema))),
  ],
  device: ['device', optional(nullable(lazy(() => getDeviceResponseSchema)))],
  closed: ['closed', nullable(boolean())],
});
