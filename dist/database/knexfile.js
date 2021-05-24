"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require('./knexfile.types');
let connection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    // When running tests, switch to a test schema
    database: process.env.DB_SCHEMA,
    timezone: 'UTC',
    socketPath: null,
    host: null,
    port: null
};
if (process.env.DB_SOCKET) {
    connection.socketPath = process.env.DB_SOCKET;
}
else {
    connection.host = process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1';
    connection.port = process.env.DB_PORT ? process.env.DB_PORT : 3306;
}
let knexConfig = {
    client: "mysql",
    connection: connection,
    pool: {
        min: 2,
        max: 10,
        afterCreate: function (conn, cb) {
            conn.query('SET sql_mode="NO_ENGINE_SUBSTITUTION";', function (err) {
                cb(err, conn);
            });
        }
    },
    migrations: {
        directory: './database/migrations'
    },
    seeds: null,
};
if (process.env.NODE_ENV === 'test') {
    connection.database = connection.database + '-test';
    knexConfig.seeds = {
        directory: './testing/seeds'
    };
}
exports.default = knexConfig;
//# sourceMappingURL=knexfile.js.map