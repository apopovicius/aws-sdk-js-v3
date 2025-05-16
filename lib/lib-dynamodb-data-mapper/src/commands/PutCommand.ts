import { PutCommand } from '@aws-sdk/lib-dynamodb';

import { BaseCommand } from '../baseCommands/DataMapperCommand';
import { getTableName } from '../marshaller';

export class runPutCommand<T extends object> extends BaseCommand<any, any, any> {
  public readonly clientCommand: PutCommand;

  constructor(input: { Item: T }) {
    super();
    const TableName = getTableName(input.Item);
    this.clientCommand = new PutCommand({Item: input.Item, TableName});
  }
}