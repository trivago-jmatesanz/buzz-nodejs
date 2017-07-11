import bookshelf from '../db';

const ContactModel = bookshelf.Model.extend({
  tableName: 'contact',
});

const contactModel = bookshelf.model('ContactModel', ContactModel); // Register model to bookshelf registry plugin to avoid circular dependency

export { contactModel }; // Export registered model
