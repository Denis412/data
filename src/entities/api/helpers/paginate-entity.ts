/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGraphqlApi } from '@entities/api';
import { PaginatorPayload, PaginatorResult } from '@entities/api/types';
import { MaybeRef } from 'vue';

export default function paginateEntity<
  T extends Record<string, any>,
  K extends string,
  S extends boolean
>(
  typeName: string,
  system: boolean,
  payload?: PaginatorPayload,
  body?: MaybeRef<string>
) {
  return useGraphqlApi(typeName, system).query<
    PaginatorResult<K, S, T>,
    PaginatorPayload
  >(body ?? '{ id }', 'paginate', payload);
}
