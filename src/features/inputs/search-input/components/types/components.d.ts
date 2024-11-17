import type { ComponentPublicInstance } from 'vue';

export interface SearchInputProps {}

export interface SearchInputEmits {
  (e: 'search', value: string | undefined): void;
}

export interface SearchInputSlots {}

export interface SearchInput
  extends ComponentPublicInstance<SearchInputProps> {}
