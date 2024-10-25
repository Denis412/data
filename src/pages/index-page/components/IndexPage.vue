<template>
  <q-page class="row items-center justify-evenly">
    <main-table
      :items="items"
      :columns="columns"
      @click-body-row-cell="onClickBodyRowCell"
    />
  </q-page>
</template>

<script setup lang="ts">
/* eslint-disable */

import { MainTable } from '@widgets/table';
import { getCellValue } from '@widgets/table';
import { TableColumn } from '@widgets/table/main-table/types';
import { CellValue } from '@widgets/table/main-table/helpers/get-cell-value';

defineOptions({
  name: 'IndexPage',
});

function onClickBodyRowCell(item: any, value: CellValue, column: TableColumn) {
  console.log('click', item, value, column);
}

const columns: TableColumn[] = [
  {
    name: 'name',
    label: 'Название',
  },
  {
    name: 'team',
    label: 'Команда',
    children: [
      {
        name: 'name',
        label: 'Название',
      },
    ],
  },
  {
    name: '',
    label: '',
    children: [
      {
        name: 'name',
        label: 'Название',
      },
      {
        name: 'team',
        label: 'Команда',
        children: [
          {
            name: 'name',
            label: 'Название',
          },
        ],
      },
    ],
  },
  {
    name: 'team',
    label: 'Команда',
    children: [
      {
        name: 'description',
        label: 'Описание',
      },
    ],
  },
  {
    name: 'team',
    label: 'Команда',
    children: [
      {
        name: 'description',
        label: 'Описание',
      },
      {
        name: 'review',
        label: 'Отзыв',
      },
      {
        name: 'deals',
        label: 'Сделки',
        children: [
          {
            name: 'name',
            label: 'Название',
          },
          {
            name: 'description',
            label: 'Описание',
          },
          {
            name: 'team',
            label: 'Команда',
            children: [
              {
                name: 'name',
                label: 'Нзвание',
              },
            ],
          },
        ],
      },
    ],
  },
];

const items: any[] = [
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1',
      description: 'Описание',
      review: 'Отзыв',
      deals: [
        {
          object: {
            name: 'Сделка1',
            description: 'Описание сделки1',
          },
        },
        {
          name: 'Сделка2',
          description: 'Описание сделки2',
          team: {
            name: 'Название команды 1',
          },
        },
      ],
    },
  },
];

const cellValue = getCellValue(items[0], columns[1]);
console.log(cellValue);
</script>
