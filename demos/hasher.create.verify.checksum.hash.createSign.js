/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.getHashes.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require("path");
const _filelock = require("../index.js");
const salt = "foobar";

// {
//     modulusLength: 4096,
//     publicKeyEncoding: {
//         type: 'spki',
//         format: 'pem'
//     },
//     privateKeyEncoding: {
//         type: 'pkcs8',
//         format: 'pem',
//         cipher: 'aes-256-cbc',
//         passphrase: 'secret'
//     }
// }

const crypto = require('crypto');


let { privateKey, publicKey, signature } = _filelock.createSign("This is a test", "sha256", "hex", "rsa", { modulusLength: 2048 }, {}, "createSign");
let rsignverify1 = _filelock.createSignVerify("This is a test", signature, publicKey, "sha256", "hex", {}, "createSign");
console.log(rsignverify1, signature);

