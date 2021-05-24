"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorDictionary_1 = __importDefault(require("../../helpers/errorDictionary"));
const patients_1 = __importDefault(require("./patients"));
const appointments_1 = __importDefault(require("./appointments"));
const router = express_1.default.Router();
/**
 * ROUTES
 */
router.use("/patients", patients_1.default);
router.use("/appointments", appointments_1.default);
router.use((err, req, res, next) => {
    let errObj;
    if (!err) {
        errObj = errorDictionary_1.default.UNKNOWN;
    }
    else if (err.name === "UniqueViolationError") {
        errObj = errorDictionary_1.default.DUP_KEY;
    }
    else if (err.name === "DBError") {
        errObj = errorDictionary_1.default.INCORRECT_PARAMETERS;
        errObj.customMessage = err.nativeError.sqlMessage;
    }
    else if (err.name === "ValidationError") {
        errObj = errorDictionary_1.default.INCORRECT_PARAMETERS;
        errObj.customMessage = err.message;
    }
    else if (err.code === "ECONNREFUSED") {
        errObj = errorDictionary_1.default.LOST_DB;
    }
    else if (err.message && err.message.indexOf('Cannot convert') >= 0) {
        errObj = errorDictionary_1.default.NOT_FOUND;
    }
    else if (err.statusCode) {
        errObj = err;
    }
    else {
        errObj = errorDictionary_1.default.UNKNOWN;
        console.error(err);
        errObj.err = err;
    }
    // Sends an error
    // set locals, only providing error in development
    res.locals.message = errObj.message;
    res.locals.error = req.app.get('env') === 'development' ? errObj : {};
    // render the error page
    res.status(errObj.statusCode || errObj.err.status || 500);
    res.render('error');
});
exports.default = router;
//# sourceMappingURL=index.js.map