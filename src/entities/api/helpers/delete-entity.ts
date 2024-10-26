/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGraphqlApi } from '@entities/api';
import { DeleteResult, GetPayload } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function deleteEntity<K extends string, S extends boolean>(
  typeName: string,
  system: boolean,
  payload?: GetPayload,
  body?: MaybeRef<string>
) {
  return useGraphqlApi(typeName, system).mutation<
    DeleteResult<K, S>,
    GetPayload
  >(body ?? '{ id }', 'delete', { variables: payload });
}
