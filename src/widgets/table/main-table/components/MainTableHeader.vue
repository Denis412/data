<script setup lang="ts">
import type { MainTableHeaderProps } from './types';

defineProps<MainTableHeaderProps>();
</script>

<template>
  <div class="main-table__header">
    <div class="main-table__header-inner">
      <div class="flex items-center">
        <span class="text-body1 ellipsis">{{ title }}</span>
      </div>

      <div class="main-table__header-btns">
        <slot name="controls">
          <u-button
            v-if="filterable"
            label="Фильтры"
            icon-right="filter_alt"
            class="main-table__header-btn"
          />
          <u-button
            v-if="searchable"
            label="Найти"
            icon-right="search"
            class="main-table__header-btn"
          />
          <u-button
            v-if="creatable"
            label="Создать"
            icon-right="add"
            class="main-table__header-btn"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-table__header {
  position: relative;
  padding-block: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid $primary-1;
}

.main-table__header-inner {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}

.main-table__header-btns {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.25rem;
}

.main-table__header-btn {
  border: 1px solid $primary-2;
}
</style>
