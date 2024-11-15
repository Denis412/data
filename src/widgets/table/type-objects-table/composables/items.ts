/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  GetPayload,
  GetResult,
  paginateEntity,
  PaginatorInfo,
  PaginatorPayload,
  PaginatorResult,
} from '@entities/api';
import { Type } from '@entities/type/types';
import { DeepPartial } from '@shared/types';
import { UseQueryReturn } from '@vue/apollo-composable';
import { MaybeRef, ref, watch } from 'vue';

export default function useItems(
  type: MaybeRef<DeepPartial<Type>>,
  body: MaybeRef<string>
) {
  const _items = ref<any[]>([]);
  const _paginatorPayload = ref<PaginatorPayload>({
    page: 1,
    perPage: 50,
  });
  const _paginatorInfo = ref<PaginatorInfo>();

  const typeQuery =
    ref<UseQueryReturn<GetResult<'type', true, Type>, GetPayload>>();
  const itemsQuery =
    ref<UseQueryReturn<PaginatorResult<'', false, any>, PaginatorPayload>>();

  watch(
    [type, body],
    ([type, body]) => {
      if (!type || !body) return;
      const typeName = (type as DeepPartial<Type>).name as string;

      itemsQuery.value = paginateEntity(
        typeName as any,
        false,
        _paginatorPayload as any,
        (body as string) ?? '{ id }'
      );

      itemsQuery.value?.onResult((itemsResult) => {
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

  // watch(
  //   () => $route.query.typeId,
  //   (typeId) => {
  //     typeQuery.value = getType(
  //       { id: typeId as string },
  //       '{ id name label properties { id name label multiple { status } meta } }'
  //     );

  //     typeQuery.value?.onResult((queryResult) => {
  //       if (!queryResult.data) return;

  //       const typeName = queryResult.data.type.name as string;

  //       itemsQuery.value = paginateEntity(
  //         typeName,
  //         false,
  //         _paginatorPayload as any,
  //         body ?? '{ id }'
  //       );

  //       itemsQuery.value?.onResult((itemsResult) => {
  //         if (!itemsResult.data) return;

  //         const itemsData = itemsResult.data as any;
  //         const paginateResult =
  //           itemsData[typeName] ?? itemsData[`paginate_${typeName}`];

  //         _items.value = paginateResult.data;
  //         _paginatorInfo.value = paginateResult.paginatorInfo;
  //       });
  //     });
  //   },
  //   { immediate: true }
  // );

  return {
    typeQuery,
    itemsQuery,

    items: _items,

    paginatorPayload: _paginatorPayload,
    paginatorInfo: _paginatorInfo,
  };
}
