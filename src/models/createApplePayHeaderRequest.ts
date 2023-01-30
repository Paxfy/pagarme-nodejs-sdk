/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The ApplePay header request */
export interface CreateApplePayHeaderRequest {
  /** SHA–256 hash, Base64 string codified */
  publicKeyHash?: string;
  /** X.509 encoded key bytes, Base64 encoded as a string */
  ephemeralPublicKey: string;
  /** Transaction identifier, generated on Device */
  transactionId?: string;
}

export const createApplePayHeaderRequestSchema: Schema<CreateApplePayHeaderRequest> = object(
  {
    publicKeyHash: ['public_key_hash', optional(string())],
    ephemeralPublicKey: ['ephemeral_public_key', string()],
    transactionId: ['transaction_id', optional(string())],
  }
);
