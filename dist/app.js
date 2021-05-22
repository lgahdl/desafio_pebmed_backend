"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const patients_service_impl_1 = __importDefault(require("./services/objectionImpls/patients.service.impl"));
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// API Routes
const versionRouter = require('./routes');
app.use('/', versionRouter);
typedi_1.Container.set('patients.service', new patients_service_impl_1.default());
// Configure API Documentation
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./documentation/swagger.yaml');
exports.default = app;
//# sourceMappingURL=app.js.map