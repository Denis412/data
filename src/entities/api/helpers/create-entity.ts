/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGraphqlApi } from '@entities/api';
import { CreatePayload, CreateResult } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function createEntity<
  T extends Record<string, any>,
  K extends string,
  S extends boolean,
  I
>(
  typeName: string,
  system: boolean,
  payload?: CreatePayload<I>,
  body?: MaybeRef<string>
) {
  return useGraphqlApi(typeName, system).mutation<
    CreateResult<K, S, T>,
    CreatePayload<I>
  >(body ?? '{ id }', 'create', {
    variables: payload,
  });
}
