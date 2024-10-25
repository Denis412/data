import { GlobalComponentConstructor, QDialogProps } from 'quasar';
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

export interface USelectProps {}

export interface USelectSlots {
  default: () => VNode[];
}

export interface USelect extends ComponentPublicInstance<USelectProps> {}

interface _GlobalComponents {
  UDialog: GlobalComponentConstructor<UDialogProps, UDialogSlots>;
  UInput: GlobalComponentConstructor<UInputProps, UInputSlots>;
  USelect: GlobalComponentConstructor<USelectProps, USelectSlots>;
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
