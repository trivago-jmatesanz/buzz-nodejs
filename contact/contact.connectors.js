import { mysqlConnector, deleteEntity, } from '../_common/common.connectors';
import { contactModel } from './contact.model';

export function selectCommand(obj, args, context, info) {
  return mysqlConnector(obj, args, context, info);
}

export function insertContact(obj, args, context, info) {
  const contact = args;
  contact.created_at = new Date();
  return contactModel.forge(contact).save().then((result) => {
      const parsedResult = JSON.parse(JSON.stringify(result));
      return parsedResult;
    })
    .catch(
      (err) => { return err; },
    );
}

export function deleteContact(obj, args, context, info) {
  return deleteEntity(obj, args, context, info, contactModel);
}

export function updateContact(obj, args, context, info) {
  const contact = args;
  contact.updated_at = new Date();
  return contactModel.where('id', args.id)
  .save(contact,
    {
      method: 'update',
      patch: true
    }
  ).then((result) => {
    const parsedResult = JSON.parse(JSON.stringify(result));
    return parsedResult;
  }).catch(
    (err) => { return err; },
  );
}

export function generateFullName(obj, args, context, info) {
  return contactModel.where('id', obj.id)
    .fetch({ columns: ['first_name', 'last_name'] })
    .then((result) => {
      const parsedResult = JSON.parse(JSON.stringify(result));
      const fullName = `${parsedResult.first_name} ${parsedResult.last_name}`;
      return fullName;
    })
    .catch((err) => { return err; },
    );
}
