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
const Patient_objection_1 = __importDefault(require("../../models/objection/Patient.objection"));
const Patient_model_1 = __importDefault(require("../../models/Patient.model"));
const lodash_1 = require("lodash");
const errorDictionary_1 = __importDefault(require("../../helpers/errorDictionary"));
class PatientsServiceImpl {
    constructor() { }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient = yield Patient_objection_1.default.query().withGraphFetched('[appointments]').findById(id);
            if (!patient) {
                throw errorDictionary_1.default.NOT_FOUND;
            }
            return new Patient_model_1.default(patient);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let patients = yield Patient_objection_1.default.query();
            return patients.map((patient) => new Patient_model_1.default(patient));
        });
    }
    post(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            const trx = yield Patient_objection_1.default.startTransaction();
            try {
                // @ts-ignore
                const patientInserted = new Patient_model_1.default(yield Patient_objection_1.default.query(trx).insert(patient));
                yield trx.commit();
                return patientInserted;
            }
            catch (error) {
                yield trx.rollback();
                throw error;
            }
        });
    }
    patch(id, patient) {
        return __awaiter(this, void 0, void 0, function* () {
            const trx = yield Patient_objection_1.default.startTransaction();
            try {
                new Patient_model_1.default(yield Patient_objection_1.default.query(trx).findById(id).update(lodash_1.pickBy(patient, lodash_1.identity)));
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
            const trx = yield Patient_objection_1.default.startTransaction();
            try {
                // @ts-ignore
                let deleteById = yield Patient_objection_1.default.query(trx).deleteById(id);
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
exports.default = PatientsServiceImpl;
//# sourceMappingURL=patients.service.impl.js.map