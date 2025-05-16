import type { SchemaType } from './SchemaType';

export interface Schema {
  [key: string]: SchemaType;
}