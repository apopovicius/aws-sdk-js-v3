import { Command as $Command } from '@smithy/smithy-client';
import type {
  MiddlewareStack,
} from '@smithy/types';

import { marshallInputMiddleware, unmarshallOutputMiddleware } from '../middleware/';

export abstract class BaseCommand<
  Input extends object,
  Output extends object,
  ResolvedClientConfig
> extends $Command<Input, Output, ResolvedClientConfig> {
  protected abstract clientCommand: $Command<Input, Output, ResolvedClientConfig>;

  public get input(): Input {
    return this.clientCommand.input;
  }

   protected addMarshallingMiddleware(): void {
    this.clientCommand.middlewareStack.add(marshallInputMiddleware, {
      step: 'initialize',
      name: 'SchemaAwareInputMarshaller',
      priority: 'high',
    });

    this.clientCommand.middlewareStack.add(unmarshallOutputMiddleware, {
      step: 'deserialize',
      name: 'SchemaAwareOutputUnmarshaller',
      priority: 'low',
    });
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<Input, Output>,
    configuration: ResolvedClientConfig,
    options?: any
  ) {
    this.addMarshallingMiddleware();
    const stack = clientStack.concat(this.middlewareStack);
    return this.clientCommand.resolveMiddleware(stack, configuration, options);
  }
}