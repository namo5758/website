const knex = require('knex');
const dotenv = require("dotenv").config();

const db = knex.default({
    client: 'mysql2',
    connection: {
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        database: process.env.DATABASE
    }
})

module.exports = db;
