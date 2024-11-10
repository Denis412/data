<script setup lang="ts">
/* TYPES */
import type { MainTableBodyRowEmits, MainTableBodyRowProps } from './types';
import { startResizeRow, type CellValue } from '../helpers';
import type { TableColumn } from '../types';

/* COMPONENTS */
import MainTableBodyCell from './MainTableBodyCell.vue';
import { computed, ref } from 'vue';

const $props = defineProps<MainTableBodyRowProps>();
const $emit = defineEmits<MainTableBodyRowEmits>();

const _rootRef = ref<HTMLElement>();

const _columnsData = computed(() => ({
  sliced: $props.columns.slice(0, $props.columns.length - 1),
  last: $props.columns[$props.columns.length - 1],
}));

function onClickCell(value: CellValue, column: TableColumn) {
  $emit('clickCell', $props.item, value, column);
}

const _showResizeLine = ref(false);
</script>

<template>
  <tr
    ref="_rootRef"
    class="main-table__body-row"
    @mouseenter="_showResizeLine = true"
    @mouseleave="_showResizeLine = false"
  >
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
    >
      <template #append>
        <div
          v-if="_showResizeLine"
          class="main-table__resize-row"
          @mousedown="startResizeRow($event, _rootRef)"
        ></div>
      </template>
    </main-table-body-cell>
  </tr>
</template>

<style scoped lang="scss">
.main-table__body-row {
  position: relative;
}

.main-table__resize-row {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 2px;
  background-color: $primary-1;
  cursor: row-resize;
  user-select: none;
}
</style>
