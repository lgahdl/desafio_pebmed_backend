import { Appointment } from "../types/Appointment.type";

export default class PatientModel {

	private _patient_id: number;
	private _name: string;
	private _height: number;
	private _weight: number;
	private _phone_number: string;
	private _birthday: Date;
	private _created_at: Date;
	private _updated_at: Date;
	private _appointments?: Appointment[];

	constructor(props: any) {
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


	get patient_id(): number {
		return this._patient_id;
	}

	set patient_id(value: number) {
		this._patient_id = value;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get height(): number {
		return this._height;
	}

	set height(value: number) {
		this._height = value;
	}

	get weight(): number {
		return this._weight;
	}

	set weight(value: number) {
		this._weight = value;
	}

	get phone_number(): string {
		return this._phone_number;
	}

	set phone_number(value: string) {
		this._phone_number = value;
	}

	get birthday(): Date {
		return this._birthday;
	}

	set birthday(value: Date) {
		this._birthday = value;
	}

	get created_at(): Date {
		return this._created_at;
	}

	set created_at(value: Date) {
		this._created_at = value;
	}

	get updated_at(): Date {
		return this._updated_at;
	}

	set updated_at(value: Date) {
		this._updated_at = value;
	}


	get appointments(): Appointment[] {
		return this._appointments;
	}

	set appointments(value: Appointment[]) {
		this._appointments = value;
	}
}