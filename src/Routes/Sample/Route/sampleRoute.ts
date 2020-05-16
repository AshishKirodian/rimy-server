import * as express from 'express';
export var sampleRouter = express.Router();

sampleRouter.get('/', (req, res) => {
    res.status(200).send('Hello World!! Welcome to Nodejs API development. Clone the app to make modifications and run');
});
