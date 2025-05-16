import { describe, expect, it, vi } from 'vitest';

import { marshallInputMiddleware } from './marshallInput';

const next = vi.fn(async (args) => ({ output: { calledWith: args.input } }));

describe('marshallInputMiddleware', () => {
  it('should skip marshalling if schema or model is missing', async () => {
    const handler = marshallInputMiddleware(next as any, {} as any);
    const input = { TableName: 'Users', Item: { id: '123' } };
    const result = await handler({ input });

    expect(result.output.calledWith).toEqual(input);
  });

  it('should marshall input with schema and model', async () => {
    class User {
      id!: string;
      name!: string;
    }

    const schema = {
      id: { type: 'String' },
      name: { type: 'String', attributeName: 'full_name' },
    };

    const handler = marshallInputMiddleware(next as any, {} as any);
    const input = {
      TableName: 'Users',
      Item: Object.assign(new User(), { id: 'u1', name: 'John' }),
      schema,
      model: User,
    };

    const result = await handler({ input });

    expect(result.output.calledWith.Item).toEqual({
      id: { S: 'u1' },
      full_name: { S: 'John' },
    });
  });
});

