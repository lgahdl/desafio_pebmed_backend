"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(appointment_id, date, patient_id, annotations, created_at, updated_at) {
        this._appointment_id = appointment_id;
        this._date = date;
        this._patient_id = patient_id;
        this._annotations = annotations;
        this._created_at = created_at;
        this._updated_at = updated_at;
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
}
exports.default = Appointment;
//# sourceMappingURL=Appointment.js.map