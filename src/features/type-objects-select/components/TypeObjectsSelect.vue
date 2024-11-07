<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, reactive, ref, watch } from 'vue';

/* TYPES */
import type { TypeObjectsSelectProps } from './types';
import type { PaginatorInfo, PaginatorPayload } from '@entities/api';
import { USelectModel } from '@shared/components/types';

import { useGraphqlApi } from '@entities/api';
import { getOptionLabel } from '../helpers';

defineOptions({
  name: 'TypeObjectsSelect',
});

const $props = withDefaults(defineProps<TypeObjectsSelectProps>(), {
  valueProp: 'id',
  labelProp: 'name',
  body: '{ id name }',
});
const $model = defineModel<USelectModel>();

const _typeName = computed(() => $props.typeName);
const _body = computed(() => $props.body ?? '{ id }');
const _currentPerPage = computed(() => $props.perPage ?? 50);

const _paginatorPayload = reactive<PaginatorPayload>({
  page: 1,
  perPage: _currentPerPage.value,
  orderBy: {
    column: 'created_at',
    order: 'DESC',
  },
});

watch(
  [() => $props.where, () => $props.orderBy],
  ([where, orderBy]) => {
    if (where) _paginatorPayload.where = where;
    if (orderBy) _paginatorPayload.orderBy = orderBy;
  },
  { immediate: true }
);

const _paginatorInfo = reactive<Partial<PaginatorInfo>>({});
const _options = ref([]);

const typeObjectsQuery = useGraphqlApi(_typeName, $props.system).query<
  any,
  PaginatorPayload
>(_body, 'paginate', _paginatorPayload);

typeObjectsQuery?.onResult((queryResult) => {
  if (!queryResult.data) return;

  const paginatorResult =
    queryResult.data[
      $props.system ? _typeName.value : `paginate_${_typeName.value}`
    ];

  _options.value = paginatorResult?.data.map((item: any) => ({
    value: item[$props.valueProp],
    label: getOptionLabel(item, $props.labelProp),
    ...item,
  }));

  Object.assign(_paginatorInfo, paginatorResult.paginatorInfo ?? {});
});

function onVirtualScroll(details: any) {
  if (
    details.index !== _options.value.length - 1 ||
    !_paginatorInfo.hasMorePages
  ) {
    return;
  }

  _paginatorPayload.perPage += _paginatorPayload.perPage;
}
</script>

<template>
  <u-select
    v-model="$model"
    :options="_options"
    @virtual-scroll="onVirtualScroll"
  />
</template>

<style scoped lang="scss"></style>
