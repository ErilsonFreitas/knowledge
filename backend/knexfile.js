// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const { db } = require('./.env') // {db} faz um destructuring e pega só as informações do db de dentro do .env

module.exports = {

    client: 'postgresql',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
