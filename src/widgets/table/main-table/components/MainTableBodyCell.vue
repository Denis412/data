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
    <div class="main-table__body-cell-inner">
      <slot>
        <main-table-body-cell-content :value="_cellValue" @click="onClick" />

        <div v-if="rowActions?.length" class="main-table__body-cell-actions">
          <u-button
            class="icon-btn cursor-pointer main-table__body-cell-actions-btn"
          >
            <q-icon name="more_vert" />

            <q-menu class="u-menu">
              <slot name="actions">
                <q-list tag="ul">
                  <q-item
                    v-for="action in rowActions"
                    :key="action.name"
                    tag="li"
                    clickable
                    class="u-item"
                  >
                    {{ action.label }}
                  </q-item>
                </q-list>
              </slot>
            </q-menu>
          </u-button>
        </div>
      </slot>
    </div>

    <slot name="append"></slot>
  </td>
</template>

<style scoped lang="scss">
.main-table__body-cell {
  max-height: inherit;
  // min-height: inherit;
  height: inherit;
}

.main-table__body-cell-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  padding-top: 0.375rem;
  max-height: inherit;
  // min-height: inherit;
  height: 100%;
}

.main-table__body-cell-actions {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
}

.main-table__body-cell-actions-btn {
  font-size: 0.625rem;
}
</style>
