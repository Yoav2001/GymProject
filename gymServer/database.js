const Sequelize = require('sequelize');
// your credentials
DATABASE_URL = 'postgres://[db-user]:[password]@127.0.0.1:5432/node-postgres-sequelize';

const database = new Sequelize(DATABASE_URL);

module.exports = database;