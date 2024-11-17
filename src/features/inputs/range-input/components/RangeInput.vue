<script setup lang="ts">
import type { UInput } from '@shared/components/types';
import { useFormValidation } from '@shared/composables';
import { computed, nextTick, ref, watch } from 'vue';
import { RangeInputProps } from './types';

const { numberLessThan, numberMoreThan } = useFormValidation();

const $props = defineProps<RangeInputProps>();

const _leftInputRef = ref<UInput>();
const _rightInputRef = ref<UInput>();

const $leftModel = defineModel<string>('leftModel');
const $rightModel = defineModel<string>('rightModel');

const _leftRules = computed(() => {
  const rules = [];

  if (!$props.resetDefaultRules) {
    rules.push(numberLessThan($rightModel.value));
  }

  return [...rules, ...($props.leftRules ?? [])];
});
const _rightRules = computed(() => {
  const rules = [];

  if (!$props.resetDefaultRules) {
    rules.push(numberMoreThan($leftModel.value));
  }

  return [...rules, ...($props.rightRules ?? [])];
});

const _leftDisable = computed(() => $props.disable || $props.leftDisable);
const _rightDisable = computed(() => $props.disable || $props.rightDisable);

const _isError = ref(false);
const _isFocused = ref(false);

const _rootClasses = computed(() => ({
  'range-input--focused': _isFocused.value,
  'range-input--error': _isError.value,
}));

function onFocus() {
  setTimeout(() => (_isFocused.value = true));
}

function onBlur() {
  _isFocused.value = false;
  bothValidate();
}

async function validate() {
  return (
    (await _leftInputRef.value?.validate()) &&
    (await _rightInputRef.value?.validate())
  );
}

function bothValidate() {
  let leftValidateResult: boolean | undefined;
  let rightValidateResult: boolean | undefined;

  nextTick(async () => {
    leftValidateResult = await _leftInputRef.value?.validate();
    rightValidateResult = await _rightInputRef.value?.validate();

    if (!leftValidateResult || !rightValidateResult) _isError.value = true;
    else _isError.value = false;
  });
}

watch([$leftModel, $rightModel], bothValidate);

defineExpose({
  validate,
});
</script>

<template>
  <div class="range-input" :class="_rootClasses">
    <u-input
      ref="_leftInputRef"
      v-model="$leftModel"
      @focus="onFocus"
      @blur="onBlur"
      :placeholder="leftPlaceholder"
      :mask="leftMask"
      :rules="_leftRules"
      :disable="_leftDisable"
    >
      <template #prepend>
        <slot name="leftPrepend">От</slot>
      </template>
    </u-input>

    <div class="range-input__separator"></div>

    <u-input
      ref="_rightInputRef"
      v-model="$rightModel"
      @focus="onFocus"
      @blur="onBlur"
      :placeholder="rightPlaceholder"
      :mask="rightMask"
      :rules="_rightRules"
      :disable="_rightDisable"
    >
      <template #prepend>
        <slot name="rightPrepend">До</slot>
      </template>
    </u-input>
  </div>
</template>

<style scoped lang="scss">
.range-input {
  display: flex;
  flex-wrap: nowrap;
  border-radius: 0.5rem;

  & .u-input {
    width: 50%;
  }

  & .u-input :deep(.q-field__control) {
    border-top: 1px solid $primary-1;
    border-bottom: 1px solid $primary-1;
  }

  & .u-input:first-child :deep(.q-field__bottom) {
    padding-right: 1rem;
  }

  & .u-input:first-child :deep(.q-field__control) {
    border-radius: 0.5rem 0 0 0.5rem;
    border-left: 1px solid $primary-1;
  }

  & .u-input:last-child :deep(.q-field__control) {
    border-radius: 0 0.5rem 0.5rem 0;
    border-right: 1px solid $primary-1;
  }

  & .u-input.q-field--disabled :deep(.q-field__control) {
    border-top: 1px solid $primary-2;
    border-bottom: 1px solid $primary-2;
  }

  & .u-input:first-child.q-field--disabled :deep(.q-field__control) {
    border-left: 1px solid $primary-2;
  }

  & .u-input:last-child.q-field--disabled :deep(.q-field__control) {
    border-right: 1px solid $primary-2;
  }

  & .u-input :deep(.q-field__marginal) {
    font-size: 1rem;
    color: $violet-8;
  }
}

.range-input--focused {
  & .u-input :deep(.q-field__control) {
    border-top: 1px solid $primary-1;
    border-bottom: 1px solid $primary-1;
  }

  & .u-input:first-child :deep(.q-field__control) {
    border-left: 1px solid $primary-1;
  }

  & .u-input:last-child :deep(.q-field__control) {
    border-right: 1px solid $primary-1;
  }
}

.range-input--error {
  & .u-input :deep(.q-field__control) {
    border-top: 1px solid $negative;
    border-bottom: 1px solid $negative;
  }

  & .u-input:first-child :deep(.q-field__control) {
    border-left: 1px solid $negative;
  }

  & .u-input:last-child :deep(.q-field__control) {
    border-right: 1px solid $negative;
  }
}

.range-input__separator {
  height: inherit;
  margin-top: 1rem;
  margin-bottom: 36px;
  width: 0.5px;
  background-color: #9670b3;
}

.u-input :deep(.q-field__control) {
  border-radius: 0;

  &::before {
    border: none !important;
  }

  &::after {
    border: none !important;
  }
}
</style>
