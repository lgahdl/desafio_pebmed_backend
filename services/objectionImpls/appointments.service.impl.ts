import AppointmentsService from "../appointments.service.interface";
import { Appointment } from "../../types/Appointment.type";
import AppointmentObjection from "../../models/objection/Appointment.objection";
import AppointmentModel from "../../models/Appointment.model";


export default class AppointmentsServiceImpl implements AppointmentsService {

	async findById(id: number): Promise<Appointment> {
		return new AppointmentModel(await AppointmentObjection.query().findById(id));
	}

	async findAll(): Promise<Appointment[]> {
		let appointments: AppointmentObjection[] = await AppointmentObjection.query();
		return appointments.map((appointment) => new AppointmentModel(appointment));
	}

	async post(appointment: Appointment): Promise<Appointment> {
		const trx = await AppointmentObjection.startTransaction();
		try {
			// @ts-ignore
			const appointmentInserted = new AppointmentModel(await AppointmentObjection.query(trx).insert(appointment));
			await trx.commit();
			return appointmentInserted;
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async put(appointment: Appointment): Promise<Appointment> {
		const trx = await AppointmentObjection.startTransaction();
		try {
			// @ts-ignore
			const appointmentInserted = new AppointmentModel(await AppointmentObjection.query(trx).findById(appointment.appointment_id).update(appointment));
			await trx.commit();
			return appointmentInserted;
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async delete(id: number): Promise<boolean> {
		const trx = await AppointmentObjection.startTransaction();
		try {
			// @ts-ignore
			await AppointmentObjection.query(trx).deleteById(id);
			await trx.commit();
			return true;
		} catch (error) {
			await trx.rollback();
			return false
		}
	}

}