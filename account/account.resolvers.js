import { dbConn } from './account.connectors';

export const resolvers = {
  Query: {
    account: (obj, args, context, info) => dbConn(obj, args, context, info),
  },
  Account: {},
};
