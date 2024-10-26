<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */

/* TYPES */
import type { USelectProps, USelectModel } from './types';

defineOptions({
  name: 'USelect',
});

const $props = defineProps<USelectProps>();

const $model = defineModel<USelectModel>();
</script>

<template>
  <q-select v-bind="$props" v-model="$model" class="u-select" />
</template>

<style scoped lang="scss">
.u-select {
  position: relative;
}
</style>
