export interface TableColumn {
  name: string;
  label?: string;
  loading?: boolean;
  sortable?: boolean;
  children?: TableColumn[];
}
