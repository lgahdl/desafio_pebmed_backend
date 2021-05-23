import PatientModel from "../models/Patient.model";
import { Patient } from "../types/Patient.type";

export default class PatientsAdapter {

	static toJson(patient: Patient | PatientModel): Patient {
		let struct: Patient = {
			patient_id: 0,
			name: "",
			gender: undefined,
			height: 0,
			weight: 0,
			phone_number: "",
			birthday: undefined,
			created_at: undefined,
			updated_at: undefined,
			appointments: [],
		};
		struct.patient_id = patient.patient_id ?? undefined;
		struct.name = patient.name ?? undefined;
		struct.height = patient.height ?? undefined;
		struct.weight = patient.weight ?? undefined;
		struct.phone_number = patient.phone_number ?? undefined;
		struct.birthday = patient.birthday ?? undefined;
		struct.created_at = patient.created_at ?? undefined;
		struct.updated_at = patient.updated_at ?? undefined;
		struct.appointments = patient.appointments ?? undefined;
		return struct;
	}

	static toObject(patient: Patient): PatientModel {
		return new PatientModel(patient);
	}

}