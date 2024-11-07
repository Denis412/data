import { ComponentPublicInstance, VNode } from 'vue';

export interface TheMainHeaderProps {}

export interface TheMainHeaderEmits {
  (e: 'toggleLeftDrawer'): void;
}

export interface TheMainHeaderSlots {
  default: () => VNode[];
}

export interface TheMainHeader
  extends ComponentPublicInstance<TheMainHeaderProps> {}
