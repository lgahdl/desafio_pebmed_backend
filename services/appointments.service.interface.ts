import { Appointment } from "../types/Appointment.type";

export default interface AppointmentsService {
  findById: (id: number) => Promise<Appointment>;
  findAll: () => Promise<Appointment[]>
  post: (appointment: Appointment) => Promise<Appointment>;
  put: (appointment: Appointment) => Promise<Appointment>;
  delete: (id: number) => Promise<boolean>;
}