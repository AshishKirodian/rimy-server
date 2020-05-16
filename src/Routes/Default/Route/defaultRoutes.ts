import * as express from 'express';
export var defaultRouter = express.Router();

defaultRouter.get('*', (req, res) => {
    res.status(404).send('Path not found');
});