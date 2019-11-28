const express = require('express');
const router = express.Router();
const log = require('../node_modules/log-to-file');



router.post('/', (req, res, next) => {
    const bodyCheckLength = Object.keys(req.body).length === 1;
    const bodyCheckMessage = req.body.message !== undefined;
    if(bodyCheckLength && bodyCheckMessage){
        const message = req.body.message
        log(message, 'log.log');
        res.status(200).json(req.body);
    }
    else{
        res.status(400).json({message: 'bad'});
    }
});

module.exports = router;