"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Appointment_objection_1 = __importDefault(require("../../models/objection/Appointment.objection"));
const Appointment_model_1 = __importDefault(require("../../models/Appointment.model"));
class AppointmentsServiceImpl {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Appointment_model_1.default(yield Appointment_objection_1.default.query().findById(id));
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let appointments = yield Appointment_objection_1.default.query();
            return appointments.map((appointment) => new Appointment_model_1.default(appointment));
        });
    }
    post(appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const trx = yield Appointment_objection_1.default.startTransaction();
            try {
                // @ts-ignore
                const appointmentInserted = new Appointment_model_1.default(yield Appointment_objection_1.default.query(trx).insert(appointment));
                yield trx.commit();
                return appointmentInserted;
            }
            catch (error) {
                yield trx.rollback();
                throw error;
            }
        });
    }
    put(appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const trx = yield Appointment_objection_1.default.startTransaction();
            try {
                // @ts-ignore
                const appointmentInserted = new Appointment_model_1.default(yield Appointment_objection_1.default.query(trx).findById(appointment.appointment_id).update(appointment));
                yield trx.commit();
                return appointmentInserted;
            }
            catch (error) {
                yield trx.rollback();
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const trx = yield Appointment_objection_1.default.startTransaction();
            try {
                // @ts-ignore
                yield Appointment_objection_1.default.query(trx).deleteById(id);
                yield trx.commit();
                return true;
            }
            catch (error) {
                yield trx.rollback();
                return false;
            }
        });
    }
}
exports.default = AppointmentsServiceImpl;
//# sourceMappingURL=appointments.service.impl.js.map