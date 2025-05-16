// 📁 src/middleware/schemaMetadataResolverMiddleware.ts

import type {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  InitializeMiddleware,
} from '@smithy/types';

import { getSchema, getTableName } from '../marshaller/';

export const schemaMetadataResolverMiddleware: InitializeMiddleware<any, any> =
  (next: InitializeHandler<any, any>) =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<any>> => {
    const input = { ...args.input };

    const target = input.Item || input.Key || input;

    try {
      const schema = getSchema(target);
      const model = target.constructor;
      const TableName = getTableName(target);

      input.schema = schema;
      input.model = model;

      if (!input.TableName) {
        input.TableName = TableName;
      }
    } catch {
      // No schema attached – do nothing
    }

    return next({ ...args, input });
  };