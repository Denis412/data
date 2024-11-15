import { paginateEntity } from '@entities/api';
import { Type } from '../types';
import { PaginatorPayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function paginateType(
  payload?: PaginatorPayload,
  body?: MaybeRef<string>
) {
  return paginateEntity<Type, 'types', true>('types', true, payload, body);
}
