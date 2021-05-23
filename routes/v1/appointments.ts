import express from 'express';
import { Container, Inject } from 'typedi';
import AppointmentsService from "../../services/appointments.service.interface";
import adapter from '../../adapters/appointments.adapter';

const router = express.Router();

const appointmentsService = Container.get<AppointmentsService>('appointments.service');

router.get("/", async (req, res, next) => {
	try {
		const appointments = await appointmentsService.findAll();
		return res.send(appointments.map((appointment) => adapter.toJson(appointment)));
	} catch (error) {
		return next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const appointment = await appointmentsService.findById(parseInt(req.params.id));
		return res.send(adapter.toJson(appointment));
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const appointment = await appointmentsService.post(req.body);
		return res.status(201).send(adapter.toJson(appointment));
	} catch (error) {
		return next(error);
	}
});

router.patch("/:id", async (req, res, next) => {
	try {
		const appointment = await appointmentsService.patch(parseInt(req.params.id), adapter.toJson(req.body));
		return res.send(adapter.toJson(appointment));
	} catch (error) {
		return next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const response = await appointmentsService.delete(parseInt(req.params.id));
		return res.status(204).send(response);
	} catch (error) {
		return next(error);
	}
});

export default router;