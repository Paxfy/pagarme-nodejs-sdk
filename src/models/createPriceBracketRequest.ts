/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

/** Request for creating a price bracket */
export interface CreatePriceBracketRequest {
  /** Start quantity */
  startQuantity: number;
  /** Price */
  price: number;
  /** End quantity */
  endQuantity?: number;
  /** Overage price */
  overagePrice?: number;
}

export const createPriceBracketRequestSchema: Schema<CreatePriceBracketRequest> = object(
  {
    startQuantity: ['start_quantity', number()],
    price: ['price', number()],
    endQuantity: ['end_quantity', optional(number())],
    overagePrice: ['overage_price', optional(number())],
  }
);
