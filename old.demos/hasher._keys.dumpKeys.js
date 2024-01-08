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


// var xPVpem = privateKey.export({type: "pkcs1",  format: "pem"});
// fs.writeFileSync("./demos/privateKey.pem", xPVpem)

// var xPBpem = publicKey.export({type: "pkcs1",  format: "pem"});
// fs.writeFileSync("./demos/publicKey.pem", xPBpem)

hash._dumpKeyFile("./demos/privateKey", privateKey);
hash._dumpKeyFile("./demos/publicKey", publicKey);
