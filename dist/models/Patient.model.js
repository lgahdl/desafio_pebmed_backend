"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PatientModel {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.patient_id = (_a = props.patient_id) !== null && _a !== void 0 ? _a : undefined;
        this.name = (_b = props.name) !== null && _b !== void 0 ? _b : undefined;
        this.gender = (_c = props.gender) !== null && _c !== void 0 ? _c : undefined;
        this.height = (_d = props.height) !== null && _d !== void 0 ? _d : undefined;
        this.weight = (_e = props.weight) !== null && _e !== void 0 ? _e : undefined;
        this.phone_number = (_f = props.phone_number) !== null && _f !== void 0 ? _f : undefined;
        this.birthday = (_g = props.birthday) !== null && _g !== void 0 ? _g : undefined;
        this.created_at = (_h = props.created_at) !== null && _h !== void 0 ? _h : undefined;
        this.updated_at = (_j = props.updated_at) !== null && _j !== void 0 ? _j : undefined;
        this.appointments = (_k = props.appointments) !== null && _k !== void 0 ? _k : undefined;
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
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
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