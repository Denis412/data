import { EntityRelation, MutationEntityRelation } from '@entities/api/types';

export interface Deal {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  name: string;
  deals: EntityRelation<Deal>[];
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface OrderCreateInput {
  name: string;
  deals?: MutationEntityRelation<'multiple'>;
}

export type OrderUpdateInput = OrderCreateInput;
