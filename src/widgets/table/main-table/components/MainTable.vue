<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

/* TYPES */
import type { MainTableEmits, MainTableProps } from './types';
import type { CellValue } from '../helpers';
import type { TableColumn } from '../types';

/* COMPONENTS */
import MainTableHeader from './MainTableHeader.vue';
import MainTableHead from './MainTableHead.vue';
import MainTableBody from './MainTableBody.vue';
import MainTableFooter from './MainTableFooter.vue';

defineProps<MainTableProps>();
const $emit = defineEmits<MainTableEmits>();

function onClickBodyRowCell(item: any, value: CellValue, column: TableColumn) {
  $emit('clickBodyRowCell', item, value, column);
}
</script>

<template>
  <div class="main-table">
    <main-table-header />

    <div class="main-table__content">
      <main-table-head :columns="columns" />
      <div class="main-table__content-inner">
        <main-table-body
          :items="items"
          :columns="columns"
          @click-row-cell="onClickBodyRowCell"
        />
      </div>
    </div>

    <main-table-footer />
  </div>
</template>

<style scoped lang="scss">
.main-table {
  --primary-br: 0.5rem;
  --head-bg: #f6f2ff;
  --text-color: #3e1460;
  --disable-color: #a1a1aa;

  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  flex: 1;
  color: var(--text-color);

  display: flex;
  flex-direction: column;
}

.main-table__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

:deep(.main-table__content table) {
  width: 100%;
  table-layout: fixed;
}

.main-table__content-inner {
  overflow: auto;
}
</style>
