import { createEntity } from '@entities/api';
import { Order, OrderCreateInput } from '../types';
import { CreatePayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function createOrder(
  payload?: CreatePayload<OrderCreateInput>,
  body?: MaybeRef<string>
) {
  return createEntity<Order, 'order', OrderCreateInput>('order', payload, body);
}
