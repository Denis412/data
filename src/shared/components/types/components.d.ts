import { GlobalComponentConstructor, QDialogProps, QSelectProps } from 'quasar';
import { ComponentPublicInstance, VNode } from 'vue';

export interface UDialogProps extends QDialogProps {
  close?: boolean;
  title?: string;
}

export interface UDialogEmits {
  (e: 'close'): void;
}

export interface UDialogSlots {
  header: () => VNode[];
  default: () => VNode[];
  footer: (close: () => void) => VNode[];
}

export interface UDialog extends ComponentPublicInstance<UDialogProps> {
  closeDialog: () => void;
}

export interface UInputProps {}

export interface UInputSlots {
  default: () => VNode[];
}

export interface UInput extends ComponentPublicInstance<UInputProps> {}

export interface USelectProps extends QSelectProps {}

export interface USelectSlots {
  default: () => VNode[];
}

export interface USelect extends ComponentPublicInstance<USelectProps> {}

export interface UToggleProps {}

export interface UToggleSlots {
  default: () => VNode[];
}

export interface UToggle extends ComponentPublicInstance<UToggleProps> {}

export interface URadioProps {}

export interface URadioSlots {
  default: () => VNode[];
}

export interface URadio extends ComponentPublicInstance<URadioProps> {}

export interface UCheckboxProps {}

export interface UCheckboxSlots {
  default: () => VNode[];
}

export interface UCheckbox extends ComponentPublicInstance<UCheckboxProps> {}

export interface UIconProps {}

export interface UIconSlots {
  default: () => VNode[];
}

export interface UIcon extends ComponentPublicInstance<UIconProps> {}

interface _GlobalComponents {
  UDialog: GlobalComponentConstructor<UDialogProps, UDialogSlots>;
  UInput: GlobalComponentConstructor<UInputProps, UInputSlots>;
  USelect: GlobalComponentConstructor<USelectProps, USelectSlots>;
  UToggle: GlobalComponentConstructor<UToggleProps, UToggleSlots>;
  URadio: GlobalComponentConstructor<URadioProps, URadioSlots>;
  UCheckbox: GlobalComponentConstructor<UCheckboxProps, UCheckboxSlots>;
  UIcon: GlobalComponentConstructor<UIconProps, UIconSlots>;
}

declare module 'vue' {
  interface GlobalComponents extends _GlobalComponents {}
}

declare module '@vue/runtime-dom' {
  interface GlobalComponents extends _GlobalComponents {}
}

declare module 'vue' {
  interface GlobalComponents extends _GlobalComponents {}
}
