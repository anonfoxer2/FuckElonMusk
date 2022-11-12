const {privConKey} = require('./privcon');
const {privConSecret} = require('./privcon');
const {privConToken} = require('./privcon');
const {privConTokenSecret} = require('./privcon');

 module.exports = {
    consumer_key: 'privConKey',  
    consumer_secret: 'privConSecret',
    access_token: 'privConToken',  
    access_token_secret: 'privConTokenSecret',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
}
