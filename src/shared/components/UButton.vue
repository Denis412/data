<script setup lang="ts">
/* TYPES */
import type { UButtonProps } from './types';

defineProps<UButtonProps>();
</script>

<template>
  <q-btn class="u-button" />
</template>

<style scoped lang="scss">
.u-button {
  position: relative;
}
</style>
