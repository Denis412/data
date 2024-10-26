import { deleteEntity } from '@entities/api';
import { GetPayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function deleteOrder(
  payload?: GetPayload,
  body?: MaybeRef<string>
) {
  return deleteEntity<'order', false>('order', false, payload, body);
}
