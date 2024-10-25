<script setup lang="ts">
/* TYPES */
import type { UInputProps, UInputModel } from './types';

defineProps<UInputProps>();

const $model = defineModel<UInputModel>('');
</script>

<template>
  <q-input v-model="$model" />
</template>

<style scoped lang="scss"></style>
