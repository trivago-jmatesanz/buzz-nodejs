import joinMonster from 'join-monster';
import { knex } from '../db/index'; // Import Knex instance for DB connection
import { _ } from 'lodash';

export function mysqlConnector(obj, args, context, info) {
  return joinMonster(info, {}, sql => (
    knex.raw(sql)
  ).then((result) => {
    return result[0];
  }), { dialect: 'mysql' })
    .catch((err) => { return err; }
  );
}

export function deleteEntity(obj, args, context, info, model) {
  return model.query().whereIn('id', args.id)
    .del()
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => { return err; },
    );
}
