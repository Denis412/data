import { useRoute } from 'vue-router';
// import { typesConfig } from '../constants';
import { getType } from '@entities/type';
import { computed, ref, watch } from 'vue';
import { UseQueryReturn } from '@vue/apollo-composable';
import { getGraphqlBody, GetPayload, GetResult } from '@entities/api';
import { Property, RelationPropertyMeta, Type } from '@entities/type/types';
import { DeepPartial } from '@shared/types';
import { TypeTableProperty } from '../types';
import { getGraphqlBodyWithProps } from '../helpers';

export default function useTableType() {
  const $route = useRoute();

  const typeQuery =
    ref<UseQueryReturn<GetResult<'type', true, Type>, GetPayload>>();

  const _type = ref<DeepPartial<Type>>();
  const _typeProperties = ref<DeepPartial<TypeTableProperty>[]>([]);
  const _itemProperties = ref<DeepPartial<TypeTableProperty>[]>([]);
  const _body = ref<string>('');

  const _gqlBody = computed(() => {
    if (!_type.value?.name || !_body.value) return '';

    return `${getGraphqlBody({
      typeName: _type.value?.name ?? '',
      body: _body.value,
      operationName: 'paginate',
      system: false,
    })}`;
  });

  watch(
    () => $route.query.typeId,
    (typeId) => {
      if (!typeId) return;

      typeQuery.value = getType(
        { id: typeId as string },
        '{ id name properties { name label data_type meta } }'
      );

      typeQuery.value?.onResult((typeResult) => {
        if (!typeResult.data) return;
        _type.value = typeResult.data.type;

        _typeProperties.value =
          _type.value?.properties
            ?.filter((pr) => !pr?.name?.includes('object_'))
            .map(mapTypePropertyToTableProperty) ?? [];
      });
    },
    { immediate: true }
  );

  function mapTypePropertyToTableProperty(
    property?: DeepPartial<Property>
  ): DeepPartial<TypeTableProperty> {
    if (!property) return {};

    return {
      ...JSON.parse(JSON.stringify(property)),
      sortable: true,
      children: [],
      parent: null,
    };
  }

  async function expandProperty(property: DeepPartial<TypeTableProperty>) {
    const relatedTypeId = (property.meta as RelationPropertyMeta)
      ?.related_types?.[0].type_id;

    if (!relatedTypeId) return;

    const relatedTypeResult = await getType(
      { id: relatedTypeId },
      '{ properties { name label data_type meta } }'
    )?.refetch();
    const relatedTypeProperties = relatedTypeResult?.data.type.properties;

    if (!property.children) property.children = [];

    property.children =
      relatedTypeProperties
        ?.filter((pr) => !pr?.name?.includes('object_'))
        .map(
          (child) =>
            ({
              ...mapTypePropertyToTableProperty(child),
              parent: JSON.parse(JSON.stringify(property)),
            } as DeepPartial<TypeTableProperty>)
        ) ?? [];
  }

  function addProperty(
    property: DeepPartial<TypeTableProperty>,
    propertiesTree?: DeepPartial<TypeTableProperty>[]
  ) {
    if (property.parent) {
      return addProperty(property.parent, [
        ...(propertiesTree ?? []),
        property,
      ]);
    }

    const typeProperty = _typeProperties.value.find(
      (prop) => prop.name === property.name
    );

    if (!typeProperty) return;

    typeProperty.selected = true;

    const rootChildren = JSON.parse(JSON.stringify(typeProperty));
    let currentChildren = rootChildren;
    let currentChildrens = rootChildren.children as TypeTableProperty[];

    // const addedProperty = JSON.parse(JSON.stringify(typeProperty));

    for (const treeProperty of propertiesTree ?? []) {
      const findedChildren = currentChildrens?.find(
        (pr) => pr.name === treeProperty.name
      );
      if (!findedChildren) continue;

      currentChildren.children = [findedChildren];
      currentChildren = findedChildren;
      currentChildrens = findedChildren.children;

      currentChildren.selected = true;
    }

    if (!propertiesTree?.length) rootChildren.children = [];

    _itemProperties.value.push(rootChildren);
    _body.value = `{ ${getGraphqlBodyWithProps(_itemProperties.value)} }`;
  }

  function removeProperty(property: DeepPartial<TypeTableProperty>) {
    const itemPropertyIndex = _itemProperties.value.findIndex(
      (prop) => prop.name === property.name
    );

    if (itemPropertyIndex === -1) return;
    _itemProperties.value.splice(itemPropertyIndex, 1);
    _body.value = `{ ${getGraphqlBodyWithProps(_itemProperties.value)} }`;
  }

  return {
    typeQuery,

    type: _type,
    typeProperties: _typeProperties,
    itemProperties: _itemProperties,

    body: _body,
    gqlBody: _gqlBody,

    expandProperty,
    addProperty,
    removeProperty,
  };
}
