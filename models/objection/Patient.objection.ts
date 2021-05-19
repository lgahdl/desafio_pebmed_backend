const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../../database/knexfile");

const knexObj = Knex(knexConfig);
Model.knex(knexObj);

export default class PatientObjection extends Model {

	static get tableName() {
		return "patients";
	}

	static get idColumn() {
		return "patient_id";
	}

	static get relationMappings() {
		const Appointment = require("./Appointment.objection");

		return {
			appointments: {
				relation: Model.HasManyRelation,
				classModel: Appointment,
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
