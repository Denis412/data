<script setup lang="ts">
import { computed } from 'vue';
import type { USelectOptionProps } from './types';

const $props = defineProps<USelectOptionProps>();

const _optionLabel = computed(() => {
  const opt = $props.optionScope.opt;

  if (typeof opt === 'object' && $props.optionLabel) {
    if (typeof $props.optionLabel === 'string') {
      return opt[$props.optionLabel as string];
    }

    return $props.optionLabel(opt);
  }

  return opt;
});
</script>

<template>
  <q-item
    clickable
    class="u-select__option ellipsis-2-lines"
    :class="{
      'u-select__option--selected': optionScope.selected,
    }"
    @click="optionScope.toggleOption(optionScope.opt)"
  >
    <span class="ellipsis-2-lines">
      {{ _optionLabel }}
      <q-tooltip :delay="500">{{ _optionLabel }}</q-tooltip>
    </span>
  </q-item>
</template>

<style scoped lang="scss">
.u-select__option {
  display: flex;
  align-items: center;
  color: $violet-8;

  &:not(:last-child) {
    border-bottom: 1px solid $primary-1;
  }
}

.u-select__option--selected {
  background-color: $primary-2;
}
</style>
