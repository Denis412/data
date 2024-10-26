/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGraphqlApi } from '@entities/api';
import { GetPayload, GetResult } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function getEntity<
  T extends Record<string, any>,
  K extends string,
  S extends boolean
>(
  typeName: string,
  system: boolean,
  payload?: GetPayload,
  body?: MaybeRef<string>
) {
  return useGraphqlApi(typeName, system).query<GetResult<K, S, T>, GetPayload>(
    body ?? '{ id }',
    'get',
    payload
  );
}
