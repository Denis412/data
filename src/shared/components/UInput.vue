<script setup lang="ts">
/* TYPES */
import type { UInputProps, UInputModel } from './types';

defineProps<UInputProps>();

const $model = defineModel<UInputModel>('');
</script>

<template>
  <q-input v-model="$model" class="u-input" />
</template>

<style scoped lang="scss">
.u-input {
  position: relative;
}
</style>
