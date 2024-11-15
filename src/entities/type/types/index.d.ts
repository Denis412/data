export type PropertyDataType =
  | 'text'
  | 'object'
  | 'file'
  | 'list'
  | 'number'
  | 'toggle'
  | 'email'
  | 'fullname'
  | 'datetime'
  | 'date'
  | 'time';

export interface PropertyMultiple {
  status: boolean;
  max_number: number;
  button_text: string;
}

export interface TextPropertyMeta {
  min: number;
  max: number;
  placeholder: string;
  mask: string;
}

export interface DatetimePropertyMeta {
  properties: Property[];
}

export interface NumberAuthoincrement {
  status: boolean;
  start_value: number;
  step: number;
}

export interface NumberPropertyMeta {
  min: number;
  max: number;
  type: string;
  after_dot: number;
  placeholder: string;
  mask: string;
  autoincrement: NumberAuthoincrement;
}

export interface TimePropertyMeta {
  min: string;
  max: string;
  format: string;
  mask: string;
  default_current_date_and_time: boolean;
}

export interface DatePropertyMeta {
  min: string;
  max: string;
  consider_time_zones: boolean;
  default_current_date_and_time: boolean;
  mask: string;
}

export interface FullnameRequired {
  first_name: boolean;
  middle_name: boolean;
  last_name: boolean;
}

export interface FullnamePropertyMeta {
  fullname_min: number;
  fullname_max: number;
  mask: string;
  required: FullnameRequired;
}

export interface PropertyRelatedType {
  type_id: string;
  inverse_relation_property_id: string;
  inverse_relation: boolean;
  inverse_relation_name: string;
  inverse_relation_label: string;
  inverse_relation_multiple: boolean;
  select_all: boolean;
  type: Type;
}

export interface RelationPropertyMeta {
  related_types: PropertyRelatedType[];
  related_non_typed_objects: Record<string, never>;
}

export interface PropertyCategory {
  id: string;
  label: string;
  order: number;
  default: boolean;
}

export interface FileConfig {
  min: number;
  max: number;
  placeholder: string;
  categories: PropertyCategory[];
  extensions: Record<string, never>;
  select_only_from_list: boolean;
}

export interface FilePropertyMeta {
  related_types: PropertyRelatedType[];
  config: FileConfig;
}

export type PropertyMeta =
  | TextPropertyMeta
  | DatetimePropertyMeta
  | NumberPropertyMeta
  | TimePropertyMeta
  | DatePropertyMeta
  | FullnamePropertyMeta
  | RelationPropertyMeta
  | FilePropertyMeta;

export interface Property {
  id: string;
  type_id: string;
  name: string;
  label: string;
  description: string;
  required: boolean;
  system: boolean;
  unique: boolean;
  data_type: PropertyDataType;
  multiple: PropertyMultiple;
  guarded: boolean;
  meta: PropertyMeta;
  property_group_id: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface Type {
  id: string;
  name: string;
  description: string;
  system: boolean;
  level: number;
  label: string;
  properties: Property[];
  author_id: string;
  created_at: string;
  updated_at: string;
}
