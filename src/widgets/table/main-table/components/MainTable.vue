<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

/* TYPES */
import type { MainTableEmits, MainTableProps } from './types';
import type { CellValue } from '../helpers';
import type { TableColumn, TableTab, TableTabAction } from '../types';

/* COMPONENTS */
import MainTableTabs from './MainTableTabs.vue';
import MainTableHeader from './MainTableHeader.vue';
import MainTableHead from './MainTableHead.vue';
import MainTableBody from './MainTableBody.vue';
import MainTableFooter from './MainTableFooter.vue';

defineProps<MainTableProps>();
const $emit = defineEmits<MainTableEmits>();

function onClickTab(tab: TableTab) {
  $emit('clickTab', tab);
}

function onCLickTabAction(tab: TableTab, action: TableTabAction) {
  $emit('clickTabAction', tab, action);
}

function onClickBodyRowCell(item: any, value: CellValue, column: TableColumn) {
  $emit('clickBodyRowCell', item, value, column);
}
</script>

<template>
  <div class="main-table">
    <main-table-tabs
      v-if="tabs?.length"
      :tabs="tabs"
      @click-tab="onClickTab"
      @click-tab-action="onCLickTabAction"
    />

    <div class="main-table__inner">
      <main-table-header
        :title="title"
        :creatable="creatable"
        :searchable="searchable"
        :filterable="filterable"
      >
        <template v-if="$slots.headerControls" #controls="scope">
          <slot name="headerControls" v-bind="scope"></slot>
        </template>
      </main-table-header>

      <div class="main-table__content">
        <main-table-head :columns="columns" @sort="$emit('sort', $event)" />
        <div class="main-table__content-inner">
          <main-table-body
            :items="items"
            :columns="columns"
            :row-actions="rowActions"
            @click-row-cell="onClickBodyRowCell"
          />
        </div>
      </div>

      <main-table-footer :paginator-info="paginatorInfo">
        <template v-if="$slots.footer" v-slot="scope">
          <slot name="footer" v-bind="scope"></slot>
        </template>

        <template v-if="$slots.footerControls" #controls="scope">
          <slot name="footerControls" v-bind="scope"></slot>
        </template>
      </main-table-footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-table {
  --primary-br: 0.5rem;
  --head-bg: #f6f2ff;
  --text-color: #3e1460;
  --disable-color: #a1a1aa;

  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  flex: 1;
  // font-size: 0.875rem;
  color: var(--text-color);

  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0.75rem;
}

.main-table__inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1rem;
  padding-inline: 1rem;
}

.main-table__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

:deep(.main-table__content table) {
  width: 100%;
  table-layout: fixed;
}

.main-table__content-inner {
  overflow: auto;
}

:deep(.main-table__body-row) {
  max-height: 70px;
  height: 70px;
}

// :deep(.main-table__body-cell-inner) {
//   max-height: 70px;
//   height: 70px;
// }

.main-table :deep(table) {
  border-collapse: collapse;
}

.main-table :deep(th) {
  padding-block: 12px;
  text-align: left;
  font-weight: 400;

  transition-duration: var(--transition-duration);
}

.main-table :deep(tr:nth-child(even) > td) {
  background: #fbfbff;
}

.main-table :deep(th:first-child),
.main-table :deep(tbody td:first-child) {
  padding-left: 16px;
}

.main-table :deep(th:last-child),
.main-table :deep(tbody td:last-child) {
  padding-right: 12px;
}

.main-table :deep(th:not(:first-child)),
.main-table :deep(td:not(:first-child)) {
  padding-left: 24px;
}

.main-table :deep(th:not(:last-child) > div),
.main-table :deep(td:not(:last-child) > div) {
  padding-right: 24px;
}

.main-table :deep(th:not(:last-child) > div) {
  border-right: 1px solid #e7dcff;
}

.main-table__laptop {
  &.main-table :deep(th:first-child),
  &.main-table :deep(tbody td:first-child) {
    padding-left: 12px;
  }

  &.main-table :deep(th:not(:first-child)),
  &.main-table :deep(td:not(:first-child)) {
    padding-left: 16px;
  }

  &.main-table :deep(th:not(:last-child) > div),
  &.main-table :deep(td:not(:last-child) > div) {
    padding-right: 16px;
  }

  &.main-table :deep(th:last-child),
  &.main-table :deep(tbody td:last-child) {
    padding-right: 12px;
  }
}

.main-table__tablet {
  .main-table :deep(th:not(:first-child)),
  .main-table :deep(td:not(:first-child)) {
    padding-left: 12px;
  }

  .main-table :deep(th:not(:last-child) > div),
  .main-table :deep(td:not(:last-child) > div) {
    padding-right: 12px;
  }

  .main-table :deep(th:first-child),
  .main-table :deep(tbody td:first-child) {
    padding-left: 8px;
  }

  .main-table :deep(th:last-child),
  .main-table :deep(tbody td:last-child) {
    padding-right: 8px;
  }
}

.main-table__mobile {
  .main-table-head-actions {
    justify-content: flex-end;
  }
}
</style>
