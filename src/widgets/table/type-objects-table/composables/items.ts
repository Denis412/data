/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  paginateEntity,
  PaginatorInfo,
  PaginatorPayload,
  PaginatorResult,
} from '@entities/api';
import { Type } from '@entities/type/types';
import { DeepPartial } from '@shared/types';
import { UseQueryReturn } from '@vue/apollo-composable';
import { computed, MaybeRef, ref, watch } from 'vue';

export default function useItems(
  type: MaybeRef<DeepPartial<Type>> | undefined,
  body: MaybeRef<string>
) {
  const _items = ref<any[]>([]);
  const _paginatorPayload = ref<PaginatorPayload>({
    page: 1,
    perPage: 50,
  });
  const _paginatorInfo = ref<PaginatorInfo>();

  let itemsQuery:
    | UseQueryReturn<PaginatorResult<'', false, any>, PaginatorPayload>
    | undefined;

  watch(
    [type, body],
    ([type, body]) => {
      if (!type || !body) return;
      const typeName = (type as DeepPartial<Type>).name as string;

      itemsQuery = paginateEntity(
        typeName as any,
        false,
        _paginatorPayload as any,
        (body as string) ?? '{ id }'
      );

      itemsQuery?.onResult((itemsResult) => {
        if (!itemsResult.data) return;

        const itemsData = itemsResult.data as any;
        const paginateResult =
          itemsData[typeName] ?? itemsData[`paginate_${typeName}`];

        _items.value = paginateResult.data;
        _paginatorInfo.value = paginateResult.paginatorInfo;
      });
    },
    { immediate: true }
  );

  const _loading = computed(() => itemsQuery?.loading.value ?? false);
  const _refetching = ref(false);

  async function refetch(variables?: PaginatorPayload) {
    _refetching.value = true;
    await itemsQuery?.refetch(variables);
    _refetching.value = false;
  }

  return {
    itemsQuery,

    items: _items,
    loading: _loading,
    refetching: _refetching,

    paginatorPayload: _paginatorPayload,
    paginatorInfo: _paginatorInfo,

    refetch,
  };
}
