import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { beforeEach,describe, expect, it, vi } from 'vitest';

import { DataMapper } from './DataMapper';
import { DynamoDbSchema } from './marshaller';

  class User {
    id = '123';
    name = 'Alice';
  
  } 
  
  Object.defineProperty(User.prototype, DynamoDbSchema, {
    value: {
    id: { type: 'String' },
    name: { type: 'String', attributeName: 'full_name' },
    age: { type: 'Number' },
    }
  });

describe("DynamoDBDataMapper", () => {
  let mockSend: ReturnType<typeof vi.fn>;
  let mockClient: DynamoDBDocumentClient;

  beforeEach(() => {
    mockSend = vi.fn();
    mockClient = { send: mockSend } as any;
  });

  it("should be instantiated with a document client", () => {
    const dummyClient = {} as any;
    const mapper = new DataMapper({ docClient: dummyClient });
    expect(mapper).toBeInstanceOf(DataMapper);
  });

  it('calls DynamoDB put operation with item', async () => {
    mockSend.mockResolvedValueOnce({});
    const mapper = new DataMapper({ docClient: mockClient });

    const result = await mapper.put(new User());

    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend.mock.calls[0][0].input.Item).toEqual({ id: '123', name: 'Alice', age: 30 });
    expect(result).toBeInstanceOf(User);
  });

  it('calls DynamoDB get operation and hydrates object', async () => {
    mockSend.mockResolvedValueOnce({
      Item: { id: '123', name: 'Alice', age: 30 },
    });
    const mapper = new DataMapper({ docClient: mockClient });

    const result = await mapper.get({ id: '123' }, User);

    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend.mock.calls[0][0].input.Key).toEqual({ id: '123' });
    expect(result).toBeInstanceOf(User);
    expect(result.name).toBe('Alice');
  });
});