const {privConKey} = require('./privcon.js');
const {privConSecret} = require('./privcon.js');
const {privConToken} = require('./privcon.js');
const {privConTokenSecret} = require('./privcon.js');

 module.exports = {
    consumer_key: 'privConKey',  
    consumer_secret: 'privConSecret',
    access_token: 'privConToken',  
    access_token_secret: 'privConTokenSecret',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
}
