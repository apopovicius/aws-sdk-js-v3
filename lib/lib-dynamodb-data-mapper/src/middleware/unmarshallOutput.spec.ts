import { describe, expect, it, vi } from 'vitest';

import { unmarshallOutputMiddleware } from './unmarshallOutput';

const next = vi.fn(async (args) => ({ output: { Item: args.input._mockItem } }));

describe('unmarshallOutputMiddleware', () => {
  it('should skip unmarshalling if schema or model is missing', async () => {
    const handler = unmarshallOutputMiddleware(next as any, {} as any);
    const input = { _mockItem: { id: { S: '123' } } };
    const result = await handler({ input } as any);
    expect(result.output.Item).toEqual({ id: { S: '123' } });
  });

  it('should unmarshall output into model if schema is present', async () => {
    class User {
      id!: string;
      name!: string;
    }

    const schema = {
      id: { type: 'String' },
      name: { type: 'String', attributeName: 'full_name' },
    };

    const handler = unmarshallOutputMiddleware(next as any, {} as any);
    const input = {
      schema,
      model: User,
      _mockItem: {
        id: { S: '123' },
        full_name: { S: 'John' },
      },
    };

    const result = await handler({ input } as any);
    expect(result.output.Item).toBeInstanceOf(User);
    expect(result.output.Item.name).toBe('John');
  });
});