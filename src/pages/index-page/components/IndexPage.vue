<script setup lang="ts">
/* eslint-disable */

import { MainTable, TableColumn, CellValue } from '@widgets/table';
import { TypeObjectsSelect } from '@features/type-objects-select';
import {
  TableRowAction,
  TableTab,
  TableTabAction,
} from '@widgets/table/main-table/types';
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

function onClickBodyRowCell(item: any, value: CellValue, column: TableColumn) {
  console.log('click', item, value, column);
}

function onClickTab(tab: TableTab) {
  console.log('click tab', tab);
}

function onClickTabAction(tab: TableTab, action: TableTabAction) {
  console.log('click tab action', tab, action);
}

function onSort(column: TableColumn) {
  console.log('sort', column);
}

const rowActions = ref<TableRowAction[]>([
  {
    name: 'action1',
    label: 'Действие первое',
  },
]);

const tabs = ref<TableTab[]>([
  {
    name: 'Tab1',
    label: 'Таб первый',
    actions: [
      {
        label: 'Действие первое',
        handler: () => {
          console.log('click action1');
        },
      },
      {
        label: 'Действие второе',
        handler: () => {
          console.log('click action2');
        },
      },
    ],
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
  {
    name: 'Tab2',
    label: 'Таб второй',
  },
]);

const columns = ref<TableColumn[]>([
  {
    name: 'name',
    label: 'Название',
    sortable: true,
  },
  {
    name: 'team',
    label: 'Команда',
    sortable: true,
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
    sortable: true,
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
]);

const items: any[] = [
  {
    name: 'Заказ1',
    team: {
      name: 'Команда1fndsjkdfjdsfjkdk jfdjkfdjfjdsf jkdkj kh jkh jkhjk hjk hkjhkjhjkh jkhjkhjk hkjhjkhjk hjkhkjh jkhjkhkjh kj',
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
</script>

<template>
  <q-page class="row items-center justify-evenly index-page">
    <main-table
      :items="items"
      :tabs="tabs"
      :columns="columns"
      :row-actions="rowActions"
      @click-body-row-cell="onClickBodyRowCell"
      @click-tab="onClickTab"
      @click-tab-action="onClickTabAction"
      @sort="onSort"
    />

    <!-- <type-objects-select
      type-name="subject"
      label-prop="fullname->last_name&first_name&middle_name"
      body="{ id fullname { first_name middle_name last_name } }"
    /> -->
  </q-page>
</template>

<style scoped lang="scss">
.index-page {
  background-color: lightgray;
}
</style>
