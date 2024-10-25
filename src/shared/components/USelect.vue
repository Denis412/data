<script setup lang="ts">
/* TYPES */
import type { UDialogProps, USelectModel } from './types';

defineProps<UDialogProps>();

const $model = defineModel<USelectModel>();
</script>

<template>
  <q-select v-model="$model" />
</template>

<style scoped lang="scss"></style>
