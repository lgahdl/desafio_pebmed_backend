import {Patient} from "./Patient.type";

export type Appointment = {
    appointment_id: number;
    date: Date;
    patient_id: number;
    annotations: string;
    created_at: Date;
    updated_at: Date;
    patient: Patient;
}
