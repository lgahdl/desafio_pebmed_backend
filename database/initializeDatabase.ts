import Knex from 'knex';
import { Model } from 'objection';
import Utils from "../helpers/utils";
import knexConfig from './knexfile';

const connectionError = (err: Error) => {
	console.error(err);
	process.kill(process.pid, 'SIGTERM');
};

let knexObj: Knex<any, unknown[]>;

class InitializeDatabase {

	static async initializeDatabase() {

		if (!process.env.DB_USER) return connectionError(new Error('DB_USER env variable is required!'));
		if (!process.env.DB_PASS) return connectionError(new Error('DB_PASS env variable is required!'));
		if (!process.env.DB_SCHEMA) return connectionError(new Error('DB_SCHEMA env variable is required!'));

		const knexSchema = knexConfig.connection.database;

		let knexSchemaConnection = Utils.clone(knexConfig);
		delete knexSchemaConnection.connection.database;

		const knexSchemaObj = Knex(knexSchemaConnection);
		await knexSchemaObj.raw(`CREATE DATABASE IF NOT EXISTS \`${ knexSchema }\``);
		await knexSchemaObj.destroy();

		knexObj = Knex(knexConfig);

		// This function updates database to last version, but also identifies if db credentials are correct
		try {
			
			await knexObj.migrate.latest();
		} catch (err) {
			// If an error occurs during DB connection, kills application gracefully
			return connectionError(err);
		}

		// Inserts testing data into DB (based on testing seeds folder)
		if (process.env.NODE_ENV === 'test') {
			await knexObj.seed.run();
		}
		await knexObj.destroy();

		return;
	}

	static async clearDatabase() {
		if (knexObj) {
			try {
				await knexObj.destroy();
			} catch (err) {
				console.warn(err);
			}
		}

		if (process.env.NODE_ENV === 'test') {

			const knexSchemaTest = knexConfig.connection.database;
			let knexSchemaConnection = Utils.clone(knexConfig);
			delete knexSchemaConnection.connection.database;

			const knexSchema = Knex(knexSchemaConnection);
			await knexSchema.raw(`DROP DATABASE \`${ knexSchemaTest }\``);
			await knexSchema.destroy();
		}
	}

	static async initializeObjection() {
		if (knexObj) {
			try {
				await knexObj.destroy();
			} catch (err) {
				console.warn(err);
			}
		}

		knexObj = Knex(knexConfig);
		Model.knex(knexObj);
		return;
	}
}

export default InitializeDatabase;