/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  CreateCardPaymentContactlessRequest,
  createCardPaymentContactlessRequestSchema,
} from './createCardPaymentContactlessRequest';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from './createCardRequest';
import {
  CreatePaymentAuthenticationRequest,
  createPaymentAuthenticationRequestSchema,
} from './createPaymentAuthenticationRequest';

/** The settings for creating a debit card payment */
export interface CreateDebitCardPaymentRequest {
  /** The text that will be shown on the debit card's statement */
  statementDescriptor?: string;
  /** Debit card data */
  card?: CreateCardRequest;
  /** The debit card id */
  cardId?: string;
  /** The debit card token */
  cardToken?: string;
  /** Indicates a recurrence */
  recurrence?: boolean;
  /** The payment authentication request */
  authentication?: CreatePaymentAuthenticationRequest;
  /** The Debit card payment token request */
  token?: CreateCardPaymentContactlessRequest;
}

export const createDebitCardPaymentRequestSchema: Schema<CreateDebitCardPaymentRequest> = object(
  {
    statementDescriptor: ['statement_descriptor', optional(string())],
    card: ['card', optional(lazy(() => createCardRequestSchema))],
    cardId: ['card_id', optional(string())],
    cardToken: ['card_token', optional(string())],
    recurrence: ['recurrence', optional(boolean())],
    authentication: [
      'authentication',
      optional(lazy(() => createPaymentAuthenticationRequestSchema)),
    ],
    token: [
      'token',
      optional(lazy(() => createCardPaymentContactlessRequestSchema)),
    ],
  }
);
