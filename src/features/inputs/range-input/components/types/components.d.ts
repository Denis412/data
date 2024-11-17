import type { ValidationRule } from 'quasar';
import type { ComponentPublicInstance, VNode } from 'vue';

export interface RangeInputProps {
  disable?: boolean;
  resetDefaultRules?: boolean;
  leftDisable?: boolean;
  rightDisable?: boolean;
  leftMask?: string;
  rightMask?: string;
  leftPlaceholder?: string;
  rightPlaceholder?: string;
  leftRules?: ValidationRule[] | undefined;
  rightRules?: ValidationRule[] | undefined;
}

export interface RangeInputSlots {
  leftPrepend: () => VNode[];
  rightPrepend: () => VNode[];
}

export interface RangeInput extends ComponentPublicInstance<RangeInputProps> {
  validate: () => Promise<boolean | undefined>;
}
