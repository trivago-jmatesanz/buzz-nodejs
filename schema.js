import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';

import { schema as ContactSchema } from './contact/contact.schema';
import { resolvers as ContactResolvers } from './contact/contact.resolvers';
import { schema as AccountSchema } from './account/account.schema';
import { resolvers as AccountResolvers } from './account/account.resolvers';

const schema    = mergeTypes([ContactSchema, AccountSchema]);
const resolvers = mergeResolvers([ContactResolvers, AccountResolvers]);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

export default executableSchema;
