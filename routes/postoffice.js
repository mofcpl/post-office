var express = require('express');
var router = express.Router();

const email = require('../mail');

/* GET home page. */
router.post('/', function(req, res, next) 
{
    console.log("Message received...");

    if(email.sendMail(req.body.name, req.body.sender, req.body.subject, req.body.msg))
    {
        console.log("Error! Can't send email");
    }
    else
    {
        console.log("Message send");
    }
    
});

module.exports = router;
