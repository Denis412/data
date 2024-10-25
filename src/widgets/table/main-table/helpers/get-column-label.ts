import { TableColumn } from '../types';

export default function getColumnLabel(column: TableColumn) {
  let label = column.label ?? '';
  const children = column.children;

  if (!children?.length) return label;

  for (const index in children ?? []) {
    const col = children[index];

    if (label) {
      if (parseInt(index) === 0) label += '->';
    }

    if (children.length > 1) {
      if (parseInt(index) === 0) label += '[';
      else label += '&';
      label += '(';
    }

    label += getColumnLabel(col);

    if (children.length > 1) {
      label += ')';
      if (parseInt(index) === children.length - 1) label += ']';
    }
  }

  return label;
}
