/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGraphqlApi } from '@entities/api';
import { CreatePayload, CreateResult } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function createEntity<
  T extends Record<string, any>,
  K extends string,
  I
>(typeName: string, payload?: CreatePayload<I>, body?: MaybeRef<string>) {
  return useGraphqlApi(typeName, false).mutation<
    CreateResult<K, false, T>,
    CreatePayload<I>
  >(body ?? '{ id }', 'create', {
    variables: payload,
  });
}
