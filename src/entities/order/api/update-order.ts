import { useGraphqlApi } from '@entities/api';
import { UpdatePayload, CreateResult } from '@entities/api/types';
import { Order, OrderUpdateInput } from '../types';
import { MaybeRef } from 'vue';

export default function updateOrder(
  payload?: UpdatePayload<OrderUpdateInput>,
  body?: MaybeRef<string>
) {
  return useGraphqlApi('order', false).mutation<
    CreateResult<'order', false, Order>,
    UpdatePayload<OrderUpdateInput>
  >(body ?? '{ id }', 'update', {
    variables: payload,
  });
}
