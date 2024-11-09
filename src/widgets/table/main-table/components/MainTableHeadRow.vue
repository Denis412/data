<script setup lang="ts">
/* TYPES */
import type { MainTableHeadRowEmits, MainTableHeadRowProps } from './types';
import type { TableColumn } from '../types';

/* COMPONENTS */
import MainTableHeadCell from './MainTableHeadCell.vue';
import { ref } from 'vue';

const $props = defineProps<MainTableHeadRowProps>();
const $emit = defineEmits<MainTableHeadRowEmits>();

const _sortableColumn = ref<TableColumn | undefined>(
  $props.columns.find((column) => column.sortOrder)
);

function onSort(column: TableColumn) {
  switch (column.sortOrder) {
    case 'ASC':
      column.sortOrder = 'DESC';
      break;
    case 'DESC':
      column.sortOrder = undefined;
      break;

    default:
      column.sortOrder = 'ASC';
  }

  if (_sortableColumn.value && _sortableColumn.value !== column) {
    delete _sortableColumn.value.sortOrder;
  }
  _sortableColumn.value = column;

  $emit('sort', column);
}
</script>

<template>
  <tr>
    <main-table-head-cell
      v-for="column in columns"
      :key="column.name"
      :column="column"
      @sort="onSort"
    />
  </tr>
</template>

<style scoped lang="scss"></style>
