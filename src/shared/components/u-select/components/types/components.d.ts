/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPublicInstance, VNode } from 'vue';

export interface USelectOptionProps {
  optionScope: any;
  optionLabel?: string | ((option: string | any) => string);
  optionValue?: string | ((option: any) => any) | undefined;
}

export interface USelectOptionEmits {}

export interface USelectOptionSlots {
  default: () => VNode[];
}

export interface USelectOption
  extends ComponentPublicInstance<USelectOptionProps> {}
