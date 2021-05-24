"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.initializeApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let app = express_1.default();
exports.app = app;
const initializeApp = () => {
    let createError = require('http-errors');
    let path = require('path');
    let cookieParser = require('cookie-parser');
    let logger = require('morgan');
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    app.use(cors_1.default());
    app.use(logger('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express_1.default.static(path.join(__dirname, 'public')));
    // API Routes
    const versionRouter = require('./routes');
    app.use('/', versionRouter);
};
exports.initializeApp = initializeApp;
//# sourceMappingURL=app.js.map