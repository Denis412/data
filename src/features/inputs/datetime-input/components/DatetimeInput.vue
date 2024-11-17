<script setup lang="ts">
import { RangeInput } from '@features/inputs';
import { useFormValidation } from '@shared/composables';

const { validDate, validTime } = useFormValidation();
</script>

<template>
  <range-input
    class="datetime-input"
    reset-default-rules
    :left-rules="[validDate]"
    :right-rules="[validTime]"
    left-mask="##.##.####"
    right-mask="##:##"
    left-placeholder="ДД.ММ.ГГГГ"
    right-placeholder="00:00"
  >
    <template #leftPrepend>
      <u-button class="icon-btn datetime-input__btn">
        <u-icon name="calendar" />
      </u-button>
    </template>

    <template #rightPrepend>
      <u-button class="icon-btn datetime-input__btn">
        <u-icon name="clock" />
      </u-button>
    </template>
  </range-input>
</template>

<style scoped lang="scss">
.datetime-input {
  & :deep(.q-field__marginal) {
    font-size: 1.25rem;

    & .u-icon {
      font-size: 1.25rem;
    }
  }
}

.datetime-input__btn {
  color: $violet-3;
  padding: 0.25rem;
}
</style>
