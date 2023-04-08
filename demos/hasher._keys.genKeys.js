/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher._fileContentDeHash.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

var fs = require("fs");
var hash = require("../index");

var {privateKey, publicKey} = hash._genKeyPair();

console.log(JSON.stringify(privateKey.export({type: "pkcs1",  format: "pem"})));
console.log(JSON.stringify(publicKey.export({type: "pkcs1",  format: "pem"})));
