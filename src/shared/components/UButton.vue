<script setup lang="ts">
/* TYPES */
import type { UButtonProps } from './types';

defineProps<UButtonProps>();
</script>

<template>
  <q-btn class="u-button" flat>
    <slot></slot>
  </q-btn>
</template>

<style scoped lang="scss">
.u-button {
  position: relative;
}
</style>
