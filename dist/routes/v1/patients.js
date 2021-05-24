"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typedi_1 = require("typedi");
const patients_adapter_1 = __importDefault(require("../../adapters/patients.adapter"));
const router = express_1.default.Router();
const patientsService = typedi_1.Container.get('patients.service');
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield patientsService.findAll();
        return res.send(patients.map((patientModel) => patients_adapter_1.default.toJson(patientModel)));
    }
    catch (error) {
        return next(error);
    }
}));
router.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield patientsService.findById(parseInt(req.params.id));
        return res.send(patients_adapter_1.default.toJson(patients));
    }
    catch (error) {
        return next(error);
    }
}));
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patient = yield patientsService.post(req.body);
        return res.status(201).send(patients_adapter_1.default.toJson(patient));
    }
    catch (error) {
        return next(error);
    }
}));
router.patch("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.id);
        const patient = yield patientsService.patch(parseInt(req.params.id), req.body);
        return res.send(patients_adapter_1.default.toJson(patient));
    }
    catch (error) {
        return next(error);
    }
}));
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield patientsService.delete(parseInt(req.params.id));
        return res.status(204).send(response);
    }
    catch (error) {
        return next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=patients.js.map