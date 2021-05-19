"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const utils_1 = __importDefault(require("../helpers/utils"));
const knexfile_1 = __importDefault(require("./knexfile"));
const connectionError = (err) => {
    console.error(err);
    process.kill(process.pid, 'SIGTERM');
};
class InitializeDatabase {
    static initializeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!process.env.DB_USER)
                return connectionError(new Error('DB_USER env variable is required!'));
            if (!process.env.DB_PASS)
                return connectionError(new Error('DB_PASS env variable is required!'));
            if (!process.env.DB_SCHEMA)
                return connectionError(new Error('DB_SCHEMA env variable is required!'));
            const knexSchema = knexfile_1.default.connection.database;
            let knexSchemaConnection = utils_1.default.clone(knexfile_1.default);
            delete knexSchemaConnection.connection.database;
            const knexSchemaObj = knex_1.default(knexSchemaConnection);
            yield knexSchemaObj.raw(`CREATE DATABASE IF NOT EXISTS \`${knexSchema}\``);
            yield knexSchemaObj.destroy();
            this.knexObj = knex_1.default(knexfile_1.default);
            // This function updates database to last version, but also identifies if db credentials are correct
            try {
                yield this.knexObj.migrate.latest();
            }
            catch (err) {
                // If an error occurs during DB connection, kills application gracefully
                return connectionError(err);
            }
            // Inserts testing data into DB (based on testing seeds folder)
            if (process.env.NODE_ENV === 'test') {
                yield this.knexObj.seed.run();
            }
            yield this.knexObj.destroy();
            return;
        });
    }
    static clearDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.knexObj) {
                try {
                    yield this.knexObj.destroy();
                }
                catch (err) {
                    console.warn(err);
                }
            }
            if (process.env.NODE_ENV === 'test') {
                const knexSchemaTest = knexfile_1.default.connection.database;
                let knexSchemaConnection = utils_1.default.clone(knexfile_1.default);
                delete knexSchemaConnection.connection.database;
                const knexSchema = knex_1.default(knexSchemaConnection);
                yield knexSchema.raw(`DROP DATABASE \`${knexSchemaTest}\``);
                yield knexSchema.destroy();
            }
        });
    }
    static initializeObjection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.knexObj) {
                try {
                    yield this.knexObj.destroy();
                }
                catch (err) {
                    console.warn(err);
                }
            }
            this.knexObj = knex_1.default(knexfile_1.default);
            objection_1.Model.knex(this.knexObj);
            return;
        });
    }
}
exports.default = InitializeDatabase;
//# sourceMappingURL=initializeDatabase.js.map