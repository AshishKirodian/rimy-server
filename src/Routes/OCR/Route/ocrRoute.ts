import * as express from 'express';
import ResponseUtils from '../../../Utils/responseUtils';
const vision = require('@google-cloud/vision');
const fileUpload = require('express-fileupload');

export var OCRRouter = express.Router();

OCRRouter.post('/scan', (req: any, res) => {
    try {
        if (!req.files) {
            res.status(500).send(
                ResponseUtils.messageFailure('Failed to convert') 
            )
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
            ).catch(error => {
                res.status(500).send(
                    ResponseUtils.messageFailure('Failed to convert' + error) 
                )
            })
        }
    } catch (e) {
        res.status(400).send(
            ResponseUtils.messageFailure('Bad input parameter' + e)
        )
    }
});

async function hello(file: string, client: any) {
    const [result] = await client.documentTextDetection(file);
    console.log(result);
    const fullTextAnnotation = result.textAnnotations;
    return fullTextAnnotation;
}