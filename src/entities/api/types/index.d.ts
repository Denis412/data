/* eslint-disable @typescript-eslint/no-explicit-any */

export type ApiOperation = 'get' | 'paginate' | 'create' | 'update' | 'delete';
export type EntityRelationType = 'single' | 'multiple';

export type ApiOperationResult<
  T extends string,
  K extends ApiOperation,
  S extends boolean,
  R extends Record<string, any>
> = {
  [Property in T as `${S extends true
    ? `${string & Property}${K extends 'get' | 'paginate' ? '' : Capitalize<K>}`
    : `${K}_${string & Property}`}`]: Partial<R>;
};

export interface EntityRelation<T extends Record<string, any>> {
  object: Partial<T>;
}

export interface MutationEntityRelationObject {
  objectId: string;
}

export type MutationEntityRelation<T extends EntityRelationType> = {
  [Property: string]: T extends 'single'
    ? MutationEntityRelationObject
    : MutationEntityRelationObject[];
};

/* ------------------ PAGINATOR ------------------ */

export type PaginatorWhereOperator =
  | 'EQ'
  | 'NEQ'
  | 'FTS'
  | 'IS_NULL'
  | 'IS_NOT_NULL';

export type PaginatorOrderByOrder = 'DESC' | 'ASC';

export interface PaginatorWhere {
  column: string;
  operator: PaginatorWhereOperator;
  value: string | number | null;
  or?: PaginatorWhere[];
  and?: PaginatorWhere[];
}

export interface PaginatorOrderBy {
  column: string;
  order: PaginatorOrderByOrder;
}

export interface PaginatorPayload {
  page: number;
  perPage: number;
  where?: PaginatorWhere;
  orderBy?: PaginatorOrderBy;
}

export interface PaginatorInfo {
  total: number;
  count: number;
  page: number;
  perPage: number;
  from: number;
  to: number;
  hasMorePages: boolean;
}

export interface PaginatorResultObject<T> {
  data: Partial<T>[];
  paginatorInfo: PaginatorInfo;
}

export type PaginatorResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperationResult<T, 'paginate', S, PaginatorResultObject<R>>;

/* ------------------ PAGINATOR ------------------ */

/* -------------------- GET -------------------- */

export interface GetPayload {
  id: string;
}

export type GetResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperationResult<T, 'get', S, Partial<R>>;

/* -------------------- GET -------------------- */

/* ------------------ CREATE ------------------ */

export interface CreatePayload<I> {
  input: I;
}

export interface CreateResultObject<T> {
  recordId: string;
  record: Partial<T>;
  status: number;
}

export type CreateResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperationResult<T, 'create', S, CreateResultObject<R>>;

/* ------------------ CREATE ------------------ */

/* ------------------ UPDATE ------------------ */

export interface UpdatePayload<I> extends CreatePayload<I> {
  id: string;
}

export interface UpdateResultObject<T> {
  recordId: string;
  record: Partial<T>;
  status: number;
}

export type UpdateResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperationResult<T, 'update', S, UpdateResultObject<R>>;

/* ------------------ UPDATE ------------------ */

/* ------------------ DELETE ------------------ */

export type DeletePayload = GetPayload;

export interface DeleteResultObject {
  recordId: string;
  status: number;
}

export type DeleteResult<
  T extends string,
  S extends boolean
> = ApiOperationResult<T, 'delete', S, DeleteResultObject>;

/* ------------------ DELETE ------------------ */
