import bookshelf from '../db';

const AccountModel = bookshelf.Model.extend({
  tableName: 'account',
});

const accountModel = bookshelf.model('AccountModel', AccountModel); // Register model to bookshelf registry plugin to avoid circular dependency

export { accountModel }; // Export registered model
