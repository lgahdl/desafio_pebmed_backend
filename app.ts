import express from "express";
import cors from 'cors';

let app = express();

const initializeApp = () => {
	let createError = require('http-errors');
	let path = require('path');
	let cookieParser = require('cookie-parser');
	let logger = require('morgan');

// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'pug');

	app.use(cors());
	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

// API Routes
	const versionRouter = require('./routes');
	app.use('/', versionRouter);

// Configure API Documentation
	const swaggerUi = require('swagger-ui-express');
	const YAML = require('yamljs');
	const swaggerDocument = YAML.load('./documentation/swagger.yaml');
}

export { initializeApp, app };
