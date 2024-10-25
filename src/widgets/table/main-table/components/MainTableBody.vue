<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

/* TYPES */
import type { MainTableBodyEmits, MainTableBodyProps } from './types';
import type { CellValue } from '../helpers';
import type { TableColumn } from '../types';

/* COMPONENTS */
import MainTableBodyRow from './MainTableBodyRow.vue';

defineProps<MainTableBodyProps>();
const $emit = defineEmits<MainTableBodyEmits>();

function onClickRowCell(item: any, value: CellValue, column: TableColumn) {
  $emit('clickRowCell', item, value, column);
}
</script>

<template>
  <table class="main-table__body">
    <tbody>
      <main-table-body-row
        v-for="item in items"
        :key="item"
        :item="item"
        :columns="columns"
        @click-cell="onClickRowCell"
      />
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.main-table__body {
  position: relative;
  // overflow: auto;
}
</style>
