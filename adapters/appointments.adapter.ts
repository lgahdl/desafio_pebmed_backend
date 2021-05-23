import { Appointment } from "../types/Appointment.type";
import AppointmentModel from "../models/Appointment.model";

export default class AppointmentsAdapter {

	static toJson(appointment: Appointment | AppointmentModel): Appointment {
		let response: Appointment = {
			appointment_id: 0,
			date: undefined,
			patient_id: 0,
			annotations: "",
			created_at: undefined,
			updated_at: undefined,
			patient: undefined,
		};
		response.annotations = appointment.annotations ?? undefined;
		response.appointment_id = appointment.appointment_id ?? undefined;
		response.created_at = appointment.created_at ?? undefined;
		response.date = appointment.date ?? undefined;
		response.patient = appointment.patient ?? undefined;
		response.patient_id = appointment.patient_id ?? undefined;
		response.updated_at = appointment.updated_at ?? undefined;
		return response;
	}

	static toObject(appointment: Appointment): AppointmentModel {
		return new AppointmentModel(appointment);
	}

}