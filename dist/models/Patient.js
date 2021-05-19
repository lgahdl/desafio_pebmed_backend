"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    constructor(patient_id, name, height, weight, phone_number, birthday, created_at, updated_at) {
        this._patient_id = patient_id;
        this._name = name;
        this._height = height;
        this._weight = weight;
        this._phone_number = phone_number;
        this._birthday = birthday;
        this._created_at = created_at;
        this._updated_at = updated_at;
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
}
exports.default = Patient;
//# sourceMappingURL=PatientModel.js.map