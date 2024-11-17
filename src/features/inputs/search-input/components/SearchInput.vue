<script setup lang="ts">
import type { SearchInputEmits } from './types/components';

const $emit = defineEmits<SearchInputEmits>();

const $model = defineModel<string>('');

function onSearch() {
  $emit('search', $model.value);
}
</script>

<template>
  <u-input
    v-model="$model"
    @keydown.enter="onSearch"
    class="search-input"
    placeholder="Найти..."
  >
    <template #append>
      <u-button class="icon-btn search-input__btn" @click="onSearch">
        <u-icon name="search" style="font-size: 1.5rem" />
      </u-button>
    </template>
  </u-input>
</template>

<style scoped lang="scss">
@import '@css/fonts.scss';

.search-input {
  & :deep(.q-field__control) {
    height: 40px;
    border-radius: 0.75rem;
    padding: 0 0 0 1rem;
  }

  & :deep(.q-field__append) {
    height: 40px;
    padding: 0 1rem;
    border-left: 1px solid $primary-1;
    background-color: #fff;
  }

  & :deep(input) {
    @extend .text-caption1;
  }
}

.search-input__btn {
  color: $violet-2;
  padding: 0.25rem;

  & :deep(.u-icon) {
    font-size: 1.5rem;
  }
}
</style>
