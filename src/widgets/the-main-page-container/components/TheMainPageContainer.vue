<script setup lang="ts">
defineOptions({
  name: 'TheMainPageContainer',
});
</script>

<template>
  <q-page-container>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </q-page-container>
</template>

<style scoped lang="scss"></style>
