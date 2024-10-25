<script setup lang="ts">
import { computed } from 'vue';
import type { MainTableHeadCellProps } from './types';
import { getColumnLabel } from '../helpers';

const $props = defineProps<MainTableHeadCellProps>();

const _columnLabel = computed(() => {
  const label = getColumnLabel($props.column);
  return label;
});
</script>

<template>
  <th scope="col" class="main-table__head-cell">
    <div class="ellipsis-2-lines">
      {{ _columnLabel }}
    </div>

    <q-tooltip :delay="250">{{ _columnLabel }}</q-tooltip>
  </th>
</template>

<style scoped lang="scss">
.main-table__head-cell {
  position: relative;
  text-align: left;
}
</style>
