"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../../database/knexfile"));
const knexObj = knex_1.default(knexfile_1.default);
objection_1.Model.knex(knexObj);
class AppointmentObjection extends objection_1.Model {
    static get tableName() {
        return "appointment";
    }
    static get idColumn() {
        return "appointment_id";
    }
    static get relationMappings() {
        const Patient = require("./Pacient");
        return {
            appointments: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: Patient,
                join: {
                    from: "appointments.patient_id",
                    to: "pacients.patient_id",
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