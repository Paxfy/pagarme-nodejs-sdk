/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GetPayableResponse,
  getPayableResponseSchema,
} from '../models/getPayableResponse';
import {
  ListPayablesResponse,
  listPayablesResponseSchema,
} from '../models/listPayablesResponse';
import { bigint, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PayablesController extends BaseController {
  /**
   * @param type
   * @param splitId
   * @param bulkAnticipationId
   * @param installment
   * @param status
   * @param recipientId
   * @param amount
   * @param chargeId
   * @param paymentDateUntil
   * @param paymentDateSince
   * @param updatedUntil
   * @param updatedSince
   * @param createdUntil
   * @param createdSince
   * @param liquidationArrangementId
   * @param page
   * @param size
   * @param gatewayId
   * @return Response from the API call
   */
  async getPayables(
    type?: string,
    splitId?: string,
    bulkAnticipationId?: string,
    installment?: number,
    status?: string,
    recipientId?: string,
    amount?: number,
    chargeId?: string,
    paymentDateUntil?: string,
    paymentDateSince?: string,
    updatedUntil?: string,
    updatedSince?: string,
    createdUntil?: string,
    createdSince?: string,
    liquidationArrangementId?: string,
    page?: number,
    size?: number,
    gatewayId?: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListPayablesResponse>> {
    const req = this.createRequest('GET', '/payables');
    const mapped = req.prepareArgs({
      type: [type, optional(string())],
      splitId: [splitId, optional(string())],
      bulkAnticipationId: [bulkAnticipationId, optional(string())],
      installment: [installment, optional(number())],
      status: [status, optional(string())],
      recipientId: [recipientId, optional(string())],
      amount: [amount, optional(number())],
      chargeId: [chargeId, optional(string())],
      paymentDateUntil: [paymentDateUntil, optional(string())],
      paymentDateSince: [paymentDateSince, optional(string())],
      updatedUntil: [updatedUntil, optional(string())],
      updatedSince: [updatedSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
      createdSince: [createdSince, optional(string())],
      liquidationArrangementId: [liquidationArrangementId, optional(string())],
      page: [page, optional(number())],
      size: [size, optional(number())],
      gatewayId: [gatewayId, optional(bigint())],
    });
    req.query('type', mapped.type);
    req.query('split_id', mapped.splitId);
    req.query('bulk_anticipation_id', mapped.bulkAnticipationId);
    req.query('installment', mapped.installment);
    req.query('status', mapped.status);
    req.query('recipient_id', mapped.recipientId);
    req.query('amount', mapped.amount);
    req.query('charge_id', mapped.chargeId);
    req.query('payment_date_until', mapped.paymentDateUntil);
    req.query('payment_date_since', mapped.paymentDateSince);
    req.query('updated_until', mapped.updatedUntil);
    req.query('updated_since', mapped.updatedSince);
    req.query('created_until', mapped.createdUntil);
    req.query('created_since', mapped.createdSince);
    req.query('liquidation_arrangement_id', mapped.liquidationArrangementId);
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('gateway_id', mapped.gatewayId);
    return req.callAsJson(listPayablesResponseSchema, requestOptions);
  }

  /**
   * @param id
   * @return Response from the API call
   */
  async getPayableById(
    id: bigint,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPayableResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, bigint()] });
    req.appendTemplatePath`/payables/${mapped.id}`;
    return req.callAsJson(getPayableResponseSchema, requestOptions);
  }
}
