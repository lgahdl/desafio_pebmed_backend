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
const lodash_1 = require("lodash");
const errorDictionary_1 = __importDefault(require("../../helpers/errorDictionary"));
class AppointmentsServiceImpl {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let appointment = yield Appointment_objection_1.default.query().withGraphFetched('[patient]').findById(id);
            if (!appointment) {
                throw errorDictionary_1.default.NOT_FOUND;
            }
            return new Appointment_model_1.default(appointment);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let appointments = yield Appointment_objection_1.default.query().withGraphFetched('[patient]');
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
                return yield this.findById(appointmentInserted.appointment_id);
            }
            catch (error) {
                yield trx.rollback();
                throw error;
            }
        });
    }
    patch(id, appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const trx = yield Appointment_objection_1.default.startTransaction();
            try {
                yield Appointment_objection_1.default.query(trx).findById(id).patch(lodash_1.pickBy(appointment, lodash_1.identity));
                yield trx.commit();
                return yield this.findById(id);
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
                let deleteById = yield Appointment_objection_1.default.query(trx).deleteById(id);
                if (deleteById == 0) {
                    throw errorDictionary_1.default.NOT_FOUND;
                }
                yield trx.commit();
                return true;
            }
            catch (error) {
                yield trx.rollback();
                throw error;
            }
        });
    }
}
exports.default = AppointmentsServiceImpl;
//# sourceMappingURL=appointments.service.impl.js.map