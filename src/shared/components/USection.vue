<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { USectionEmits, USectionProps } from './types';
import { getVueClassesObj } from '@shared/helpers';

const $props = defineProps<USectionProps>();
const $emit = defineEmits<USectionEmits>();

const _mainInnerRef = ref<HTMLElement>();
const _mainInnerHeight = ref(0);

const _expanded = ref(false);
const _expanding = ref(false);

const _rootTag = computed(() => $props.tag ?? 'section');
const _labelTagRenderInfo = computed(() => ({
  tag: $props.hLevel ? `h${$props.hLevel}` : 'p',
  class: $props.hLevel ? `ellipsis text-h${$props.hLevel}` : 'ellipsis',
}));

const _sectionHeaderClasses = computed(() => {
  const headerBg = $props.headerBg;

  const classes = {
    'u-section__header--bg': false,
    'u-section__header--bg-custom': false,
  };

  if (typeof headerBg === 'boolean') {
    classes['u-section__header--bg'] = headerBg;
    return classes;
  }

  if (!headerBg?.length) {
    classes['u-section__header--bg'] = true;
    return classes;
  }

  classes['u-section__header--bg-custom'] = true;
  return classes;
});

const _expandIconClasses = computed(() => ({
  expanded: _expanded.value,
}));

const _sectionMainClasses = computed(() => ({
  'u-section__main--hide': !_expanded.value,
  ...($props.contentClasses ? getVueClassesObj($props.contentClasses) : {}),
}));

const _sectionMainInnerStyles = computed(() => ({
  height: _expanded.value ? `${_mainInnerHeight.value}px` : '0',
}));

function updateContentHeight() {
  if (!_mainInnerRef.value) return;
  _mainInnerHeight.value = _mainInnerRef.value?.scrollHeight;
}

function onExpand() {
  updateContentHeight();
  if (_expanded.value) {
    _expanded.value = !_expanded.value;
    return;
  }

  if (!_expanded.value) {
    _expanding.value = true;
  }

  $emit('expand', () => {
    _expanding.value = false;
    setTimeout(() => (_expanded.value = !_expanded.value), 1);
  });
}

onMounted(() => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      _mainInnerHeight.value = entry.contentRect.height;
    }
  });

  if (_mainInnerRef.value) {
    _mainInnerHeight.value = _mainInnerRef.value.scrollHeight;
    resizeObserver.observe(_mainInnerRef.value);
  }
});
</script>

<template>
  <component :is="_rootTag" class="u-section">
    <div class="u-section__header" :class="_sectionHeaderClasses">
      <component
        :is="_labelTagRenderInfo.tag"
        :class="_labelTagRenderInfo.class"
      >
        {{ label }}
        <q-tooltip :delay="500">{{ label }}</q-tooltip>
      </component>

      <u-button v-if="expand" class="icon-btn u-section__btn" @click="onExpand">
        <u-loader v-if="_expanding" size="1rem" />
        <q-icon v-else name="chevron_right" :class="_expandIconClasses" />
      </u-button>
    </div>

    <div
      class="u-section__main"
      :class="_sectionMainClasses"
      :style="_sectionMainInnerStyles"
    >
      <div ref="_mainInnerRef" class="u-section__main-inner">
        <slot></slot>
      </div>
    </div>
  </component>
</template>

<style scoped lang="scss">
.u-section {
  position: relative;
}

.u-section__header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding-block: 0.5rem;
}

.u-section__header--bg {
  padding-inline: 0.5rem;
  background-color: $primary-2;
}

.u-section__header--bg-custom {
  padding-inline: 0.5rem;
  background-color: v-bind(headerBg);
}

.u-section__btn {
  color: $violet-8;
  padding: 0.25rem;

  & :deep(.q-icon) {
    font-size: 1rem;
    // transition-duration: 0.3s;
    transition: transform 0.3s ease;
  }
}

.u-section__main {
  overflow: hidden;
  transition: height 0.3s ease;

  & .u-section__main-inner {
    overflow: hidden;
    transition: height 0.3s ease;
  }
}
</style>
