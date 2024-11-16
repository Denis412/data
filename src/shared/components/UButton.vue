<script setup lang="ts">
/* TYPES */
import type { UButtonProps } from './types';

defineProps<UButtonProps>();
</script>

<template>
  <q-btn class="u-button" flat no-caps>
    <slot></slot>
  </q-btn>
</template>

<style lang="scss">
.primary-btn {
  $current-gradient: $gradient-violet-1;
  background: $current-gradient;
}

.secondary-btn {
  $current-gradient: $gradient-peach-1;
  background: $current-gradient;
}

.positive-btn {
  $current-gradient: $gradient-green-1;
  background: $current-gradient;
}

.negative-btn {
  $current-gradient: $gradient-red-1;
  background: $current-gradient;
}

.btn-flat {
  background: transparent;
  transition-duration: var(--transition-duration);

  & > span > span {
    background: $gradient-violet-1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.disabled {
    & > span > span {
      background: transparent;
      -webkit-text-fill-color: currentColor;
      color: #a28eac;
    }

    &:hover {
      background: transparent;
    }
  }

  &:hover {
    opacity: 1;
    background: $gradient-violet-4;
  }
}

.btn-outlined {
  border: 2px solid $violet-6;
  background: transparent;
  transition-duration: var(--transition-duration);

  & > span > span {
    background: $gradient-violet-1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.disabled {
    border: 2px solid #a28eac;

    & > span > span {
      background: transparent;
      -webkit-text-fill-color: currentColor;
      color: #a28eac;
    }
  }

  &:hover {
    opacity: 1;
    background: $gradient-violet-4;
  }
}
</style>

<style scoped lang="scss">
.u-button {
  position: relative;
  color: #fff;
  border-radius: 0.5rem;
  height: fit-content;
  min-height: 0;
}
</style>
