import {
  selectCommand,
  insertContact,
  deleteContact,
  updateContact,
  generateFullName
} from './contact.connectors';

export const resolvers = {
  Query: {
    contact: (obj, args, context, info) => selectCommand(obj, args, context, info),
    contacts: (obj, args, context, info) => selectCommand(obj, args, context, info),
  },

  Mutation: {
    insertContact: (obj, args, context, info) => insertContact(obj, args, context, info),
    updateContact: (obj, args, context, info) => updateContact(obj, args, context, info),
    deleteContact: (obj, args, context, info) => deleteContact(obj, args, context, info),
  },

  Contact: {
    fullName: (obj, args, context, info) => generateFullName(obj, args, context, info),
  },
};
