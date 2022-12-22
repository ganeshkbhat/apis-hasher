/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher._verifySHAHash.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require("path");
const _filelock = require("../index.js");

let fileHash = _filelock._createSHAHash("sha256", "filelock.json", "base64");

console.log("[hasher-apis] demos/hasher-apis._createSHAHash.js: filelock - ", fileHash);

let verifyHash = _filelock._verifySHAHash("sha256", "filelock.json", "base64", fileHash);
console.log("[hasher-apis] demos/hasher-apis._verifySHAHash.js: filelock - contents match :: ", verifyHash);
