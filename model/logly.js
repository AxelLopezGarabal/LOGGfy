//http://logs-01.loggly.com/inputs/ b017cf08-ef93-406e-a709-d9caece9ec0f/tag/http/

const subdomain = 'https://axellg.loggly.com/apiv2/customer'

var winston  = require('winston');
var {Loggly} = require('winston-loggly-bulk');

const token = '4d7baa7f-b131-43c3-b409-cebf1ce3a101'

function writeLog(msg){
    winston.add(new Loggly({
        token: token,
        subdomain: subdomain,
        tags: ["Winston-NodeJS"],
        json: true
    }));
    console.log(msg)
    winston.log('info', msg);
}

module.exports = {writeLog}