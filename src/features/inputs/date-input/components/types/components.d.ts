import type { ValidationRule } from 'quasar';
import type { ComponentPublicInstance, VNode } from 'vue';

export interface DateInputProps {
  resetDefaultRules?: boolean;
  leftRules?: ValidationRule[] | undefined;
  rightRules?: ValidationRule[] | undefined;
}

export interface DateInputSlots {
  leftPrepend: () => VNode[];
  rightPrepend: () => VNode[];
}

export interface DateInput extends ComponentPublicInstance<DateInputProps> {
  validate: () => Promise<boolean | undefined>;
}
