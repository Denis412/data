<script setup lang="ts">
/* eslint-disable */
import { MaybeRef, watch } from 'vue';
import { useItems, useTableType } from '../composables';
import { DeepPartial } from '@shared/types';
import { Type } from '@entities/type/types';

import { MainTable, TableColumn } from '@widgets/table/main-table';
import TableFooterControls from './TableFooterControls.vue';

const {
  type,
  typeQuery,
  typeProperties,
  body,
  loading,
  gqlBody,
  itemProperties,
  expandProperty,
  addProperty,
} = useTableType();

console.log('loa', loading);

const {
  items,
  loading: itemsLoading,
  paginatorInfo,
  refetching,
  refetch,
} = useItems(type as MaybeRef<DeepPartial<Type>>, body);

async function onRefetch(done: () => void) {
  await refetch();
  done();
}

watch(typeProperties, async (typeProperties) => {
  console.log(typeProperties);
  if (!typeProperties) return;

  await expandProperty(typeProperties[1]);

  console.log(typeProperties[1]?.children?.[0]);
  if (!typeProperties[1]?.children?.[0]) return;
  addProperty(typeProperties[1]?.children?.[0]);
  // addProperty(typeProperties[1]?.children?.[1]);

  addProperty(typeProperties[0]);
});
</script>

<template>
  <div>{{ body }}</div>
  <!-- <pre>{{ itemProperties }}</pre> -->
  <main-table
    title="Участники"
    :columns="(itemProperties as TableColumn[])"
    :items="items"
    :paginator-info="paginatorInfo"
    :loading="loading"
    :loading-items="itemsLoading"
  >
    <template #footerControls>
      <table-footer-controls @refetch="onRefetch" />
    </template>
  </main-table>
</template>

<style scoped lang="scss"></style>
