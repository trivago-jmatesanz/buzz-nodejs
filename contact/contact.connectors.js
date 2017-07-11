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
  const contact = contactModel;
  return contact;
}
