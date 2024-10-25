<script setup lang="ts">
/* TYPES */
import type { MainTableHeadRowProps } from './types';

/* COMPONENTS */
import MainTableHeadCell from './MainTableHeadCell.vue';

defineProps<MainTableHeadRowProps>();
</script>

<template>
  <tr>
    <main-table-head-cell
      v-for="column in columns"
      :key="column.name"
      :column="column"
    />
  </tr>
</template>

<style scoped lang="scss"></style>
