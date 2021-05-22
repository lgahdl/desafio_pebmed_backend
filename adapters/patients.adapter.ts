import PatientModel from "../models/Patient.model";
import { Patient } from "../types/Patient.type";

export default class PatientsAdapter {

	static toResponse(patient: PatientModel): Patient {
		let response: Patient;
		response.patient_id = patient.patient_id;
		response.name = patient.name;
		response.height = patient.height;
		response.weight = patient.weight;
		response.phone_number = patient.phone_number;
		response.birthday = patient.birthday;
		response.created_at = patient.created_at;
		response.updated_at = patient.updated_at;
		response.appointments = patient.appointments;
		return response;
	}

	static toEntity(patient: Patient): PatientModel {
		return new PatientModel(patient);
	}

}