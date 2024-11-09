<script setup lang="ts">
import { computed } from 'vue';

import type {
  MainTableBodyCellContentEmits,
  MainTableBodyCellContentProps,
} from './types';
import type { CellValue } from '../helpers';

defineOptions({
  name: 'MainTableBodyCellContent',
});

const $props = defineProps<MainTableBodyCellContentProps>();
const $emit = defineEmits<MainTableBodyCellContentEmits>();

const _isDisabled = computed(
  () =>
    !Array.isArray($props.value) &&
    (!$props.value.value || $props.value.value === 'Пусто')
);
const _rootClasses = computed(() => ({
  'main-table__cell-content--disable': _isDisabled.value,
}));

function onClick(value: CellValue) {
  if (_isDisabled.value) return;

  $emit('click', value);
}
</script>

<template>
  <div
    v-if="!Array.isArray(value) && !value.children?.length"
    class="main-table__cell-content"
    :class="_rootClasses"
    @click.stop="onClick(value)"
  >
    <span v-if="!value.value">Пусто</span>
    <span v-else>{{ value.value }}</span>
  </div>

  <div class="main-table__cell-array-content" v-else-if="!Array.isArray(value)">
    <template v-if="value.children">
      <main-table-body-cell-content
        v-for="valueItem in value.children"
        :key="valueItem.column.name"
        :value="valueItem"
        @click="onClick"
      />
    </template>
  </div>

  <template v-else-if="Array.isArray(value)">
    <main-table-body-cell-content
      v-for="valueItem in value"
      :key="valueItem.column.name"
      :value="valueItem"
      @click="onClick"
    />
  </template>
</template>

<style scoped lang="scss">
.main-table__cell-content {
  display: inline-block;
  position: relative;
  cursor: pointer;
  border-radius: 0.25rem;

  transition-duration: 0.3s;

  &:not(:first-child) {
    margin-left: 0.25rem;
  }

  & > span {
    border-radius: 0.25rem;
    transition-duration: 0.3s;
  }

  & > span:hover {
    background: var(--head-bg);
    padding-inline: 0.25rem;
  }
}

.main-table__cell-content:not(
    .main-table__cell-content > .main-table__cell-array-content
  ) {
  overflow: auto;
}

.main-table__cell-array-content > .main-table__cell-content {
  overflow: unset !important;
}

.main-table__cell-array-content {
  position: relative;
  overflow: auto;

  transition-duration: 0.3s;

  &:hover {
    padding-inline: 0.125rem;
  }
}

.main-table__cell-content--disable {
  color: var(--disable-color);
  cursor: not-allowed;
}
</style>
