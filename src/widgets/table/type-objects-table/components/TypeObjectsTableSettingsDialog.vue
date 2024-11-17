<script setup lang="ts">
import { useFormValidation } from '@shared';
import { RangeInput, DatetimeInput, SearchInput } from '@features/inputs';

const $model = defineModel<boolean>();

const { required } = useFormValidation();

function onSubmit() {
  console.log('submit');
}

function onExpand(done: () => void) {
  setTimeout(() => {
    done();
  }, 500);
}
</script>

<template>
  <u-dialog v-model="$model" title="Настройки таблицы" close>
    <template #default>
      <q-form @submit="onSubmit">
        <u-section label="Секция первая" expand @expand="onExpand">
          <u-input placeholder="Введите что-то" required :rules="[required]" />
          <range-input />
          <datetime-input />
          <search-input :rules="[required]" />
        </u-section>

        <u-section label="Секция вторая" expand @expand="onExpand">
          <u-input
            placeholder="Введите что-то"
            required
            type="textarea"
            autogrow
            counter
          />
        </u-section>

        <u-section label="Секция третья" expand @expand="onExpand">
          <u-input placeholder="Введите что-то" />
        </u-section>
      </q-form>
    </template>

    <template #footer>
      <u-button label="Сбросить" class="negative-btn" />
    </template>
  </u-dialog>
</template>

<style scoped lang="scss"></style>
