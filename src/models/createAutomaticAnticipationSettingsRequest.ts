/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, number, object, Schema, string } from '../schema';

export interface CreateAutomaticAnticipationSettingsRequest {
  enabled: boolean;
  type: string;
  volumePercentage: number;
  delay: number;
  days: number[];
}

export const createAutomaticAnticipationSettingsRequestSchema: Schema<CreateAutomaticAnticipationSettingsRequest> = object(
  {
    enabled: ['enabled', boolean()],
    type: ['type', string()],
    volumePercentage: ['volume_percentage', number()],
    delay: ['delay', number()],
    days: ['days', array(number())],
  }
);
