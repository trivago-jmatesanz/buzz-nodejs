import bookshelf from '../db';

const accountModel = bookshelf.Model.extend({
  tableName: 'account',
});

module.exports = bookshelf.model('accountModel', accountModel);
