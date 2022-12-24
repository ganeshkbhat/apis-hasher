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

let fileHash = _filelock._createSHAHash("filelock.json", "sha2563", "base64");
// let fileHash = _filelock._createSHAHash("filelock.json");

console.log("[hasher-apis] demos/hasher-apis._createSHAHash.js: filelock - ", fileHash);

