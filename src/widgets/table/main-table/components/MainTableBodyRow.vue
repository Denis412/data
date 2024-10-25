<script setup lang="ts">
/* TYPES */
import type { MainTableBodyRowEmits, MainTableBodyRowProps } from './types';
import type { CellValue } from '../helpers';
import type { TableColumn } from '../types';

/* COMPONENTS */
import MainTableBodyCell from './MainTableBodyCell.vue';

const $props = defineProps<MainTableBodyRowProps>();
const $emit = defineEmits<MainTableBodyRowEmits>();

function onClickCell(value: CellValue, column: TableColumn) {
  $emit('clickCell', $props.item, value, column);
}
</script>

<template>
  <tr class="main-table__body-row">
    <main-table-body-cell
      v-for="column in columns"
      :key="column.name"
      :item="item"
      :column="column"
      @click="onClickCell"
    />
  </tr>
</template>

<style scoped lang="scss">
.main-table__body-row {
  position: relative;
}
</style>
