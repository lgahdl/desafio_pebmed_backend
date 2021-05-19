"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppointmentModel {
    constructor(props) {
        this.appointment_id = props.appointment_id;
        this.date = props.date;
        this.patient_id = props.patient_id;
        this.annotations = props.annotations;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
        this.patient = props.patient;
    }
    toAppointment() {
        const { appointment_id, date, patient_id, annotations, created_at, updated_at, patient } = this;
        return {
            appointment_id,
            date,
            patient_id,
            annotations,
            created_at,
            updated_at,
            patient,
        };
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