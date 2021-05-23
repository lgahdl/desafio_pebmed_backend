import {Appointment} from "./Appointment.type";
import { GenderEnum } from "../enums/gender.enum";

export type Patient = {
    patient_id: number;
    name: string;
    gender: GenderEnum;
    height: number;
    weight: number;
    phone_number: string;
    birthday: Date;
    created_at: Date;
    updated_at: Date;
    appointments?: Appointment[];
}