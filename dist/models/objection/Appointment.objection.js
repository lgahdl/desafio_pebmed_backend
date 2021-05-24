"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../../database/knexfile"));
const Patient_objection_1 = __importDefault(require("./Patient.objection"));
const knexObj = knex_1.default(knexfile_1.default);
objection_1.Model.knex(knexObj);
class AppointmentObjection extends objection_1.Model {
    static get tableName() {
        return "appointments";
    }
    static get idColumn() {
        return "appointment_id";
    }
    static get relationMappings() {
        return {
            patient: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: Patient_objection_1.default,
                join: {
                    from: "appointments.patient_id",
                    to: "patients.patient_id",
                }
            }
        };
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
        };
    }
}
exports.default = AppointmentObjection;
//# sourceMappingURL=Appointment.objection.js.map