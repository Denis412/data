import { createEntity } from '@entities/api';
import { Order, OrderCreateInput } from '../types';
import { CreatePayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function createOrder(
  payload?: CreatePayload<OrderCreateInput>,
  body?: MaybeRef<string>
) {
  return createEntity<Order, 'order', false, OrderCreateInput>(
    'order',
    false,
    payload,
    body
  );
}
