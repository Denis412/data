<script setup lang="ts">
import { computed } from 'vue';
import type { MainTableFooterProps } from './types';

const $props = defineProps<MainTableFooterProps>();

const _paginationText = computed(() => {
  const paginatorInfo = $props.paginatorInfo;
  return `${paginatorInfo?.from}-${paginatorInfo?.to} из ${paginatorInfo?.total}`;
});

const _disabledPrevBtn = computed(() =>
  $props.paginatorInfo?.from ? $props.paginatorInfo.from <= 1 : true
);
const _disabledNextBtn = computed(() => !$props.paginatorInfo?.hasMorePages);
</script>

<template>
  <div class="main-table__footer">
    <div class="main-table__footer-inner">
      <slot name="default">
        <div class="main-table__footer-btns">
          <slot name="controls"></slot>
        </div>

        <div class="main-table__paginator-info">
          <p>{{ _paginationText }}</p>

          <button
            class="icon-btn main-table__footer-btn"
            :disabled="_disabledPrevBtn"
          >
            <q-icon name="chevron_left" />
          </button>

          <button
            class="icon-btn main-table__footer-btn"
            :disabled="_disabledNextBtn"
          >
            <q-icon name="chevron_right" />
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-table__footer {
  position: relative;
  padding-block: 1rem;
  border-top: 1px solid $primary-1;
}

.main-table__footer-inner {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.main-table__footer-btns {
  display: flex;
  gap: 0.25rem;
}

.main-table__footer-btn {
  padding: 0;
  padding-inline: 0.24rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: $violet-8;

  transition-duration: 0.3s;

  &:hover {
    transform: scale(0.9);
  }
}

.main-table__paginator-info {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
