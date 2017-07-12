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

      accountHotel: {
        sqlTable: 'account_hotel',
        uniqueKey: 'id',
        sqlBatch: {
          thisKey: 'id',
          parentKey: 'id',
          sqlJoin: (accountHotelTable, accountTable) => `${accountHotelTable}.id = ${accountTable}.id`,
        }
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

  AccountHotel: {
    sqlTable: 'account_hotel',
    uniqueKey: 'id',

    fields: {
      item_id: {
        sqlColumn: 'item_id',
      },
      chain_name: {
        sqlColumn: 'chain_name',
      },
      category:  {
        sqlColumn: 'category',
      },
      hotel_type: {
        sqlColumn: 'hotel_type',
      },
      content_score: {
        sqlColumn: 'content_score',
      },
      news: {
        sqlColumn: 'news',
      },
    }
  }
});

export default schemaMap;
