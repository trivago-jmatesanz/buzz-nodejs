import { mysqlConnector, deleteEntity, } from '../_common/common.connectors';
import { contactModel } from './contact.model';

export function selectCommand(obj, args, context, info) {
  return mysqlConnector(obj, args, context, info);
}

export function insertContact(obj, args, context, info) {

  const contact = {
    first_name: args.firstName,
    last_name: args.lastName,
    position: args.position,
    salutation: args.salutation,
    work_status: 1,
    created_by: args.createdBy,
    created_at: new Date(),
  };

  return contactModel.forge(contact).save().then((result) => {
      const parsedResult = JSON.parse(JSON.stringify(result));
      const insertedContact = {
        id: parsedResult.id,
        firstName: parsedResult.first_name,
        lastName: parsedResult.last_name,
        position: parsedResult.position,
        salutation: parsedResult.salutation,
        workStatus: parsedResult.workStatus,
        created_by: parsedResult.created_by,
        created_at: parsedResult.created_at,
      };
      return insertedContact;
    })
    .catch(
      (err) => { return err; },
    );
}

export function deleteContact(obj, args, context, info) {
  const contact = contactModel;
  return deleteEntity(obj, args, context, info, contact);
}
