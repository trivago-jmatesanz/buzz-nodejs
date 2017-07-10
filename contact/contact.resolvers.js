import { dbConn } from './contact.connectors';

export const resolvers = {
  Query: {
    contact: (obj, args, context, info) => dbConn(obj, args, context, info),
    contacts: (obj, args, context, info) => dbConn(obj, args, context, info),
  },
  Contact: {},
};
