import type {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  DeserializeMiddleware,
} from '@smithy/types';

import { DataMarshaller } from '../marshaller/DataMarshaller';

export const unmarshallOutputMiddleware: DeserializeMiddleware<any, any> =
  (next: DeserializeHandler<any, any>) =>
  async (args: DeserializeHandlerArguments<any>): Promise<DeserializeHandlerOutput<any>> => {
    const response = await next(args);
    const { schema, model } = args.input as any;

    if (!schema || !model || !response.output?.Item) {
      return response;
    }

    const marshaller = new DataMarshaller(args.input);
    response.output.Item = marshaller.unmarshall(response.output.Item);

    return response;
  };