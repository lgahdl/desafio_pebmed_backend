import PatientsService from "../patients.service.interface";
import { Patient } from "../../types/Patient.type";
import PatientObjection from "../../models/objection/Patient.objection";
import PatientModel from "../../models/Patient.model";


export default class PatientsServiceImpl implements PatientsService {

	async findById(id: number): Promise<Patient> {
		return new PatientModel(await PatientObjection.query().findById(id));
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

	async put(patient: Patient): Promise<Patient> {
		const trx = await PatientObjection.startTransaction();
		try {
			// @ts-ignore
			const patientInserted = new PatientModel(await PatientObjection.query(trx).findById(patient.patient_id).update(patient));
			await trx.commit();
			return patientInserted;
		} catch (error) {
			await trx.rollback();
			throw error;
		}
	}

	async delete(id: number): Promise<boolean> {
		const trx = await PatientObjection.startTransaction();
		try {
			// @ts-ignore
			await PatientObjection.query(trx).deleteById(id);
			await trx.commit();
			return true;
		} catch (error) {
			await trx.rollback();
			return false
		}
	}


}