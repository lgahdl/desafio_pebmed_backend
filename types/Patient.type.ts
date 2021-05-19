import {Appointment} from "./Appointment.type";

export type Patient = {
    patient_id: number;
    name: string;
    height: number;
    weight: number;
    phone_number: string;
    birthday: Date;
    created_at: Date;
    updated_at: Date;
    appointments?: Appointment[];
}