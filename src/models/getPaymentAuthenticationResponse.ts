/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, Schema, string } from '../schema';
import {
  GetThreeDSecureResponse,
  getThreeDSecureResponseSchema,
} from './getThreeDSecureResponse';

/** Payment Authentication response */
export interface GetPaymentAuthenticationResponse {
  type: string | null;
  /** 3D-S payment authentication response */
  threedSecure: GetThreeDSecureResponse | null;
}

export const getPaymentAuthenticationResponseSchema: Schema<GetPaymentAuthenticationResponse> = object(
  {
    type: ['type', nullable(string())],
    threedSecure: [
      'threed_secure',
      nullable(lazy(() => getThreeDSecureResponseSchema)),
    ],
  }
);
