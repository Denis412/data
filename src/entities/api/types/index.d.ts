/* eslint-disable @typescript-eslint/no-explicit-any */

export type ApiOperation<
  T extends string,
  K extends 'get' | 'paginate' | 'create' | 'update' | 'delete',
  S extends boolean,
  R extends Record<string, any>
> = {
  [Property in T as `${S extends true
    ? `${string & Property}${K extends 'get' | 'paginate' ? '' : Capitalize<K>}`
    : `${K}_${string & Property}`}`]: R;
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
}

export interface PaginatorResultObject<T> {
  data: T[];
  paginatorInfo: PaginatorInfo;
}

export type PaginatorResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperation<T, 'paginate', S, PaginatorResultObject<R>>;

/* ------------------ PAGINATOR ------------------ */

/* -------------------- GET -------------------- */

export interface GetPayload {
  id: string;
}

export type GetResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperation<T, 'get', S, R>;

/* -------------------- GET -------------------- */

/* ------------------ CREATE ------------------ */

export interface CreatePayload<I> {
  input: I;
}

export interface CreateResultObject<T> {
  recordId: string;
  record: T;
  status: number;
}

export type CreateResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperation<T, 'create', S, CreateResultObject<R>>;

/* ------------------ CREATE ------------------ */

/* ------------------ UPDATE ------------------ */

export interface UpdatePayload<I> extends CreatePayload<I> {
  id: string;
}

export interface UpdateResultObject<T> {
  recordId: string;
  record: T;
  status: number;
}

export type UpdateResult<
  T extends string,
  S extends boolean,
  R extends Record<string, any>
> = ApiOperation<T, 'update', S, UpdateResultObject<R>>;

/* ------------------ UPDATE ------------------ */

/* ------------------ DELETE ------------------ */

export type DeletePayload = GetPayload;

export interface DeleteResult {
  recordId: string;
  status: number;
}

/* ------------------ DELETE ------------------ */
