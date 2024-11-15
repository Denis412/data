<script setup lang="ts">
/* eslint-disable */
import { toRef, watch } from 'vue';
import { useItems, useTableType } from '../composables';

// import { MainTable } from '@widgets/table/main-table';

const {
  type,
  typeProperties,
  body,
  gqlBody,
  itemProperties,
  expandProperty,
  addProperty,
} = useTableType();

useItems(toRef(type, 'name' as any), body);

watch(typeProperties, async (typeProperties) => {
  console.log(typeProperties);
  if (!typeProperties) return;

  await expandProperty(typeProperties[1]);

  console.log(typeProperties[1]?.children?.[0]);
  if (!typeProperties[1]?.children?.[0]) return;
  addProperty(typeProperties[1]?.children?.[0]);
  addProperty(typeProperties[0]);
});
</script>

<template>
  <div>{{ body }}</div>
  <div>{{ itemProperties }}</div>
  <!-- <main-table /> -->
</template>

<style scoped lang="scss"></style>
