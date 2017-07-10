import joinMonsterAdapt from 'join-monster-graphql-tools-adapter';
import executableSchema from '../schema';

const schemaMap = joinMonsterAdapt(executableSchema, {
  Query: {
    fields: {
      // add a function to generate the "where condition"
      account: {
        where: (table, args) => `${table}.id = ${args.id}`,
      },
    },
  },

  Account: {
    // map the Contact object type to its SQL table
    sqlTable: 'account',
    uniqueKey: 'id',
    // tag the contact's fields
    fields: {
      name: {
        sqlColumn: 'name',
      },
      contacts: {
        junction: {
          sqlTable: 'account_contact',
          uniqueKey: ['account_id', 'contact_id'],
          sqlBatch: {
            thisKey: 'account_id',
            parentKey: 'id',
            sqlJoin: (accountContactTable, contactTable) => `${accountContactTable}.contact_id = ${contactTable}.id`,
          }
        }
      },
    },
  },
});

export default schemaMap;
