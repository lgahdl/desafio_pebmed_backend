import { Model, RelationMappings } from "objection";
import Knex from "knex";
import knexConfig from "../../database/knexfile";

const knexObj = Knex(knexConfig);
Model.knex(knexObj);

export default class AppointmentObjection extends Model {
	
	static get tableName() {
		return "appointment";
	}

	static get idColumn() {
		return "appointment_id";
	}

	static get relationMappings(): RelationMappings {
		const Patient = require("./Pacient");

		return {
			appointments: {
				relation: Model.BelongsToOneRelation,
				modelClass: Patient,
				join: {
					from: "appointments.patient_id",
					to: "pacients.patient_id",
				}
			}
		}
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["date", "patient_id"],
			properties: {
				appointment_id: { type: "integer" },
				date: { type: "timestamp" },
				patient_id: { type: "integer" },
				annotations: { type: "string" },
				created_at: { type: "timestamp" },
				updated_at: { type: "timestamp" }
			}
		}
	}

}
