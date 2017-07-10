import { mysqlConnector } from '../_common/common.connectors';

export function dbConn(obj, args, context, info) {
  return mysqlConnector(obj, args, context, info);
}
