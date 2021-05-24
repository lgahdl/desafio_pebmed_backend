"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppointmentModel {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.appointment_id = (_a = props.appointment_id) !== null && _a !== void 0 ? _a : undefined;
        this.date = (_b = props.date) !== null && _b !== void 0 ? _b : undefined;
        this.patient_id = (_c = props.patient_id) !== null && _c !== void 0 ? _c : undefined;
        this.annotations = (_d = props.annotations) !== null && _d !== void 0 ? _d : undefined;
        this.created_at = (_e = props.created_at) !== null && _e !== void 0 ? _e : undefined;
        this.updated_at = (_f = props.updated_at) !== null && _f !== void 0 ? _f : undefined;
        this.patient = (_g = props.patient) !== null && _g !== void 0 ? _g : undefined;
    }
    get appointment_id() {
        return this._appointment_id;
    }
    set appointment_id(value) {
        this._appointment_id = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get patient_id() {
        return this._patient_id;
    }
    set patient_id(value) {
        this._patient_id = value;
    }
    get annotations() {
        return this._annotations;
    }
    set annotations(value) {
        this._annotations = value;
    }
    get created_at() {
        return this._created_at;
    }
    set created_at(value) {
        this._created_at = value;
    }
    get updated_at() {
        return this._updated_at;
    }
    set updated_at(value) {
        this._updated_at = value;
    }
    get patient() {
        return this._patient;
    }
    set patient(value) {
        this._patient = value;
    }
}
exports.default = AppointmentModel;
//# sourceMappingURL=Appointment.model.js.map