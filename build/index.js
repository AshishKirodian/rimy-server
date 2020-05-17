"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
var path = require('path');
const bodyParser = __importStar(require("body-parser"));
const defaultRoutes_1 = require("./Routes/Default/Route/defaultRoutes");
const sampleRoute_1 = require("./Routes/Sample/Route/sampleRoute");
const ocrRoute_1 = require("./Routes/OCR/Route/ocrRoute");
const saveDAO_1 = require("./Routes/SaveHistory/Route/saveDAO");
const historyRoute_1 = require("./Routes/History/Route/historyRoute");
exports.app = express_1.default();
const fileUpload = require('express-fileupload');
const http = require("http");
exports.app.use(fileUpload({
    createParentPath: true
}));
exports.app.use('/static', express_1.default.static('uploads')); // to serve image files
exports.app.use(bodyParser.json());
exports.app.use(cors_1.default()); // to enable cors for requests
exports.app.use('/', sampleRoute_1.sampleRouter);
exports.app.use('/ocr', ocrRoute_1.OCRRouter);
exports.app.use('/history', saveDAO_1.saveRouter);
exports.app.use('/gethistory', historyRoute_1.historyRouter);
exports.app.use('*', defaultRoutes_1.defaultRouter); // if the user tries to access a path that does not exist.
const server = http.createServer(exports.app);
var port = 5000;
server.listen(port, () => {
    console.log('API active at port ' + port + '\nSave the files to run the server after changes');
});
//# sourceMappingURL=index.js.map