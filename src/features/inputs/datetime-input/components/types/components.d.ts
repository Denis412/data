import type { ValidationRule } from 'quasar';
import type { ComponentPublicInstance, VNode } from 'vue';

export interface DatetimeInputProps {
  resetDefaultRules?: boolean;
  leftRules?: ValidationRule[] | undefined;
  rightRules?: ValidationRule[] | undefined;
}

export interface DatetimeInputSlots {
  leftPrepend: () => VNode[];
  rightPrepend: () => VNode[];
}

export interface DatetimeInput
  extends ComponentPublicInstance<DatetimeInputProps> {
  validate: () => Promise<boolean | undefined>;
}
