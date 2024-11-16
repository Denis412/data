<script setup lang="ts">
const $model = defineModel<boolean>();

function onSubmit() {
  console.log('submit');
}

function onExpand(done: () => void) {
  setTimeout(() => {
    done();
  }, 0);
}
</script>

<template>
  <u-dialog v-model="$model" title="Настройки таблицы" close>
    <template #default>
      <q-form @submit="onSubmit">
        <u-section label="Видимые поля" expand @expand="onExpand">
          <u-input placeholder="Введите что-то" required />
        </u-section>
      </q-form>
    </template>

    <template #footer>
      <u-button label="Сбросить" class="negative-btn" />
    </template>
  </u-dialog>
</template>

<style scoped lang="scss"></style>
