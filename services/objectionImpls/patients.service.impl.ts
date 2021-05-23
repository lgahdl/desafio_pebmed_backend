import PatientsService from "../patients.service.interface";
import { Patient } from "../../types/Patient.type";
import PatientObjection from "../../models/objection/Patient.objection";
import PatientModel from "../../models/Patient.model";
import { pickBy, identity } from 'lodash';
import errorDictionary from "../../helpers/errorDictionary";

export default class PatientsServiceImpl implements PatientsService {

	constructor() {}

	async findById(id: number): Promise<Patient> {
		const patient = await PatientObjection.query().withGraphFetched('[appointments]').findById(id);
		if (!patient) {
			throw errorDictionary.NOT_FOUND;
		}
		return new PatientModel(patient);
	}

	async findAll(): Promise<Patient[]> {
		let patients: PatientObjection[] = await PatientObjection.query();
		return patients.map((patient) => new PatientModel(patient));
	}

	async post(patient: Patient): Promise<Patient> {
		const trx = await PatientObjection.startTransaction();
		try {
			// @ts-ignore
			const patientInserted = new PatientModel(await PatientObjection.query(trx).insert(patient));
			await trx.commit();
			return patientInserted;
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async patch(id: number, patient: Patient): Promise<Patient> {
		const trx = await PatientObjection.startTransaction();
		try {
			new PatientModel(await PatientObjection.query(trx).findById(id).update(pickBy(patient, identity)));
			await trx.commit();
			return await this.findById(id);
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async delete(id: number): Promise<boolean> {
		const trx = await PatientObjection.startTransaction();
		try {
			// @ts-ignore
			let deleteById = await PatientObjection.query(trx).deleteById(id);
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