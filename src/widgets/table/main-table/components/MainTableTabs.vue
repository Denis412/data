<script setup lang="ts">
import type { MainTableTabsEmits, MainTableTabsProps } from './types';
import type { TableTab, TableTabAction } from '../types';

import MainTableTabItem from './MainTableTabItem.vue';
import { ref } from 'vue';

const $props = defineProps<MainTableTabsProps>();
const $emit = defineEmits<MainTableTabsEmits>();

const _activeTab = ref<TableTab | undefined>(
  $props.tabs.find((tab) => tab.active)
);

if (!_activeTab.value) {
  _activeTab.value = $props.tabs[0];
  _activeTab.value.active = true;
}

function onClickTab(tab: TableTab) {
  if (_activeTab.value) {
    _activeTab.value.active = false;
  }

  tab.active = true;
  _activeTab.value = tab;

  $emit('clickTab', tab);
}

function onClickTabAction(tab: TableTab, action: TableTabAction) {
  $emit('clickTabAction', tab, action);
}
</script>

<template>
  <q-list tag="ul" class="main-table__tabs">
    <main-table-tab-item
      v-for="tab in tabs"
      :key="tab.id || tab.name"
      :tab="tab"
      @click="onClickTab"
      @click-action="onClickTabAction"
    >
      <template v-if="$slots.tabActions" #actions="scope">
        <slot :name="`${tab.name}Actions`" v-bind="scope"></slot>
      </template>
    </main-table-tab-item>
  </q-list>
</template>

<style scoped lang="scss">
.main-table__tabs {
  display: flex;
  overflow-x: auto;
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
