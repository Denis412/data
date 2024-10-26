import { getEntity } from '@entities/api';
import { Order } from '../types';
import { GetPayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function getOrder(
  payload?: GetPayload,
  body?: MaybeRef<string>
) {
  return getEntity<Order, 'order', false>('order', false, payload, body);
}
