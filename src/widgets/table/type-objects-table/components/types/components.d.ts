import { ComponentPublicInstance, VNode } from 'vue';

export interface TableFooterControlsProps {}

export interface TableFooterControlsEmits {
  (e: 'refetch', done: () => void): void;
}

export interface TableFooterControlsSlots {
  default: () => VNode[];
}

export interface TableFooterControls
  extends ComponentPublicInstance<TableFooterControlsProps> {}
