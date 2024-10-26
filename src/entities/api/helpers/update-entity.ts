/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGraphqlApi } from '@entities/api';
import { UpdatePayload, UpdateResult } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function updateEntity<
  T extends Record<string, any>,
  K extends string,
  S extends boolean,
  I
>(
  typeName: string,
  system: boolean,
  payload?: UpdatePayload<I>,
  body?: MaybeRef<string>
) {
  return useGraphqlApi(typeName, system).mutation<
    UpdateResult<K, S, T>,
    UpdatePayload<I>
  >(body ?? '{ id }', 'update', {
    variables: payload,
  });
}
