import { QDrawerProps } from 'quasar';
import { ComponentPublicInstance, VNode } from 'vue';

export interface MainDrawerProps extends QDrawerProps {}

export interface MainDrawerEmits {}

export interface MainDrawerSlots {
  default: () => VNode[];
}

export interface MainDrawer extends ComponentPublicInstance<MainDrawerProps> {}
