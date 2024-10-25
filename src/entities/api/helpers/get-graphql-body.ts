import { capitalize } from '@shared';

export interface GetGraphqlBodyOptions {
  typeName: string;
  system: boolean;
  operationName: string;
  body?: string;
}

export function GetGraphqlBodyCreateMutation(options: GetGraphqlBodyOptions) {
  const { typeName, system, body } = options;

  return `
    mutation create${capitalize(typeName)}($input: ${
    system ? `${typeName}CreateInput!` : `create_${typeName}_input!`
  }) {
      ${system ? `${typeName}Create` : `create_${typeName}`}(input: $input) {
        recordId
        record ${body ?? '{ id }'}
      }
    }
  `;
}

export function GetGraphqlBodyUpdateMutation(options: GetGraphqlBodyOptions) {
  const { typeName, system, body } = options;

  return `
    mutation update${capitalize(typeName)}($id: String!, $input: ${
    system ? `${typeName}UpdateInput!` : `update_${typeName}_input!`
  }) {
      ${
        system ? `${typeName}Update` : `update_${typeName}`
      }(id: $id, input: $input) {
        recordId
        record ${body ?? '{ id }'}
      }
    }
  `;
}

export function GetGraphqlBodyDeleteMutation(options: GetGraphqlBodyOptions) {
  const { typeName, system } = options;

  return `
    mutation delete${capitalize(typeName)}($id: String!) {
      ${system ? `${typeName}Delete` : `delete_${typeName}`}(id: $id) {
        recordId
        status
      }
    }
  `;
}

export function GetGraphqlBodyPaginateQuery(options: GetGraphqlBodyOptions) {
  const { typeName, system, body } = options;

  return `
    mutation paginate${capitalize(
      typeName
    )}($page: Int!, $perPage: Int!, $where: ${
    system ? 'PaginatorWhere' : 'ObjectPaginatorWhere'
  }, $orderBy: ${system ? 'PaginatorOrderBy' : 'ObjectPaginatorOrderBy'}) {
      ${
        system ? typeName : `paginate_${typeName}`
      }(page: $page, perPage: $perPage, where: $where, orderBy: $orderBy) {
        data ${body ?? '{ id }'}
        paginatorInfo {
          total
          count
        }
      }
    }
  `;
}

export function GetGraphqlBodyGetQuery(options: GetGraphqlBodyOptions) {
  const { typeName, system, body } = options;

  return `
    mutation get${capitalize(typeName)}($id: String!) {
      ${system ? typeName : `get_${typeName}`}(id: $id) {
        ${body ?? 'id'}
      }
    }
  `;
}

export default function getGraphqlBody(options: GetGraphqlBodyOptions) {
  const { operationName } = options;

  switch (operationName) {
    case 'create':
      return GetGraphqlBodyCreateMutation(options);
    case 'update':
      return GetGraphqlBodyUpdateMutation(options);
    case 'delete':
      return GetGraphqlBodyDeleteMutation(options);
    case 'paginate':
      return GetGraphqlBodyPaginateQuery(options);
    case 'get':
      return GetGraphqlBodyGetQuery(options);
    default:
      return '';
  }
}
