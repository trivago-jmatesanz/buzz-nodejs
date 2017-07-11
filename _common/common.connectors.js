import joinMonster from 'join-monster';
import { knex } from '../db/index'; // Import Knex instance for DB connection

export function mysqlConnector(obj, args, context, info) {
  return joinMonster(info, {}, sql => (
    knex.raw(sql)
  ).then((result) => {
    console.log(sql);
    return result[0];
  }), { dialect: 'mysql' })
    .catch((err) => { return err; }
  );
}

export function deleteEntity(obj, args, context, info, entity) {
  return entity.forge({ id: args.id })
    .destroy()
    .then(() => {
      return { id: args.id };
    })
    .catch((err) => { return err; },
    );
}
