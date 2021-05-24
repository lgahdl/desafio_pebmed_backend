"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knexfile_1 = __importDefault(require("../../database/knexfile"));
const objection_1 = require("objection");
const knex_1 = __importDefault(require("knex"));
const Appointment_objection_1 = __importDefault(require("./Appointment.objection"));
const knexObj = knex_1.default(knexfile_1.default);
objection_1.Model.knex(knexObj);
class PatientObjection extends objection_1.Model {
    static get tableName() {
        return "patients";
    }
    static get idColumn() {
        return "patient_id";
    }
    static get relationMappings() {
        return {
            appointments: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Appointment_objection_1.default,
                join: {
                    from: "patients.patient_id",
                    to: "appointments.patient_id",
                }
            }
        };
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
        };
    }
}
exports.default = PatientObjection;
//# sourceMappingURL=Patient.objection.js.map