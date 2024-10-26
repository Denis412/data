import { PaginatorOrderBy, PaginatorWhere } from '@entities/api/types';
import { ComponentPublicInstance, VNode } from 'vue';

export interface TypeObjectsSelectProps {
  typeName: string;
  system?: boolean;
  valueProp?: string;
  labelProp?: string;
  body?: string;
  perPage?: number;
  where?: PaginatorWhere;
  orderBy?: PaginatorOrderBy;
}

export interface TypeObjectsSelectEmits {}

export interface TypeObjectsSelectSlots {
  default: () => VNode[];
}

export interface TypeObjectsSelect
  extends ComponentPublicInstance<TypeObjectsSelectProps> {}
