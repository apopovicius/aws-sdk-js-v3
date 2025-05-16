/**
 * Enumeration of logical schema types supported by this mapper.
 */
export const TypeTags = {
  Any: 'Any',
  Boolean: 'Boolean',
  Date: 'Date',
  Document: 'Document',
  List: 'List',
  Map: 'Map',
  Null: 'Null',
  Number: 'Number',
  Set: 'Set',
  String: 'String',
  Tuple: 'Tuple',
} as const;

export type TypeTag = keyof typeof TypeTags;

export interface BaseType<T = any> {
  type: TypeTag;
  attributeName?: string;
  defaultProvider?: () => T;
  versionAttribute?: boolean;
}

/**
 * A node that allows any value and uses runtime detection for marshalling.
 */
export interface AnyType extends BaseType {
  type: 'Any';
}

export interface BooleanType extends BaseType<boolean> {
  type: 'Boolean';
}

export interface DateType extends BaseType<string | number | Date> {
  type: 'Date';
}

export interface DocumentType<T = Record<string, any>> extends BaseType<T> {
  type: 'Document';
  members: Schema;
  valueConstructor?: new () => T;
}

export interface ListType<T = any> extends BaseType<T[]> {
  type: 'List';
  memberType: SchemaType;
}

export interface MapType<T = any> extends BaseType<Map<string, T>> {
  type: 'Map';
  memberType: SchemaType;
}

export interface NullType extends BaseType<null> {
  type: 'Null';
}

export interface NumberType extends BaseType<number> {
  type: 'Number';
}

export interface SetType extends BaseType<Set<any>> {
  type: 'Set';
  memberType: 'String' | 'Number' | 'Binary';
}

export interface StringType extends BaseType<string> {
  type: 'String';
}

export interface TupleType<T extends any[] = any[]> extends BaseType<T> {
  type: 'Tuple';
  members: SchemaType[];
}

export type SchemaType =
  | AnyType
  | BooleanType
  | DateType
  | DocumentType
  | ListType
  | MapType
  | NullType
  | NumberType
  | SetType
  | StringType
  | TupleType;

export type Schema = Record<string, SchemaType>;