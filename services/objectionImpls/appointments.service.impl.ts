import AppointmentsService from "../appointments.service.interface";
import { Appointment } from "../../types/Appointment.type";
import AppointmentObjection from "../../models/objection/Appointment.objection";
import AppointmentModel from "../../models/Appointment.model";
import { pickBy, identity } from 'lodash';
import errorDictionary from "../../helpers/errorDictionary";

export default class AppointmentsServiceImpl implements AppointmentsService {

	async findById(id: number): Promise<Appointment> {
		let appointment = await AppointmentObjection.query().withGraphFetched('[patient]').findById(id);
		if (!appointment) {
			throw errorDictionary.NOT_FOUND;
		}
		return new AppointmentModel(appointment);
	}

	async findAll(): Promise<Appointment[]> {
		let appointments: AppointmentObjection[] = await AppointmentObjection.query().withGraphFetched('[patient]');
		return appointments.map((appointment) => new AppointmentModel(appointment));
	}

	async post(appointment: Appointment): Promise<Appointment> {
		const trx = await AppointmentObjection.startTransaction();
		try {
			// @ts-ignore
			const appointmentInserted = new AppointmentModel(await AppointmentObjection.query(trx).insert(appointment));
			await trx.commit();
			return await this.findById(appointmentInserted.appointment_id);
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async patch(id: number, appointment: Appointment): Promise<Appointment> {
		const trx = await AppointmentObjection.startTransaction();
		try {
			await AppointmentObjection.query(trx).findById(id).patch(pickBy(appointment, identity));
			await trx.commit();
			return await this.findById(id);
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async delete(id: number): Promise<boolean> {
		const trx = await AppointmentObjection.startTransaction();
		try {
			let deleteById = await AppointmentObjection.query(trx).deleteById(id);
			if (deleteById == 0) {
				throw errorDictionary.NOT_FOUND;
			}
			await trx.commit();
			return true;
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

}