/* eslint-disable  */

import { TableColumn } from '../types';

export interface CellValue {
  column: TableColumn;
  value: string;
  item: any;
  children?: CellValue[];
}

export type GetCellValueResult = CellValue | CellValue[];

function getObjectItemCellValue(item: any, column: TableColumn) {
  const defaultValue: CellValue = {
    value: '',
    item,
    column,
  };

  const columnValue = item;
  if (!column.children) return defaultValue;

  if (!defaultValue.children) {
    defaultValue.children = [];
  }

  for (const childColumn of column.children) {
    const getValueRes = getCellValue(columnValue, childColumn);
    if (Array.isArray(getValueRes)) {
      defaultValue.children.push(...getValueRes);
    } else {
      defaultValue.children.push(getValueRes);
    }
  }

  defaultValue.item = columnValue;
  for (const index in defaultValue.children) {
    const res = defaultValue.children[parseInt(index)];
    defaultValue.value = defaultValue.value
      ? defaultValue.value + `; ${res.value}`
      : res.value;
  }

  return defaultValue;
}

export default function getCellValue(
  item: any,
  column: TableColumn
): GetCellValueResult {
  const columnName = column.name;
  const defaultValue: CellValue = {
    item,
    value: '',
    column,
  };

  let columnValue = item[columnName];

  if (!columnName || !columnValue) {
    defaultValue.value = 'Пусто';
    return defaultValue;
  }

  if (typeof columnValue !== 'object') {
    defaultValue.value = columnValue;
    return defaultValue;
  }

  if (Array.isArray(columnValue)) {
    const results: CellValue[] = [];

    for (const index in columnValue) {
      const val = columnValue[index];

      results.push({
        item,
        column,
        value: val,
      });

      if (typeof val !== 'object') continue;

      const columnValueItem = 'object' in val ? val.object : val;

      const _defValue = getObjectItemCellValue(columnValueItem, column);
      results[results.length - 1].item = _defValue.item;
      results[results.length - 1].value = _defValue.value;
      results[results.length - 1].children = _defValue.children;
    }

    return results;
  }

  if (typeof columnValue === 'object') {
    columnValue = 'object' in columnValue ? columnValue.object : columnValue;

    const _defValue = getObjectItemCellValue(columnValue, column);
    defaultValue.value = _defValue.value;
    defaultValue.children = _defValue.children;
  }

  return defaultValue;
}
