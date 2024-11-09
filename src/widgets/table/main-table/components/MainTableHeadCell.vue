<script setup lang="ts">
import { computed, ref } from 'vue';
import type { MainTableHeadCellEmits, MainTableHeadCellProps } from './types';
import { getColumnLabel } from '../helpers';

const $props = defineProps<MainTableHeadCellProps>();
const $emit = defineEmits<MainTableHeadCellEmits>();

const _columnLabel = computed(() => {
  const label = getColumnLabel($props.column);
  return label;
});

const _rootHovered = ref(false);

const _sortbleBtnClasses = computed(() => ({
  'sortable-btn--desc': $props.column.sortOrder === 'DESC',
  'sortable-btn--active': $props.column.sortOrder || _rootHovered.value,
}));

function onSortable() {
  $emit('sort', $props.column);
}

function onMouseEnter() {
  _rootHovered.value = true;
}

function onMouseLeave() {
  _rootHovered.value = false;
}
</script>

<template>
  <th
    scope="col"
    class="main-table__head-cell"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="main-table__head-cell-inner">
      <span class="ellipsis">
        {{ _columnLabel }}

        <q-tooltip :delay="250">{{ _columnLabel }}</q-tooltip>
      </span>

      <button
        v-if="column.sortable"
        class="icon-btn sortable-btn"
        :class="_sortbleBtnClasses"
        @click="onSortable"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  </th>
</template>

<style scoped lang="scss">
.main-table__head-cell {
  position: relative;
  text-align: left;
  font-weight: normal;
}

.main-table__head-cell-inner {
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  flex-wrap: nowrap;
}

.sortable-btn {
  opacity: 0;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 15px;
  width: 0;
  gap: 1px;
  cursor: pointer;

  transition-duration: 0.3s;

  & > * {
    height: 4px;
    background-color: $violet-3;
    transition-duration: 0.3s;
    border-radius: 0.125rem;
  }

  & > div:first-child {
    width: 40%;
  }
  & > div:nth-child(2) {
    width: 70%;
  }
  & > div:last-child {
    width: 100%;
  }
}

.sortable-btn--active {
  opacity: 1;
  width: 100%;
}

.sortable-btn--desc {
  & > div:first-child {
    width: 100%;
  }
  & > div:last-child {
    width: 40%;
  }
}
</style>
