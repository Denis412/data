<script setup lang="ts">
import type { ULoaderProps } from './types';

defineProps<ULoaderProps>();
</script>

<template>
  <div class="u-loader">
    <q-spinner :color="color" :size="size" :thickness="thickness" />
    <span v-if="text" class="u-loader__text">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.u-loader {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.u-loader__text {
  display: block;
  text-align: center;
}
</style>
