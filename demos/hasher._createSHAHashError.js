/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.hasher._createSHAHashError.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require("path");
const _filelock = require("../index.js");

let fileHash = _filelock._createSHAHash("sha2563", "filelock.json", "base64");

console.log("[hasher-apis] demos/hasher-apis._createSHAHash.js: filelock - ", fileHash);

