import { updateEntity } from '@entities/api';
import { Order, OrderUpdateInput } from '../types';
import { UpdatePayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function updateOrder(
  payload?: UpdatePayload<OrderUpdateInput>,
  body?: MaybeRef<string>
) {
  return updateEntity<Order, 'order', false, OrderUpdateInput>(
    'order',
    false,
    payload,
    body
  );
}
