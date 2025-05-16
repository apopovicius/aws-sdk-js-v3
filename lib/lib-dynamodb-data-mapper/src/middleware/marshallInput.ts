// 📁 src/middleware/marshallInputMiddleware.ts

import type {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  InitializeMiddleware,
} from '@smithy/types';

import { DataMarshaller } from '../marshaller/DataMarshaller';

export const marshallInputMiddleware: InitializeMiddleware<any, any> =
  (next: InitializeHandler<any, any>) =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<any>> => {
    const { schema, model, ...rest } = args.input as any;

    if (!schema || !model) {
      return next(args); // Fallback to default SDK behavior
    }

    const marshaller = new DataMarshaller(args.input);

    const input = {
      ...rest,
      ...(args.input.Item && { Item: marshaller.marshall(args.input.Item) }),
      ...(args.input.Key && { Key: marshaller.marshall(args.input.Key) }),
      _sdkMarshallSkipped: true, // Flag to indicate that marshalling was handled by this middleware
    };

    return next({ ...args, input });
  };