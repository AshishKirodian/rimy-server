import * as express from 'express';
import ResponseUtils from '../../../Utils/responseUtils';
const vision = require('@google-cloud/vision');
const fileUpload = require('express-fileupload');

export var OCRRouter = express.Router();

OCRRouter.post('/scan', (req: any, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let fileName = req.files.file;
            fileName.mv('./uploads/' + fileName.name);
            const client = new vision.ImageAnnotatorClient();
            hello('./uploads/' + fileName.name, client).then(
                result => {
                    res.status(200).send(
                        ResponseUtils.messageSuccess(result)
                    )
                }
            )
            
        }
        // let resultRow = ExploreDAO.getSentence(parseInt(fileId, 10))
        // resultRow.then(
        //     result => {
        //         res.status(200).send(
        //             ResponseUtils.messageSuccess(result.rows)
        //         );
        //     }
        // ).catch(error => {
        //     console.log('db eror', error)
        //     res.status(500).send(
        //         ResponseUtils.messageFailure('Failed')
        //     )
        // })
    } catch (e) {
        console.log('error', e);
        res.status(400).send(
            ResponseUtils.messageFailure('Invalid parameters')
        )
    }
});

async function hello(file: string, client: any) {
    const [result] = await client.documentTextDetection(file);
    console.log(result);
    const fullTextAnnotation = result.textAnnotations;
    return fullTextAnnotation;
}