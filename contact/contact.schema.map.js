import joinMonsterAdapt from 'join-monster-graphql-tools-adapter';
import executableSchema from '../schema';

const schemaMap = joinMonsterAdapt(executableSchema, {
  Query: {
    fields: {
      // add a function to generate the "where condition"
      contact: {
        where: (table, args) => `${table}.id = ${args.id}`,
      },
    },
  },

  Contact: {
    // map the Contact object type to its SQL table
    sqlTable: 'contact',
    uniqueKey: 'id',
    // tag the contact's fields
    fields: {
      salutation: {
        sqlColumn: 'salutation',
      },
      first_name: {
        sqlColumn: 'first_name',
      },
      last_name: {
        sqlColumn: 'last_name',
      },
      position: {
        sqlColumn: 'position',
      },
      work_status: {
        sqlColumn: 'work_status',
      },
    },
  },
});

export default schemaMap;
