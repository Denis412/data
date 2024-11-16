<script setup lang="ts">
import { computed, ref } from 'vue';
import type {
  TableFooterControlsEmits,
  TableFooterControlsProps,
} from './types';

import TypeObjectsTableSettingsDialog from './TypeObjectsTableSettingsDialog.vue';

defineProps<TableFooterControlsProps>();
const $emit = defineEmits<TableFooterControlsEmits>();

const _openSettings = ref(false);
const _refetching = ref(false);

const _refetchIconClasses = computed(() => ({
  rotate: _refetching.value,
}));

function onRefetch() {
  _refetching.value = true;
  $emit('refetch', () => {
    _refetching.value = false;
  });
}
</script>

<template>
  <u-button
    class="icon-btn type-object-table__footer-control"
    @click="_openSettings = true"
  >
    <q-icon name="settings" />
    <type-objects-table-settings-dialog v-model="_openSettings" />
  </u-button>

  <u-button
    class="icon-btn type-object-table__footer-control"
    @click="onRefetch"
  >
    <q-icon name="refresh" :class="_refetchIconClasses" />
  </u-button>

  <u-button class="icon-btn type-object-table__footer-control">
    <q-icon name="ios_share" />
  </u-button>
</template>

<style scoped lang="scss">
.type-object-table__footer-control {
  cursor: pointer;
  padding: 0.25rem;
  transition-duration: 0.3s;

  & :deep(.q-icon) {
    font-size: 1.5rem;
    color: $violet-8;
  }

  &:hover {
    transform: scale(0.9);
  }
}
</style>
