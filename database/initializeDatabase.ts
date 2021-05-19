import Knex from 'knex';
import {Model} from 'objection';
import Utils from "../helpers/utils";
import knexConfig from './knexfile';

const connectionError = (err: Error) => {
  console.error(err);
  process.kill(process.pid, 'SIGTERM');
};

class InitializeDatabase {

  public static knexObj: Knex<any, unknown[]>;

  static async initializeDatabase() {

    if(!process.env.DB_USER) return connectionError(new Error('DB_USER env variable is required!'));
    if(!process.env.DB_PASS) return connectionError(new Error('DB_PASS env variable is required!'));
    if(!process.env.DB_SCHEMA) return connectionError(new Error('DB_SCHEMA env variable is required!'));

    const knexSchema = knexConfig.connection.database;
    let knexSchemaConnection = Utils.clone(knexConfig);
    delete knexSchemaConnection.connection.database;

    const knexSchemaObj = Knex(knexSchemaConnection);
    await knexSchemaObj.raw(`CREATE DATABASE IF NOT EXISTS \`${knexSchema}\``);
    await knexSchemaObj.destroy();

    this.knexObj = Knex(knexConfig);

    // This function updates database to last version, but also identifies if db credentials are correct
    try {
      await this.knexObj.migrate.latest();
    } catch(err) {
      // If an error occurs during DB connection, kills application gracefully
      return connectionError(err);
    }

    // Inserts testing data into DB (based on testing seeds folder)
    if(process.env.NODE_ENV === 'test') {
      await this.knexObj.seed.run();
    }
    await this.knexObj.destroy();

    return;
  }

  static async clearDatabase() {
    if(this.knexObj) {
      try {
        await this.knexObj.destroy();
      } catch(err) {
        console.warn(err);
      }
    }

    if(process.env.NODE_ENV === 'test') {

      const knexSchemaTest = knexConfig.connection.database;
      let knexSchemaConnection = Utils.clone(knexConfig);
      delete knexSchemaConnection.connection.database;

      const knexSchema = Knex(knexSchemaConnection);
      await knexSchema.raw(`DROP DATABASE \`${knexSchemaTest}\``);
      await knexSchema.destroy();
    }
  }

  static async initializeObjection() {
    if(this.knexObj) {
      try {
        await this.knexObj.destroy();
      } catch(err) {
        console.warn(err);
      }
    }

    this.knexObj = Knex(knexConfig);
    Model.knex(this.knexObj);
    return;
  }
}

export default InitializeDatabase;