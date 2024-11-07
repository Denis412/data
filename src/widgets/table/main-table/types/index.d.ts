/* eslint-disable @typescript-eslint/no-explicit-any */

export interface TableColumn {
  name: string;
  label?: string;
  loading?: boolean;
  sortable?: boolean;
  children?: TableColumn[];
}

export interface TableTabAction {
  icon?: string;
  label: string;
  handler: (tab: TableTab, ...args: any[]) => void;
}

export interface TableTab {
  id?: string;
  active?: boolean;
  label: string;
  name: string;
  actions?: TableTabAction[];
  handler?: (...args: any[]) => void;
}
