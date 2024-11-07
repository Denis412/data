<script setup lang="ts">
import { computed } from 'vue';
import type { MainTableTabItemEmits, MainTableTabItemProps } from './types';
import { TableTabAction } from '../types';

const $props = defineProps<MainTableTabItemProps>();
const $emit = defineEmits<MainTableTabItemEmits>();

const _rootClasses = computed(() => ({
  active: $props.tab.active,
}));

function onClickTab() {
  $props.tab.handler?.($props.tab);
  $emit('click', $props.tab);
}

function onClickAction(action: TableTabAction) {
  action.handler($props.tab);
  $emit('clickAction', $props.tab, action);
}
</script>

<template>
  <q-item
    tag="li"
    clickable
    class="main-table__tabs-item"
    :class="_rootClasses"
    @click="onClickTab"
  >
    <span class="ellipsis">{{ tab.label }}</span>
    <u-button
      v-if="$slots.actions || tab.actions"
      class="icon-btn main-table__tabs-item-btn"
      @click.stop
    >
      <q-icon name="more_vert" />

      <q-menu class="u-menu">
        <slot name="actions" :tab="tab">
          <q-list tag="ul">
            <q-item
              v-for="action in tab.actions"
              :key="action.label"
              tag="li"
              clickable
              class="u-item flex-center main-table__tabs-item-action"
              @click.stop="onClickAction(action)"
            >
              {{ action.label }}
            </q-item>
          </q-list>
        </slot>
      </q-menu>
    </u-button>
  </q-item>
</template>

<style scoped lang="scss">
.main-table__tabs-item {
  align-items: center;
  gap: 0.25rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
  border-radius: 0.5rem;
  min-height: fit-content;
}

.main-table__tabs-item-btn {
  border-radius: 0.25rem;
  font-size: 0.5rem;
  padding-inline: 0.25rem;
}

.main-table__tabs-item-action {
  color: $violet-8;
}

.main-table__tabs-item-action:not(:last-child) {
  border-bottom: 1px solid $primary-1;
}

.main-table__tabs-item.active {
  background: lightcoral;
}
</style>
