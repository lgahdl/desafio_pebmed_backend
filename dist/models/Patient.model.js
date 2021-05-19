"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PatientModel {
    constructor(props) {
        this.patient_id = props.patient_id;
        this.name = props.name;
        this.height = props.height;
        this.weight = props.weight;
        this.phone_number = props.phone_number;
        this.birthday = props.birthday;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
        this.appointments = props.appointments;
    }
    get patient_id() {
        return this._patient_id;
    }
    set patient_id(value) {
        this._patient_id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get phone_number() {
        return this._phone_number;
    }
    set phone_number(value) {
        this._phone_number = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
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
    get appointments() {
        return this._appointments;
    }
    set appointments(value) {
        this._appointments = value;
    }
}
exports.default = PatientModel;
//# sourceMappingURL=Patient.model.js.map