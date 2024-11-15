import type { PaginatorWhere } from '@entities/api';
import type { Property, PropertyDataType } from '@entities/type/types';
import { TableColumn } from '@widgets/table/main-table';

export interface TypeConfigProperty {
  name: string;
  data_type: PropertyDataType;
  parent?: TypeConfigProperty | null;
  children?: TypeConfigProperty[];
}

export interface TypeConfigItem {
  label: string;
  properties: TypeConfigProperty[];
  creatable?: boolean;
  tabs?: TypeConfigItem[];
  filters?: PaginatorWhere;
}

export interface TypesConfig {
  [Property: string]: TypeConfigItem;
}

export type TypeTableProperty = Property &
  TypeConfigProperty &
  TableColumn & {
    parent?: TypeTableProperty;
    children: TypeTableProperty[];
    selected?: boolean;
  };

// export interface TypeTableProperty
//   extends Property & TypeConfigProperty & TableColumn {
//   parent?: TypeTableProperty;
//   children: TypeTableProperty[];
//   selected?: boolean;
// }
