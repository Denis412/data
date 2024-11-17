/* eslint-disable @typescript-eslint/no-explicit-any */

import type { VueClasses } from '@shared/types';
import type {
  ComponentConstructor,
  GlobalComponentConstructor,
  QDialogProps,
  QInputProps,
  QSelect,
  QSelectProps,
  QSpinnerProps,
} from 'quasar';
import type { ComponentPublicInstance, VNode } from 'vue';

export interface USelectVirtualScrollDetails {
  index: number;
  from: number;
  to: number;
  direction: 'increase' | 'decrease';
  ref: QSelect;
}

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

export interface UInputProps extends QInputProps {
  modelModifiers?: Record<string, boolean>;
  required?: boolean;
}

export interface UInputSlots {
  default: () => VNode[];
  prepend: () => VNode[];
  append: () => VNode[];
}

export interface UInput extends ComponentPublicInstance<UInputProps> {
  validate: (value?: any) => boolean | Promise<boolean>;
}

export interface USelectProps extends QSelectProps {}
export interface USelectEmits {
  (e: 'virtualScroll', details: USelectVirtualScrollDetails): void;
}

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

export interface UIconProps {
  name: string;
  default?: boolean;
}

export interface UIconSlots {
  default: () => VNode[];
}

export interface UIcon extends ComponentPublicInstance<UIconProps> {}

export interface UButtonProps {}

export interface UButtonSlots {
  default: () => VNode[];
}

export interface UButton extends ComponentPublicInstance<UButtonProps> {}

export interface ULoaderProps extends QSpinnerProps {
  text?: string;
}

export interface ULoaderSlots {
  default: () => VNode[];
}

export interface ULoader extends ComponentPublicInstance<ULoaderProps> {}

export interface USectionProps {
  tag?: string;
  label?: string;
  hLevel?: number;
  expand?: boolean;
  headerBg?: string | boolean;
  contentClasses?: VueClasses;
}

export interface USectionEmits {
  (e: 'expand', done: () => void): void;
}

export interface USectionSlots {
  default: () => VNode[];
}

export interface USection extends ComponentPublicInstance<USectionProps> {}

interface _GlobalComponents {
  UDialog: GlobalComponentConstructor<UDialogProps, UDialogSlots>;
  UInput: GlobalComponentConstructor<UInputProps, UInputSlots>;
  USelect: GlobalComponentConstructor<USelectProps, USelectSlots>;
  UToggle: GlobalComponentConstructor<UToggleProps, UToggleSlots>;
  URadio: GlobalComponentConstructor<URadioProps, URadioSlots>;
  UCheckbox: GlobalComponentConstructor<UCheckboxProps, UCheckboxSlots>;
  UIcon: GlobalComponentConstructor<UIconProps, UIconSlots>;
  UButton: GlobalComponentConstructor<UButtonProps, UButtonSlots>;
  ULoader: GlobalComponentConstructor<ULoaderProps, ULoaderSlots>;
  USection: GlobalComponentConstructor<USectionProps, USectionSlots>;
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

export const UInput: ComponentConstructor<UInput>;
