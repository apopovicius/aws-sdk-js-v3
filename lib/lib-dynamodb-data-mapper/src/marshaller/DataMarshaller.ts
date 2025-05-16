import { marshall as sdkMarshall, unmarshall as sdkUnmarshall } from '@aws-sdk/util-dynamodb';

import type { Schema } from './schema';
import { getSchema } from './schema';

export class DataMarshaller {
  private readonly schema: Schema;
  private readonly model: new () => any;

  constructor(input: object) {
    const model = (input as any).constructor;
    this.schema = getSchema(input);
    this.model = model;
  }

  marshall<T extends object>(input: T): Record<string, any> {
    const plainObject: Record<string, any> = {};

    for (const key of Object.keys(this.schema)) {
      const { attributeName = key } = this.schema[key];
      const value = (input as any)[key];
      if (value !== undefined) {
        plainObject[attributeName] = value;
      }
    }

    return sdkMarshall(plainObject);
  }

  unmarshall<T extends object>(item: Record<string, any>): T {
    const raw = sdkUnmarshall(item);
    const instance = new this.model();

    for (const key of Object.keys(this.schema)) {
      const { attributeName = key } = this.schema[key];
      (instance as any)[key] = raw[attributeName];
    }

    return instance;
  }
}