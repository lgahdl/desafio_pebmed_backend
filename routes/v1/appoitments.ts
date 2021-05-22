import express from 'express';
import { Container, Inject } from 'typedi';
import AppointmentsService from "../../services/appointments.service.interface";

const router = express.Router();

const appointmentsService = Container.get<AppointmentsService>('appointments.service');

router.get("/", async (req, res, next) => {
	try {
		const response = await appointmentsService.findAll();
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const response = await appointmentsService.findById(parseInt(req.params.id));
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const response = await appointmentsService.post(req.body);
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const response = await appointmentsService.put(req.body);
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const response = await appointmentsService.delete(parseInt(req.params.id));
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

export default router;