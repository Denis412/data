/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentPublicInstance, VNode } from 'vue';
import { CellValue } from '../../helpers/get-cell-value';
import {
  TableColumn,
  TableRowAction,
  TableTab,
  TableTabAction,
} from '../../types';
import { PaginatorInfo } from '@entities/api';

export interface MainTableProps {
  title: string;
  items: any[];
  tabs: TableTab[];
  columns: TableColumn[];
  creatable?: boolean;
  searchable?: boolean;
  filterable?: boolean;
  rowActions?: TableRowAction[];
  paginatorInfo?: Partial<PaginatorInfo>;
}

export interface MainTableEmits {
  (
    e: 'clickBodyRowCell',
    item: any,
    value: CellValue,
    column: TableColumn
  ): void;
  (e: 'clickTab', tab: TableTab): void;
  (e: 'clickTabAction', tab: TableTab, action: TableTabAction): void;
  (e: 'sort', column: TableColumn): void;
}

export interface MainTableSlots {
  default: () => VNode[];
}

export interface MainTable extends ComponentPublicInstance<MainTableProps> {}

export interface MainTableTabsProps {
  tabs: TableTab[];
}

export interface MainTableTabsEmits {
  (e: 'clickTab', tab: TableTab): void;
  (e: 'clickTabAction', tab: TableTab, action: TableTabAction): void;
}

export interface MainTableTabsSlots {
  default: () => VNode[];
}

export interface MainTableTabs
  extends ComponentPublicInstance<MainTableTabsProps> {}

export interface MainTableTabItemProps {
  tab: TableTab;
}

export interface MainTableTabItemEmits {
  (e: 'click', tab: TableTab): void;
  (e: 'clickAction', tab: TableTab, action: TableTabAction): void;
}

export interface MainTableTabItemSlots {
  default: () => VNode[];
  actions: (tab: TableTab) => VNode[];
}

export interface MainTableTabItem
  extends ComponentPublicInstance<MainTableTabItemProps> {}

export interface MainTableHeaderProps {
  title: string;
  creatable?: boolean;
  searchable?: boolean;
  filterable?: boolean;
}

export interface MainTableHeaderSlots {
  default: () => VNode[];
}

export interface MainTableHeader
  extends ComponentPublicInstance<MainTableHeaderProps> {}

export interface MainTableHeadProps {
  columns: TableColumn[];
}

export interface MainTableHeadEmits {
  (e: 'sort', column: TableColumn): void;
}

export interface MainTableHeadSlots {
  default: () => VNode[];
}

export interface MainTableHeadRowProps {
  columns: TableColumn[];
}

export interface MainTableHeadRowEmits {
  (e: 'sort', column: TableColumn): void;
}

export interface MainTableHeadRowSlots {
  default: () => VNode[];
}

export interface MainTableHeadRow
  extends ComponentPublicInstance<MainTableHeadRowProps> {}

export interface MainTableHeadCellProps {
  column: TableColumn;
}

export interface MainTableHeadCellEmits {
  (e: 'sort', column: TableColumn): void;
}

export interface MainTableHeadCellSlots {
  default: () => VNode[];
}

export interface MainTableHeadCell
  extends ComponentPublicInstance<MainTableHeadCellProps> {}

export interface MainTableHead
  extends ComponentPublicInstance<MainTableHeadProps> {}

export interface MainTableBodyProps {
  items: any[];
  columns: TableColumn[];
  rowActions?: TableRowAction[];
}

export interface MainTableBodyEmits {
  (e: 'clickRowCell', item: any, value: CellValue, column: TableColumn): void;
}

export interface MainTableBodySlots {
  default: () => VNode[];
}

export interface MainTableBody
  extends ComponentPublicInstance<MainTableBodyProps> {}

export interface MainTableBodyRowProps {
  item: any;
  columns: TableColumn[];
  rowActions?: TableRowAction[];
}

export interface MainTableBodyRowEmits {
  (e: 'clickCell', item: any, value: CellValue, column: TableColumn): void;
}

export interface MainTableBodyRowSlots {
  default: () => VNode[];
}

export interface MainTableBodyRow
  extends ComponentPublicInstance<MainTableBodyRowProps> {}

export interface MainTableBodyCellProps {
  column: TableColumn;
  item: any;
  rowActions?: TableRowAction[];
}

export interface MainTableBodyCellEmits {
  (e: 'click', value: CellValue, column: TableColumn): void;
}

export interface MainTableBodyCellSlots {
  default: () => VNode[];
}

export interface MainTableBodyCell
  extends ComponentPublicInstance<MainTableBodyCellProps> {}

export interface MainTableBodyCellContentProps {
  value: CellValue | CellValue[];
}

export interface MainTableBodyCellContentEmits {
  (e: 'click', value: CellValue): void;
}

export interface MainTableBodyCellContentSlots {
  default: () => VNode[];
}

export interface MainTableBodyCellContent
  extends ComponentPublicInstance<MainTableBodyCellContentProps> {}

export interface MainTableFooterProps {
  paginatorInfo?: Partial<PaginatorInfo>;
}

export interface MainTableFooterEmits {}

export interface MainTableFooterSlots {
  default: () => VNode[];
}

export interface MainTableFooter
  extends ComponentPublicInstance<MainTableFooterProps> {}
