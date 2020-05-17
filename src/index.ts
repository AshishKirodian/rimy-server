
import express from 'express';
import cors from'cors';
var path = require('path');
import * as bodyParser from 'body-parser';
import { defaultRouter } from './Routes/Default/Route/defaultRoutes';
import { sampleRouter } from './Routes/Sample/Route/sampleRoute';
import { OCRRouter } from './Routes/OCR/Route/ocrRoute';
import { saveRouter } from './Routes/SaveHistory/Route/saveDAO';
import { historyRouter } from './Routes/History/Route/historyRoute';
export const app = (express as any)();
const fileUpload = require('express-fileupload');

const http = require("http");
 
app.use(fileUpload({
    createParentPath: true
}));

app.use('/static', express.static('uploads')) // to serve image files

app.use(bodyParser.json());
app.use((cors as any)()); // to enable cors for requests
app.use('/', sampleRouter);
app.use('/ocr', OCRRouter);
app.use('/history', saveRouter);
app.use('/gethistory', historyRouter);
app.use('*', defaultRouter) // if the user tries to access a path that does not exist.

const server = http.createServer(app);
  
var port = 5000;
server.listen(port, () => {
console.log('API active at port ' + port + '\nSave the files to run the server after changes');
})

