/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

export interface GetTransferTargetResponse {
  targetId: string | null;
  type: string | null;
}

export const getTransferTargetResponseSchema: Schema<GetTransferTargetResponse> = object(
  {
    targetId: ['target_id', nullable(string())],
    type: ['type', nullable(string())],
  }
);
