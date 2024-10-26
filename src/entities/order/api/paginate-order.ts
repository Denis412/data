import { paginateEntity } from '@entities/api';
import { Order } from '../types';
import { PaginatorPayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function paginateOrder(
  payload?: PaginatorPayload,
  body?: MaybeRef<string>
) {
  return paginateEntity<Order, 'order', false>('order', false, payload, body);
}
