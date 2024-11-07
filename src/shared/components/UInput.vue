<script setup lang="ts">
/* TYPES */
import { ref } from 'vue';
import type { UInputProps, UInputModel } from './types';
import { QInput } from 'quasar';

defineProps<UInputProps>();

const $model = defineModel<UInputModel>('');
const _rootRef = ref<QInput>();

function validate() {
  _rootRef.value?.validate();
}

defineExpose({
  validate,
});
</script>

<template>
  <q-input ref="_rootRef" v-model="$model" class="u-input" />
</template>

<style scoped lang="scss">
.u-input {
  position: relative;
}
</style>
