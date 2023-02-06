/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetSubscriptionItemResponse,
  getSubscriptionItemResponseSchema,
} from './getSubscriptionItemResponse';
import {
  GetSubscriptionResponse,
  getSubscriptionResponseSchema,
} from './getSubscriptionResponse';

/** Response object for getting a discount */
export interface GetDiscountResponse {
  id?: string | null;
  value?: number | null;
  discountType?: string | null;
  status?: string | null;
  createdAt?: string | null;
  cycles?: number | null;
  deletedAt?: string | null;
  description?: string | null;
  subscription?: GetSubscriptionResponse | null;
  /** The subscription item */
  subscriptionItem?: GetSubscriptionItemResponse | null;
}

export const getDiscountResponseSchema: Schema<GetDiscountResponse> = object({
  id: ['id', optional(nullable(string()))],
  value: ['value', optional(nullable(number()))],
  discountType: ['discount_type', optional(nullable(string()))],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  cycles: ['cycles', optional(nullable(number()))],
  deletedAt: ['deleted_at', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  subscription: [
    'subscription',
    optional(nullable(lazy(() => getSubscriptionResponseSchema))),
  ],
  subscriptionItem: [
    'subscription_item',
    optional(nullable(lazy(() => getSubscriptionItemResponseSchema))),
  ],
});