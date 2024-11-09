<template>
  <q-layout view="lHh Lpr lFf" class="text-body2">
    <the-main-header @toggle-left-drawer="toggleLeftDrawer" />
    <main-drawer v-model="leftDrawerOpen" />
    <the-main-page-container />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { TheMainHeader } from '@widgets/the-main-header';
import { MainDrawer } from '@widgets/main-drawer';
import { TheMainPageContainer } from '@widgets/the-main-page-container';

defineOptions({
  name: 'MainLayout',
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
