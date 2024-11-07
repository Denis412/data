<script setup lang="ts">
import { TheMainHeaderEmits } from './types';

defineOptions({
  name: 'TheMainHeader',
});

defineEmits<TheMainHeaderEmits>();
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggleLeftDrawer')"
      />
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss"></style>
