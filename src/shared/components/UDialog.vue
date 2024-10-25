<script setup lang="ts">
import { computed } from 'vue';

/* TYPES */
import type { UDialogEmits, UDialogProps } from './types';

const $props = defineProps<UDialogProps>();
const $emit = defineEmits<UDialogEmits>();

const $model = defineModel<boolean>();

const _isPersistent = computed(() => $props.close || $props.persistent);

function onClose() {
  $model.value = false;
  $emit('close');
}

defineExpose({
  closeDialog: onClose,
});
</script>

<template>
  <q-dialog
    class="u-dialog"
    v-bind="$props"
    v-model="$model"
    :persistent="_isPersistent"
  >
    <div class="u-dialog__inner text-body2">
      <div v-if="close" class="u-dialog__controls">
        <button
          class="icon-btn u-dialog__close-btn"
          type="button"
          @click="onClose"
        >
          <q-icon name="close" size="16px" />
        </button>
      </div>

      <q-card class="u-dialog__content">
        <div v-if="$slots.header || title" class="u-dialog__header text-body1">
          <slot name="header">
            {{ title }}
          </slot>
        </div>

        <div v-if="$slots.default" class="u-dialog__main">
          <slot>Main</slot>
        </div>

        <div v-if="$slots.footer" :close="onClose" class="u-dialog__footer">
          <slot name="footer"> Footer </slot>
        </div>
      </q-card>
    </div>
  </q-dialog>
</template>

<style>
/* .u-dialog .q-dialog__inner--minimized > div {
  max-width: 1024px;
  min-width: 256px;
  width: fit-content;
} */
</style>

<style scoped lang="scss">
.u-dialog {
  position: relative;
}

.u-dialog__inner {
  position: relative;
  width: 100%;
}

.u-dialog__controls {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0.5rem;
}

.u-dialog__close-btn {
  background: #fff;
  border-radius: 50%;
  padding: 0.25rem;
  cursor: pointer;
}

.u-dialog .q-card {
  box-shadow: none;
}

.u-dialog__content {
  border-radius: 1rem;
}

.u-dialog__header {
  padding: 1.5rem;
  background-color: $primary-2;
}

.u-dialog__main {
  padding: 1.5rem;
}

.u-dialog__footer {
  padding: 1.5rem;
}

.u-dialog__content:has(.u-dialog__main) .u-dialog__header,
.u-dialog__content:has(.u-dialog__footer) .u-dialog__header {
  border-bottom: 1px solid $primary-1;
}

.u-dialog__content:has(.u-dialog__main) .u-dialog__footer {
  border-top: 1px solid $primary-1;
}
</style>
