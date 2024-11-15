import { DeepPartial } from '@shared/types';
import { TypeTableProperty } from '../types';

export default function getGraphqlBodyWithProps(
  properties: DeepPartial<TypeTableProperty>[]
) {
  let body = '';

  properties.forEach((property) => {
    body += ` ${property.name}`;

    if (property.data_type === 'object' || property.data_type === 'file') {
      body += ' { object { id type_id';

      return (body += ` ${getGraphqlBodyWithProps(
        property.children as DeepPartial<TypeTableProperty>[]
      )} } }`);
    }

    if (property.data_type === 'fullname')
      return (body += ' { first_name middle_name last_name }');

    if (property.data_type === 'email') return (body += ' { email }');
    if (property.data_type === 'date') return (body += '{ date }');
    if (property.data_type === 'time') return (body += '{ time }');
    if (property.data_type === 'datetime') return (body += '{ date time }');
  });

  return body;
}
