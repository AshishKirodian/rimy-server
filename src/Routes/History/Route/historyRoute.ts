import * as express from 'express';
import ResponseUtils from '../../../Utils/responseUtils';
import HistoryDAO from '../DAO/historyDAO';
export var historyRouter = express.Router();

historyRouter.get('/all', (req, res) => {
    try {
        let resultRow = HistoryDAO.getAllRecords()
        resultRow.then(
            result => {
                res.status(200).send(
                    ResponseUtils.messageSuccess(result.rows)
                );
            }
        ).catch(error => {
            console.log(error)
            res.status(500).send(
                ResponseUtils.messageFailure('Failed')
            )
        })
    } catch (e) {
        res.status(400).send(
            ResponseUtils.messageFailure('Invalid parameters')
        )
    }
});
