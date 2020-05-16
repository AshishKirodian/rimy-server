
import express from 'express';
import cors from'cors';
import * as bodyParser from 'body-parser';
import { defaultRouter } from './Routes/Default/Route/defaultRoutes';
import { sampleRouter } from './Routes/Sample/Route/sampleRoute';
export const app = (express as any)();
const http = require("http");
 
app.use(bodyParser.json());
app.use((cors as any)()); // to enable cors for requests
app.use('/', sampleRouter);
app.use('*', defaultRouter) // if the user tries to access a path that does not exist.

const server = http.createServer(app);
  
var port = 5000;
server.listen(port, () => {
console.log('API active at port ' + port + '\nSave the files to run the server after changes');
})
