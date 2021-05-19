"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../database/knexfile"));
const knexObj = knex_1.default(knexfile_1.default);
objection_1.Model.knex(knexObj);
class Appointment extends objection_1.Model {
    static get tableName() {
        return "appointment";
    }
    static get idColumn() {
        return "appointment_id";
    }
    static get relationMappings() {
        const Pacient = require("./Pacient");
        return {
            appointments: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: Pacient,
                join: {
                    from: "appointments.patient_id",
                    to: "pacients.patient_id",
                }
            }
        };
    }
}
module.exports = Appointment;
//# sourceMappingURL=Appointment.js.map