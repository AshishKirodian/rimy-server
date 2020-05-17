import * as express from 'express';
import SaveDAO from '../DAO/saveDAO';
import ResponseUtils from '../../../Utils/responseUtils';
export var saveRouter = express.Router();

saveRouter.post('/save', (req, res) => {
    let imageURl = req.body.imageURL;
    let scannedText = req.body.scannedText;
    try {
        let resultRow = SaveDAO.saveHistory(imageURl, scannedText)
        resultRow.then(
            result => {
                res.status(200).send(
                    ResponseUtils.messageSuccess('record saved')
                );
            }
        ).catch(error => {
            res.status(500).send(
                ResponseUtils.messageFailure('Failed')
            )
        })
    } catch (e) {
        console.log('error', e);
        res.status(400).send(
            ResponseUtils.messageFailure('Invalid parameters')
        )
    }
});