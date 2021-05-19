const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../database/knexfile");
const knexObj = Knex(knexConfig);
Model.knex(knexObj);
class Patient extends Model {
    static get tableName() {
        return "patients";
    }
    static get idColumn() {
        return "patient_id";
    }
    static get relationMappings() {
        const Appointment = require("./Appointment");
        return {
            appointments: {
                relation: Model.HasManyRelation,
                classModel: Appointment,
                join: {
                    from: "patients.patient_id",
                    to: "appointments.patient_id",
                }
            }
        };
    }
}
module.exports = Patient;
//# sourceMappingURL=PatientModel.js.map