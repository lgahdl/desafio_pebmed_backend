import express from 'express';
import PatientsService from "../../services/patients.service.interface";
import { Container, Inject } from 'typedi';

import adapter from '../../adapters/patients.adapter';

const router = express.Router();

const patientsService = Container.get<PatientsService>('patients.service');

router.get("/", async (req, res, next) => {
	try {
		const patients = await patientsService.findAll()
		return res.send(patients.map((patientModel) => adapter.toJson(patientModel)));
	} catch (error) {
		return next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const patients = await patientsService.findById(parseInt(req.params.id));
		return res.send(adapter.toJson(patients));
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const patient = await patientsService.post(req.body);
		return res.status(201).send(adapter.toJson(patient));
	} catch (error) {
		return next(error);
	}
});

router.patch("/:id", async (req, res, next) => {
	try {
		console.log(req.params.id);
		const patient = await patientsService.patch(parseInt(req.params.id), req.body);
		return res.send(adapter.toJson(patient));
	} catch (error) {
		return next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const response = await patientsService.delete(parseInt(req.params.id));
		return res.status(204).send(response);
	} catch (error) {
		return next(error);
	}
});

export default router;