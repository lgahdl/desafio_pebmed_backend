import knexConfig from "../../database/knexfile";
import { Model, RelationMappings } from "objection";
import Knex from "knex";
import Appointment from "./Appointment.objection";

const knexObj = Knex(knexConfig);
Model.knex(knexObj);


export default class PatientObjection extends Model {

	static get tableName() {
		return "patients";
	}

	static get idColumn() {
		return "patient_id";
	}

	static get relationMappings(): RelationMappings {
		return {
			appointments: {
				relation: Model.HasManyRelation,
				modelClass: Appointment,
				join: {
					from: "patients.patient_id",
					to: "appointments.patient_id",
				}
			}
		}
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["name"],
			properties: {
				patient_id: { type: "integer" },
				name: { type: "string" },
				gender: { type: "enum" },
				height: { type: "decimal" },
				weight: { type: "decimal" },
				phone_number: { type: "string" },
				birthday: { type: "timestamp" },
				created_at: { type: "timestamp" },
				updated_at: { type: "timestamp" }
			}
		}
	}

}
