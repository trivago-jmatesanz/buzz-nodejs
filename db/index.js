const config      = require('./knexfile');
const env         = 'development';
export const knex        = require('knex')(config[env]); // Export Knex for access to db connection without ORM
const bookshelf   = require('bookshelf')(knex);

knex.migrate.latest([config]);

bookshelf.plugin('registry'); // Avoid circular dependency among models

export default bookshelf; // Export bookshelf ORM as default value for access to db connection
