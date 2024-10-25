export interface Order {
  id: string;
  name: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface OrderCreateInput {
  name: string;
}

export type OrderUpdateInput = OrderCreateInput;
