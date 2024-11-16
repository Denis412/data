<script setup lang="ts">
/* eslint-disable vue/no-v-html, @typescript-eslint/no-explicit-any */
const icons = import.meta.glob('../../app/assets/icons/**/*.svg', {
  as: 'raw',
});

import { ref, watch } from 'vue';
import { UIconProps } from './types';

const props = defineProps<UIconProps>();

const _iconRaw = ref<string | null>(null),
  _viewBox = ref('0 0 20 20'),
  _colorAttribute = ref('fill');

async function getSvgIcon(name: string) {
  const icon: any = icons[`../../app/assets/icons/${name}.svg`];
  let svgString = icon;

  if (!icon) return;

  if (!props.default) {
    const fillRegex = / fill="[^"]*"/g;
    const strokeRegex = / stroke="[^"]*"/g;

    if (!icon.match(fillRegex)) _colorAttribute.value = 'stroke';

    svgString = icon.replace(fillRegex, '').replace(strokeRegex, '');
  }

  _viewBox.value = svgString.match(/viewBox="([^"]*)"/)?.[1] ?? '0 0 20 20';
  _iconRaw.value =
    svgString.trim().match(/^<svg[^>]*>([^]*)<\/svg>$/)?.[1] ?? '';
}

watch(
  props,
  async (props) => {
    try {
      await getSvgIcon(props.name);
    } catch (e) {
      await getSvgIcon('edit');
      console.log('error', e);
    }
  },
  { immediate: true }
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="_viewBox"
    :[_colorAttribute]="'currentColor'"
    width="1em"
    height="1em"
    class="base-icon"
    v-html="_iconRaw"
  ></svg>
</template>

<style scoped lang="scss">
.base-icon {
  color: inherit;
  font-size: 20px;
}
</style>
