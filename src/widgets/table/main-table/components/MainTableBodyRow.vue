<script setup lang="ts">
/* TYPES */
import type { MainTableBodyRowEmits, MainTableBodyRowProps } from './types';
import type { CellValue } from '../helpers';
import type { TableColumn } from '../types';

/* COMPONENTS */
import MainTableBodyCell from './MainTableBodyCell.vue';
import { computed } from 'vue';

const $props = defineProps<MainTableBodyRowProps>();
const $emit = defineEmits<MainTableBodyRowEmits>();

const _columnsData = computed(() => ({
  sliced: $props.columns.slice(0, $props.columns.length - 1),
  last: $props.columns[$props.columns.length - 1],
}));

function onClickCell(value: CellValue, column: TableColumn) {
  $emit('clickCell', $props.item, value, column);
}
</script>

<template>
  <tr class="main-table__body-row">
    <main-table-body-cell
      v-for="column in _columnsData.sliced"
      :key="column.name"
      :item="item"
      :column="column"
      @click="onClickCell"
    />

    <main-table-body-cell
      :key="_columnsData.last.name"
      :item="item"
      :column="_columnsData.last"
      :row-actions="rowActions"
      @click="onClickCell"
    />
  </tr>
</template>

<style scoped lang="scss">
.main-table__body-row {
  position: relative;
}
</style>
