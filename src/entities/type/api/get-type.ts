import { getEntity } from '@entities/api';
import { Type } from '../types';
import { GetPayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function getType(payload?: GetPayload, body?: MaybeRef<string>) {
  return getEntity<Type, 'type', true>('type', true, payload, body);
}
