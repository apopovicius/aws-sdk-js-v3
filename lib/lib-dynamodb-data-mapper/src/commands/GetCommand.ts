import { GetCommand } from '@aws-sdk/lib-dynamodb';

import { BaseCommand } from '../baseCommands/DataMapperCommand';
import { getTableName } from '../marshaller';

export class runGetCommand<T extends object> extends BaseCommand<any, any, any> {
  public readonly clientCommand: GetCommand;

  constructor(input: { Key: Partial<T> }) {
    super();
    const TableName = getTableName(input.Key);
    this.clientCommand = new GetCommand({ TableName, Key: input.Key });
  }
}