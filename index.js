"use strict";

const express = require('express');
const app = express();
const cors = require("cors");
var cloudinary = require('cloudinary');

app.use(cors());

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));

app.get('/api/v1/get-client-data', (req, res, next) => {
    try {
        let url = getClientData();
        return res.status(200).json({
            data: url
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }
})

const getClientData = () => {
    try {
        let urls = [
            'https://res.cloudinary.com/drwk19woa/video/upload/v1704810094/fixx2s3okym4vt29ask0.mp4',
            'https://res.cloudinary.com/drwk19woa/video/upload/v1704810089/csduahwm8d7mkmcu9tcf.mp4',
            'https://res.cloudinary.com/drwk19woa/video/upload/v1704810030/qwhw2cpcqcia8prmulbc.mp4'
        ]
        return urls;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const server = app.listen(4800, () => {
    console.log(`server started`);
})