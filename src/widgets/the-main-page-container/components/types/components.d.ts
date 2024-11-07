import { ComponentPublicInstance, VNode } from 'vue';

export interface TheMainPageContainerProps {}

export interface TheMainPageContainerEmits {}

export interface TheMainPageContainerSlots {
  default: () => VNode[];
}

export interface TheMainPageContainer
  extends ComponentPublicInstance<TheMainPageContainerProps> {}
