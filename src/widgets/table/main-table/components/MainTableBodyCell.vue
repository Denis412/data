<script setup lang="ts">
import { computed } from 'vue';

import type { MainTableBodyCellEmits, MainTableBodyCellProps } from './types';
import type { CellValue } from '../helpers';

import MainTableBodyCellContent from './MainTableBodyCellContent.vue';
import { getCellValue } from '../helpers';

const $props = defineProps<MainTableBodyCellProps>();
const $emit = defineEmits<MainTableBodyCellEmits>();

const _cellValue = computed(() => {
  const cellValue = getCellValue($props.item, $props.column);
  return cellValue;
});

function onClick(value: CellValue) {
  $emit('click', value, $props.column);
}
</script>

<template>
  <td class="main-table__body-cell">
    <main-table-body-cell-content :value="_cellValue" @click="onClick" />
  </td>
</template>

<style scoped lang="scss">
.main-table__body-cell {
  position: relative;
}
</style>
