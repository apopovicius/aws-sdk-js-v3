import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { describe, expect, it, vi } from 'vitest';

import { BaseCommand } from './DataMapperCommand';

class TestPutCommand extends BaseCommand<any, any, any> {
  public readonly clientCommand: PutCommand;

  constructor(input: any) {
    super();
    this.clientCommand = new PutCommand(input);
  }
}

describe('BaseCommand', () => {
  it('should add marshalling middleware and resolve without error', async () => {
    const command = new TestPutCommand({ TableName: 'TestTable', Item: { id: '123' } });

    const next = vi.fn().mockResolvedValue({
      response: {},
      output: {},
    });

    const stack = {
      concat: () => ({
        resolveMiddleware: () => next,
      }),
    } as any;

    const handler = command.resolveMiddleware(stack, {});
    const result = await handler({ input: command.input });

    expect(next).toHaveBeenCalled();
    expect(result.output).toEqual({});
  });
});
describe('BaseCommand.addMarshallingMiddleware', () => {
  it('should add marshallInputMiddleware and unmarshallOutputMiddleware to the clientCommand.middlewareStack', () => {
    const add = vi.fn();

    class DummyCommand extends BaseCommand<any, any, any> {
      protected clientCommand: any;
      constructor() {
        super();
        this.clientCommand = {
          middlewareStack: { add },
          input: {},
        };
      }
    }

    const command = new DummyCommand();
    // Expose a public method to call the protected method
    (command as any).callAddMarshallingMiddleware = function() {
      this.addMarshallingMiddleware();
    };
    (command as any).callAddMarshallingMiddleware();

    expect(add).toHaveBeenCalledWith(expect.any(Function), {
      step: 'initialize',
      name: 'SchemaAwareInputMarshaller',
      priority: 'high',
    });
    expect(add).toHaveBeenCalledWith(expect.any(Function), {
      step: 'deserialize',
      name: 'SchemaAwareOutputUnmarshaller',
      priority: 'low',
    });
    expect(add).toHaveBeenCalledTimes(2);
  });
});