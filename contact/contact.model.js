import bookshelf from '../db';

const contactModel = bookshelf.Model.extend({
  tableName: 'contact',
});

module.exports = bookshelf.model('contactModel', contactModel);
