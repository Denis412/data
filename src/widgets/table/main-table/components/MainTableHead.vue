<script setup lang="ts">
/* TYPES */
import type { MainTableHeadProps } from './types';

/* COMPONENTS */
import MainTableHeadRow from './MainTableHeadRow.vue';

defineProps<MainTableHeadProps>();
</script>

<template>
  <table class="main-table__head">
    <thead>
      <main-table-head-row :columns="columns" />
    </thead>
  </table>
</template>

<style scoped lang="scss">
.main-table__head {
  background-color: var(--head-bg);
  border-radius: var(--primary-br);
}
</style>
