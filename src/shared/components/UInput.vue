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
  <q-input
    ref="_rootRef"
    v-bind="$props"
    v-model="$model"
    outlined
    no-error-icon
    class="u-input"
  >
    <template v-if="$slots.append || required" #append>
      <slot name="append">
        <u-icon name="star" />
      </slot>
    </template>
  </q-input>
</template>

<style scoped lang="scss">
@import '@css/fonts.scss';

.u-input {
  position: relative;

  & :deep(.q-field__control) {
    border-radius: 0.5rem;
    transition-duration: 0.3s;
    background-color: #fbfbfb;
    padding: 0 1rem;

    &::before {
      border: 1px solid $primary-1;
    }

    &::after {
      border-width: 1px;
    }
  }

  & :deep(.q-field__append) {
    padding-left: 0.5rem;

    & .base-icon {
      font-size: 0.875rem;
    }
  }

  & :deep(.q-field__counter) {
    padding-right: 1rem;
  }

  & :deep(input) {
    @extend .text-body2;
    color: $violet-8;
    padding: 0;

    &::placeholder {
      color: $gray-5;
    }
  }

  & :deep(textarea) {
    @extend .text-body2;
    padding: 1rem 0 !important;
    color: $violet-8;
    padding: 0;

    &::placeholder {
      color: $gray-5;
    }
  }
}

.q-field--outlined:hover :deep(.q-field__control) {
  &::after {
    border: 1px solid #c7adff;
  }
}

.q-field--focused :deep(.q-field__control) {
  background-color: #f9f6ff !important;

  &::after {
    border: 1px solid #c7adff;
  }
}

.q-field--disabled :deep(.q-field__control) {
  &::before {
    border: 1px solid $primary-2;
  }

  & :deep(input) {
    color: $gray-3;

    &::placeholder {
      color: $gray-3;
    }
  }

  & :deep(textarea) {
    color: $gray-3;

    &::placeholder {
      color: $gray-3;
    }
  }
}

.q-field--disabled:hover :deep(.q-field__control) {
  &::after {
    border: 1px solid $primary-2;
  }
}

.q-field--error:hover :deep(.q-field__control) {
  &::after {
    border: 1px solid $negative;
  }
}

.q-field--error :deep(.q-field__control) {
  &::after {
    border: 1px solid $negative;
  }
}

.q-field--error :deep(.q-field__append) {
  .base-icon {
    color: $negative;
  }
}

.q-field--with-bottom {
  padding-bottom: 0;
}

:deep(.q-field__bottom) {
  position: relative;
  padding: 8px 0 0;
}

:deep(.q-field__bottom--animated) {
  transform: translateY(0);
}

.q-textarea :deep(.q-field__control) {
  --textarea-height: 124px;
  height: var(--textarea-height);
  max-height: var(--textarea-height);

  & textarea {
    max-height: var(--textarea-height);
    overflow: auto;
  }
}
</style>
