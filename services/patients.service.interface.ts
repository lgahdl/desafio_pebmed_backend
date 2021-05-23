import { Patient } from "../types/Patient.type";

export default interface PatientsService {
  findById: (id: number) => Promise<Patient>;
  findAll: () => Promise<Patient[]>;
  post: (patient: Patient) => Promise<Patient>;
  patch: (id:number, patient: Patient) => Promise<Patient>;
  delete: (id: number) => Promise<boolean>;
}