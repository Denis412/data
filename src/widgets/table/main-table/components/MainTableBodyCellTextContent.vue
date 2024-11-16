<script setup lang="ts">
/* eslint-disable */

import { computed } from 'vue';
import type { MainTableBodyCellTextContentProps } from './types';
import { escapeHtml } from '@shared/helpers';

const $props = defineProps<MainTableBodyCellTextContentProps>();

const _escapedText = computed(() => {
  if (typeof $props.text === 'boolean') {
    return $props.text ? 'Истина' : 'Ложь';
  }

  if (typeof $props.text !== 'string') return $props.text;

  const safeText = escapeHtml($props.text);
  const urlRegex = /https?:\/\/[a-zA-Z0-9.-]+(?:\:[0-9]+)?(\/[^\s]*)?/g;

  return safeText.replace(
    urlRegex,
    (url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  );
});
</script>

<template>
  <span v-html="_escapedText"></span>
</template>

<style scoped lang="scss"></style>
