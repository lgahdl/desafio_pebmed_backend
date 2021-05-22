import { Container } from "typedi";
import PatientsServiceImpl from "./services/objectionImpls/patients.service.impl";
import AppointmentsServiceImpl from "./services/objectionImpls/appointments.service.impl";

export default function injectDependencies() {
	//Services
	Container.set('patients.service', new PatientsServiceImpl());
	Container.set('appointments.service', new AppointmentsServiceImpl())
	
}