<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */

/* TYPES */
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { QSelect } from 'quasar';
import type { USelectProps, USelectModel, USelectEmits } from '../../types';
import USelectOption from './USelectOption.vue';

defineOptions({
  name: 'USelect',
});

const $props = defineProps<USelectProps>();
const $emit = defineEmits<USelectEmits>();
const $model = defineModel<USelectModel>();

const _rootRef = ref<QSelect>();

const _rootClasses = computed(() => ({
  'u-select--hided-placeholder': !!$model.value,
}));

const _optionWidth = ref<number>();

const _optionStyles = computed(() => {
  if (typeof _optionWidth.value === 'undefined') return {};

  return {
    'max-width': `${_optionWidth.value}px`,
    width: `${_optionWidth.value}px`,
  };
});

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'Backspace') return;

  $model.value = $props.multiple
    ? $model.value.slice(0, $model.value.length - 1)
    : null;
}

watch($model, (model) => {});

onMounted(() => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      _optionWidth.value = entry.contentRect.width;
    }
  });

  nextTick(() => resizeObserver.observe(_rootRef.value?.$el));
});
</script>

<template>
  <q-select
    ref="_rootRef"
    v-bind="$props"
    v-model="$model"
    outlined
    dropdown-icon="keyboard_arrow_down"
    class="u-select"
    :class="_rootClasses"
    popup-content-class="u-menu"
    @virtual-scroll="$emit('virtualScroll', $event)"
    @keydown.stop="onKeydown"
  >
    <template #option="scope">
      <u-select-option
        :option-scope="scope"
        :option-label="optionLabel"
        :option-value="optionValue"
        :style="_optionStyles"
      />
    </template>
  </q-select>
</template>

<style scoped lang="scss">
@import '@css/fonts.scss';

.u-select {
  position: relative;

  & :deep(.q-field__control) {
    padding: 0 1rem;
    border-radius: 0.75rem;

    &::before {
      border: 1px solid $primary-1;
    }

    &::after {
      border-width: 1px;
    }
  }

  &:hover :deep(.-qfield__control) {
    &::after {
      border: 1px solid $primary-1;
    }
  }

  & :deep(.q-field__native) {
    @extend .text-body2;
    color: $violet-8;
  }

  & :deep(.q-field__append) {
    color: $violet-8;
  }

  & :deep(input) {
    @extend .text-body2;
    color: $violet-8;
    padding: 0;

    &::placeholder {
      color: $gray-5;
    }
  }
}

.u-select--hided-placeholder {
  & :deep(input::-webkit-input-placeholder) {
    color: transparent;
  }

  & :deep(input::-moz-placeholder) {
    color: transparent;
  }

  & :deep(input::-ms-input-placeholder) {
    color: transparent;
  }
}

.u-select.q-field--outlined:hover :deep(.q-field__control) {
  &::after {
    border: 1px solid #c7adff;
  }
}

.u-select.q-field--focused :deep(.q-field__control) {
  background-color: #fbfbfb !important;

  &::after {
    border: 1px solid #c7adff;
  }
}
</style>
