import { Patient } from "../types/Patient.type";
import { Appointment } from "../types/Appointment.type";

export default class AppointmentModel {

    private _appointment_id: number;
    private _date: Date;
    private _patient_id: number;
    private _annotations: string;
    private _created_at: Date;
    private _updated_at: Date;
    private _patient: Patient;

    constructor(props: any) {
        this.appointment_id = props.appointment_id;
        this.date = props.date;
        this.patient_id = props.patient_id;
        this.annotations = props.annotations;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
        this.patient = props.patient;
    }

    public toAppointment(): Appointment{
        const {appointment_id, date, patient_id, annotations, created_at, updated_at, patient} = this;
        return {
            appointment_id,
            date,
            patient_id,
            annotations,
            created_at,
            updated_at,
            patient,
        }
    }
    
    
    get appointment_id(): number {
        return this._appointment_id;
    }

    set appointment_id(value: number) {
        this._appointment_id = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get patient_id(): number {
        return this._patient_id;
    }

    set patient_id(value: number) {
        this._patient_id = value;
    }

    get annotations(): string {
        return this._annotations;
    }

    set annotations(value: string) {
        this._annotations = value;
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


    get patient(): Patient {
        return this._patient;
    }

    set patient(value: Patient) {
        this._patient = value;
    }
}