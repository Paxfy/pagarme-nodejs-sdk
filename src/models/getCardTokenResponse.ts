/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

/** Card token data */
export interface GetCardTokenResponse {
  lastFourDigits: string | null;
  holderName: string | null;
  holderDocument: string | null;
  expMonth: string | null;
  expYear: string | null;
  brand: string | null;
  type: string | null;
  label: string | null;
}

export const getCardTokenResponseSchema: Schema<GetCardTokenResponse> = object({
  lastFourDigits: ['last_four_digits', nullable(string())],
  holderName: ['holder_name', nullable(string())],
  holderDocument: ['holder_document', nullable(string())],
  expMonth: ['exp_month', nullable(string())],
  expYear: ['exp_year', nullable(string())],
  brand: ['brand', nullable(string())],
  type: ['type', nullable(string())],
  label: ['label', nullable(string())],
});
