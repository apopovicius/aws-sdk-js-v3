import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { runGetCommand, runPutCommand } from './commands';

export interface DataMapperConfig {
  docClient: DynamoDBDocumentClient;
}

export class DataMapper {
  private readonly client: DynamoDBDocumentClient;

  constructor(config: DataMapperConfig) {
    this.client = config.docClient;
  }

  async put<T extends object>(item: T): Promise<T> {
    const command = new runPutCommand({ Item: item });
    await this.client.send(command);
    return item;
  }

  async get<T extends object>(key: Partial<T>): Promise<T> {
    const command = new runGetCommand({ Key: key });
    const response = await this.client.send(command);
    return response;
  }
}