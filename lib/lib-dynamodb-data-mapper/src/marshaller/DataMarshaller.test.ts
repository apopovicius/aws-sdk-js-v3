import { describe, expect,it } from 'vitest';

import { DataMarshaller } from './DataMarshaller';
import type { Schema } from './schema';
import { DynamoDbSchema } from './schema/schemaMetadata';

class User {
  id!: string;
  name!: string;
  age?: number;
}

const userSchema: Schema = {
  id: { type: 'String' },
  name: { type: 'String', attributeName: 'full_name' },
  age: { type: 'Number' },
};

Object.defineProperty(User.prototype, DynamoDbSchema, {
  value: userSchema,
});

describe('DataMarshaller (with prototype-based schema)', () => {
  const marshaller = new DataMarshaller(new User());

  it('should marshall an object to DynamoDB format', () => {
    const user = Object.assign(new User(), {
      id: 'u1',
      name: 'Alice',
      age: 30,
    });

    const result = marshaller.marshall(user);

    expect(result).toEqual({
      id: { S: 'u1' },
      full_name: { S: 'Alice' },
      age: { N: '30' },
    });
  });

  it('should omit undefined fields in marshall()', () => {
    const user = Object.assign(new User(), {
      id: 'u1',
      name: 'Alice',
    });

    const result = marshaller.marshall(user);

    expect(result).toEqual({
      id: { S: 'u1' },
      full_name: { S: 'Alice' },
    });
  });

  it('should unmarshall DynamoDB format into class instance', () => {
    const item = {
      id: { S: 'u1' },
      full_name: { S: 'Alice' },
      age: { N: '30' },
    };

    const result: User = marshaller.unmarshall(item);

    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe('u1');
    expect(result.name).toBe('Alice');
    expect(result.age).toBe(30);
  });

  it('should handle missing fields during unmarshall()', () => {
    const item = {
      id: { S: 'u1' },
      full_name: { S: 'Alice' },
    };

    const result: User = marshaller.unmarshall(item);

    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe('u1');
    expect(result.name).toBe('Alice');
    expect(result.age).toBeUndefined();
  });

  it('should marshall and unmarshall empty objects', () => {
    const user = new User();
    const marshalled = marshaller.marshall(user);
    expect(marshalled).toEqual({});
    const unmarshalled: User = marshaller.unmarshall({});
    expect(unmarshalled).toBeInstanceOf(User);
    expect(unmarshalled.id).toBeUndefined();
    expect(unmarshalled.name).toBeUndefined();
    expect(unmarshalled.age).toBeUndefined();
  });

  it('should ignore extra fields not in schema during marshall', () => {
    const user = Object.assign(new User(), {
      id: 'u1',
      name: 'Alice',
      age: 30,
      extra: 'ignored'
    });
    const result = marshaller.marshall(user);
    expect(result).toEqual({
      id: { S: 'u1' },
      full_name: { S: 'Alice' },
      age: { N: '30' },
    });
  });

  it('should ignore extra fields not in schema during unmarshall', () => {
    const item = {
      id: { S: 'u1' },
      full_name: { S: 'Alice' },
      age: { N: '30' },
      extra: { S: 'ignored' }
    };
    const result: User = marshaller.unmarshall(item);
    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe('u1');
    expect(result.name).toBe('Alice');
    expect(result.age).toBe(30);
    expect((result as any).extra).toBeUndefined();
  });

  it('should handle null values in marshall', () => {
    const user = Object.assign(new User(), {
      id: 'u1',
      name: null,
      age: 30,
    });
    const result = marshaller.marshall(user);
    // null is not omitted, but marshalled as { NULL: true }
    expect(result).toEqual({
      id: { S: 'u1' },
      full_name: { NULL: true },
      age: { N: '30' },
    });
  });

  it('should handle null values in unmarshall', () => {
    const item = {
      id: { S: 'u1' },
      full_name: { NULL: true },
      age: { N: '30' },
    };
    const result: User = marshaller.unmarshall(item);
    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe('u1');
    expect(result.name).toBeNull();
    expect(result.age).toBe(30);
  });
});
